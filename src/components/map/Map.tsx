import 'mapbox-gl/dist/mapbox-gl.css';
import { useState, useEffect, useMemo } from 'react';
import { Layer, PickInfo } from 'deck.gl';
import { deckDefaults } from './deckDefaults';
import { DeckGLComponent } from './DeckGlComponent';
import RenderTooltip from './RenderTooltip';
import { ViewStateChangeFn } from '../../@types';
import { useMap } from '../../store/hooks/custom/useMap';

export const Map = () => {
  const [hoverInfo, setHoverInfo] = useState<PickInfo<Layer<unknown>[]>>();
  const [deckState, setDeckState] = useState({ ...deckDefaults, renderToolTip: RenderTooltip });
  const { layers } = useMap();
  const [currentViewstate, setCurrentViewState] = useState(deckDefaults.initialStateView);
  const hideTooltip: ViewStateChangeFn = useMemo(() => ({ viewState }) => {
    console.log('vurr', currentViewstate);
    setHoverInfo(undefined);
    setCurrentViewState(viewState);
  }, [currentViewstate]);

  const expandTooltip = useMemo(() => (info: PickInfo<Layer<unknown>[]>) => {
    if (info.object) {
      setHoverInfo(info);
    } else {
      setHoverInfo(undefined);
    }
  }, []);

  useEffect(() => {
    setDeckState((oldDeckState) => {
      const newDeckState = {
        ...oldDeckState,
        layers,
        onViewStateChange: hideTooltip,
        onClickFunction: expandTooltip
      };
      return newDeckState;
    });
  }, [layers, hideTooltip, expandTooltip]);
  return (
    <div className="map-container">
      <DeckGLComponent {...deckState}>{RenderTooltip(hoverInfo)}</DeckGLComponent>
    </div>
  );
};
