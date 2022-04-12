import 'mapbox-gl/dist/mapbox-gl.css';
import {
  useState,
  useEffect,
  useMemo
} from 'react';
import { Layer, PickInfo, WebMercatorViewport } from 'deck.gl';
import { FlyToInterpolator } from '@deck.gl/core';
import { deckDefaults } from './deckDefaults';
import { useGeocoderDispatch, useGeocoderState } from '../../store/hooks';
import { DeckGLComponent } from './DeckGlComponent';
import RenderTooltip from './RenderTooltip';
import { ViewStateChangeFn } from '../../@types';
import { useMap } from '../../store/hooks/custom/useMap';

export const Map = () => {
  const { setShouldZoom } = useGeocoderDispatch();
  const { inputText } = useGeocoderState() || {};
  const [hoverInfo, setHoverInfo] = useState<PickInfo<Layer<unknown>[]>>();
  const getDeckInitState = () => {
    const newDeckDefault = {
      ...deckDefaults
    };
    if (inputText?.bbox && inputText.bbox.length === 4) {
      const viewportWebMercator = new WebMercatorViewport({
        width: window.innerWidth,
        height: window.innerHeight
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newviewport: any = viewportWebMercator.fitBounds(
        [
          [inputText.bbox[0], inputText.bbox[1]],
          [inputText.bbox[2], inputText.bbox[3]]
        ],
        {
          padding: 200
        }
      );
      newDeckDefault.initialStateView = {
        ...newDeckDefault.initialStateView,
        latitude: newviewport.latitude,
        longitude: newviewport.longitude,
        zoom: newviewport.zoom
      };
    } else if (inputText?.text !== '' && inputText?.center) {
      newDeckDefault.initialStateView = {
        ...newDeckDefault.initialStateView,
        latitude: inputText.center[1],
        longitude: inputText.center[0],
        zoom: 12
      };
    }
    return { ...newDeckDefault, renderToolTip: RenderTooltip };
  };
  const { layers, currentViewstate, setCurrentViewState } = useMap();
  const [deckState, setDeckState] = useState(getDeckInitState());
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
            ontransitionend: setShouldZoom(false)
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
