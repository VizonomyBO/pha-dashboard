import 'mapbox-gl/dist/mapbox-gl.css';
import {
  useState,
  useEffect,
  useMemo
} from 'react';
import { Layer, PickInfo, WebMercatorViewport } from 'deck.gl';
import { FlyToInterpolator } from '@deck.gl/core';
import { useGeocoderDispatch, useGeocoderState, useMarkerState } from '../../store/hooks';
import { DeckGLComponent } from './DeckGlComponent';
import RenderTooltip from './RenderTooltip';
import {
  DeckInterface,
  PropertiesLayer,
  ViewStateChangeFn,
  ViewStateInterface
} from '../../@types';
import { useMap } from '../../store/hooks/custom/useMap';
import { getDeckInitState } from './defaultGenerator';
import { useBadge } from '../../store/hooks/custom/useBadge';
import { useWindowSize } from '../../store/hooks/custom/useWindowSize';
import { CompletelyIntentionalAny } from '../../@types/database';

export const Map = (
  { setVisibleFeedback, setCurrentRetailerId }
  : { setVisibleFeedback: React.Dispatch<React.SetStateAction<boolean>>,
  setCurrentRetailerId: React.Dispatch<React.SetStateAction<string>>}
) => {
  const { setShouldZoom, setControllerZoom } = useGeocoderDispatch();
  const { shouldZoom, controllerZoom, inputText } = useGeocoderState() || {};
  const [hoverInfo, setHoverInfo] = useState<PickInfo<Layer<unknown>[]>>();
  const [currentHovered, setCurrentHovered] = useState<string | undefined>(undefined);
  const { badges } = useBadge(currentHovered);
  const { ref, width } = useWindowSize();
  const {
    layers,
    currentViewstate,
    setCurrentViewState,
    zoomToCenterMarker,
    finishRender,
    zoomEffect
  } = useMap();
  const {
    center, click, elementProperties
  } = useMarkerState() || {};
  const [deckState, setDeckState] = useState<DeckInterface>(getDeckInitState(inputText));
  const [isLoaded, setIsLoaded] = useState(false);
  const OFFSET_POPUP = 40;
  const hideTooltip: ViewStateChangeFn = useMemo(() => ({ viewState }) => {
    setHoverInfo(undefined);
    setCurrentViewState(viewState);
  }, [setCurrentViewState]);

  const openPopup = useMemo(() => () => {
    if (click && center[0] && center[1]) {
      const viewportWebMercator = new WebMercatorViewport({
        width: window.innerWidth,
        height: window.innerHeight
      });
      const newCoord = viewportWebMercator.projectFlat([center[0], center[1]]);
      const newInfo: PickInfo<Layer<unknown>[]> = {
        x: newCoord[0],
        y: newCoord[1] + OFFSET_POPUP,
        object: {
          ...elementProperties,
          geometry: elementProperties.geom,
          type: 'Feature'
        },
        coordinate: elementProperties.properties.geom.coordinates,
        index: 0,
        layer: layers.find((lay: CompletelyIntentionalAny) => lay.id === elementProperties.properties.source)
      };
      setHoverInfo(newInfo);
      setCurrentHovered(elementProperties?.properties?.retailer_id);
    }
  }, [click, center, elementProperties, layers]);
  const onEndTransition = useMemo(() => () => {
    if (!shouldZoom && controllerZoom.type === '') {
      openPopup();
    }
    setShouldZoom(false);
    setControllerZoom({ value: 0, type: '' });
  }, [setShouldZoom, openPopup, shouldZoom, setControllerZoom, controllerZoom]);
  const changeDeckState = useMemo(() => (viewState: ViewStateInterface) => {
    setDeckState((oldDeckState) => {
      const newDS = {
        ...oldDeckState,
        initialStateView: {
          ...viewState,
          transitionInterpolator: new FlyToInterpolator(),
          transitionDuration: 400,
          onTransitionEnd: onEndTransition
        }
      };
      return newDS;
    });
  }, [setDeckState, onEndTransition]);

  useEffect(() => {
    if (isLoaded) {
      changeDeckState(currentViewstate);
    }
  }, [currentViewstate, isLoaded, changeDeckState]);

  const expandTooltip = useMemo(() => (info: PickInfo<Layer<unknown>[]>) => {
    if (info.object) {
      setHoverInfo(info);
      const objectTypified = info.object as PropertiesLayer;
      setCurrentHovered(objectTypified?.properties?.retailer_id);
    } else {
      setHoverInfo(undefined);
    }
  }, []);

  const onLoad = useMemo(() => () => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (center[0] && center[1]) {
      zoomToCenterMarker(center);
      openPopup();
    }
  }, [click, center, zoomToCenterMarker, openPopup]);
  useEffect(() => {
    setDeckState((oldDeckState) => {
      const newDeckState = {
        ...oldDeckState,
        layers,
        onViewStateChange: hideTooltip,
        onClickFunction: expandTooltip,
        onLoadFunction: onLoad,
        onFinishRenderFunction: finishRender
      };
      return newDeckState;
    });
  }, [layers, hideTooltip, expandTooltip, onLoad, finishRender]);

  useEffect(() => {
    const { type } = controllerZoom || {};
    if (type !== '') {
      zoomEffect(type);
    }
  }, [controllerZoom, zoomEffect]);
  return (
    <div className="map-container" ref={ref}>
      <DeckGLComponent {...deckState} />
      {
        RenderTooltip({
          info: hoverInfo,
          badges,
          width,
          setVisibleFeedback,
          setCurrentRetailerId
        })
      }
    </div>
  );
};
