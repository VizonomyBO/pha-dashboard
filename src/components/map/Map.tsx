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
import { PropertiesLayer, ViewStateChangeFn, ViewStateInterface } from '../../@types';
import { useMap } from '../../store/hooks/custom/useMap';
import { getDeckInitState } from './defaultGenerator';
import { useBadge } from '../../store/hooks/custom/useBadge';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const Map = () => {
  const { setShouldZoom } = useGeocoderDispatch();
  const [hoverInfo, setHoverInfo] = useState<PickInfo<Layer<unknown>[]>>();
  const [currentHovered, setCurrentHovered] = useState<string | undefined>(undefined);
  const { badges } = useBadge(currentHovered);
  const { inputText } = useGeocoderState() || {};
  const {
    layers,
    currentViewstate,
    setCurrentViewState,
    zoomToCenterMarker
  } = useMap();
  const {
    center, click, elementProperties
  } = useMarkerState() || {};
  const [deckState, setDeckState] = useState(getDeckInitState(inputText));
  const [isLoaded, setIsLoaded] = useState(false);
  const hideTooltip: ViewStateChangeFn = useMemo(() => ({ viewState }) => {
    setHoverInfo(undefined);
    setCurrentViewState(viewState);
  }, [setCurrentViewState]);
  const changeDeckState = useMemo(() => (viewState: ViewStateInterface) => {
    setDeckState((oldDeckState) => {
      const newDS = {
        ...oldDeckState,
        initialStateView: {
          ...viewState,
          transitionInterpolator: new FlyToInterpolator(),
          transitionDuration: 2000,
          onTransitionEnd: () => setShouldZoom(false)
        }
      };
      return newDS;
    });
  }, [setDeckState, setShouldZoom]);
  useEffect(() => {
    if (isLoaded) {
      changeDeckState(currentViewstate);
    }
  }, [currentViewstate, isLoaded, changeDeckState]);
  const expandTooltip = useMemo(() => (info: PickInfo<Layer<unknown>[]>) => {
    if (info.object) {
      console.info('info object', info);
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
    }
    if (click) {
      const viewportWebMercator = new WebMercatorViewport({
        width: window.innerWidth,
        height: window.innerHeight
      });
      const { x, y } = viewportWebMercator.project(center) as any;
      console.info(x, y);
    }
  }, [elementProperties, click, center, zoomToCenterMarker]);
  useEffect(() => {
    setDeckState((oldDeckState) => {
      const newDeckState = {
        ...oldDeckState,
        layers,
        onViewStateChange: hideTooltip,
        onClickFunction: expandTooltip,
        onLoadFunction: onLoad
      };
      return newDeckState;
    });
  }, [layers, hideTooltip, expandTooltip, onLoad]);
  return (
    <div className="map-container">
      <DeckGLComponent {...deckState}>{RenderTooltip(hoverInfo, badges)}</DeckGLComponent>
    </div>
  );
};
