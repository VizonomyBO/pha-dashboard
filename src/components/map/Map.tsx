import 'mapbox-gl/dist/mapbox-gl.css';
import {
  useState,
  useEffect,
  useMemo
} from 'react';
import { Layer, PickInfo } from 'deck.gl';
import { FlyToInterpolator } from '@deck.gl/core';
import { useGeocoderDispatch, useGeocoderState } from '../../store/hooks';
import { DeckGLComponent } from './DeckGlComponent';
import RenderTooltip from './RenderTooltip';
import { ViewStateChangeFn } from '../../@types';
import { useMap } from '../../store/hooks/custom/useMap';
import { getDeckInitState } from './defaultGenerator';

export const Map = () => {
  const { setShouldZoom } = useGeocoderDispatch();
  const [hoverInfo, setHoverInfo] = useState<PickInfo<Layer<unknown>[]>>();
  const { inputText } = useGeocoderState() || {};
  const { layers, currentViewstate, setCurrentViewState } = useMap();
  const [deckState, setDeckState] = useState(getDeckInitState(inputText));
  const [isLoaded, setIsLoaded] = useState(false);
  const hideTooltip: ViewStateChangeFn = useMemo(() => ({ viewState }) => {
    setHoverInfo(undefined);
    setCurrentViewState(viewState);
  }, [setCurrentViewState]);
  useEffect(() => {
    if (isLoaded) {
      setDeckState((oldDeckState) => {
        const newDS = {
          ...oldDeckState,
          initialStateView: {
            ...currentViewstate,
            transitionInterpolator: new FlyToInterpolator(),
            transitionDuration: 2000,
            ontransitionend: () => setShouldZoom(false)
          }
        };
        return newDS;
      });
    }
  }, [currentViewstate, setDeckState, isLoaded, setShouldZoom]);
  const expandTooltip = useMemo(() => (info: PickInfo<Layer<unknown>[]>) => {
    if (info.object) {
      setHoverInfo(info);
    } else {
      setHoverInfo(undefined);
    }
  }, []);
  const onLoad = useMemo(() => () => {
    setIsLoaded(true);
  }, []);
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
      <DeckGLComponent {...deckState}>{RenderTooltip(hoverInfo)}</DeckGLComponent>
    </div>
  );
};
