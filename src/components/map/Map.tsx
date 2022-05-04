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
import { MOBILE_WIDTH, DEFAULT_VIEW_STATE, DEFAULT_VIEW_STATE_MOBILE } from '../../constants';

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
    zoomEffect,
    TRANSITION_DURATION
  } = useMap();
  const {
    center, elementProperties
  } = useMarkerState() || {};
  const initView = width <= MOBILE_WIDTH ? DEFAULT_VIEW_STATE_MOBILE : DEFAULT_VIEW_STATE;
  const TRANSITION_OFFSET = 200;
  const [deckState, setDeckState] = useState<DeckInterface>(getDeckInitState(inputText, initView));
  useEffect(() => {
    const initViewState = width <= MOBILE_WIDTH ? DEFAULT_VIEW_STATE_MOBILE : DEFAULT_VIEW_STATE;
    setDeckState(getDeckInitState(inputText, initViewState));
  }, [width, inputText]);
  const [isLoaded, setIsLoaded] = useState(false);
  const hideTooltip: ViewStateChangeFn = useMemo(() => ({ viewState }) => {
    setHoverInfo(undefined);
    setCurrentViewState(viewState);
  }, [setCurrentViewState]);

  const openPopup = useMemo(() => (centerPopup: number[]) => {
    if (centerPopup[0] && centerPopup[1]) {
      const viewportWebMercator = new WebMercatorViewport({
        width: window.innerWidth,
        height: window.innerHeight
      });
      const newCoord = viewportWebMercator.projectFlat([centerPopup[0], centerPopup[1]]);
      const newInfo: PickInfo<Layer<unknown>[]> = {
        x: newCoord[0],
        y: newCoord[1],
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
  }, [elementProperties, layers]);
  const onEndTransition = useMemo(() => () => {
    if (!shouldZoom && controllerZoom.type === '') {
      openPopup(center);
    }
    setShouldZoom(false);
    setControllerZoom({ value: 0, type: '' });
  }, [center, setShouldZoom, openPopup, shouldZoom, setControllerZoom, controllerZoom]);
  const changeDeckState = useMemo(() => (viewState: ViewStateInterface) => {
    setDeckState((oldDeckState) => {
      const newDS = {
        ...oldDeckState,
        initialStateView: {
          ...viewState,
          transitionInterpolator: new FlyToInterpolator(),
          transitionDuration: viewState.transitionDuration ?? TRANSITION_DURATION,
          onTransitionEnd: onEndTransition
        }
      };
      return newDS;
    });
  }, [setDeckState, onEndTransition, TRANSITION_DURATION]);

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
      setTimeout(() => {
        openPopup(center);
      }, TRANSITION_DURATION + TRANSITION_OFFSET);
    }
  }, [center, zoomToCenterMarker, openPopup, TRANSITION_DURATION, TRANSITION_OFFSET]);
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
