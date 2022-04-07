import 'mapbox-gl/dist/mapbox-gl.css';
import { useState, useEffect, useMemo } from 'react';
import * as carto from '@deck.gl/carto';
import { Layer, PickInfo } from 'deck.gl';
import { deckDefaults } from './deckDefaults';
import { DeckGLComponent } from './DeckGlComponent';
import RenderTooltip from './RenderTooltip';
import { ViewStateChangeFn } from '../../@types';
import { ICON_MAPPING } from '../../constants';
import PinRed from './ic-pin-red.svg';

export const Map = () => {
  console.log('Map');
  const [hoverInfo, setHoverInfo] = useState<PickInfo<Layer<unknown>[]>>();
  const [deckState, setDeckState] = useState({ ...deckDefaults, renderToolTip: RenderTooltip });
  console.log(deckState);
  const [layers, setLayers] = useState([]);
  const [currentViewstate, setCurrentViewState] = useState(deckDefaults.initialStateView);
  const hideTooltip: ViewStateChangeFn = useMemo(() => ({ viewState }) => {
    setHoverInfo(undefined);
    console.log('Temporary log to see how to use it', currentViewstate);
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
    carto.setDefaultCredentials({
      apiBaseUrl: 'https://gcp-us-east1.api.carto.com',
      accessToken:
        // eslint-disable-next-line
        'eyJhbGciOiJIUzI1NiJ9.eyJhIjoiYWNfajl3eHQwbnoiLCJqdGkiOiI3ZjVkZTJhYiJ9.deIgT389U_YFodUSADFt5g6EccLWIJAbw1Ta0CraYxQ'
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const cartLayer = new (carto as any).CartoLayer({
      connection: 'carto_dw',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      type: (carto as any).MAP_TYPES.QUERY,
      data: 'select * from carto-dw-ac-j9wxt0nz.shared.pha_retailer_2',
      pointType: 'icon',
      pickable: true,
      getIconSize: () => 29,
      getIconColor: () => [255, 0, 0],
      getIcon: () => 'marker',
      iconMapping: ICON_MAPPING,
      iconAtlas: PinRed
    });
    setLayers(cartLayer);
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
  }, [expandTooltip, hideTooltip, layers]);

  return (
    <div className="map-container">
      <DeckGLComponent {...deckDefaults}>
        {RenderTooltip(hoverInfo)}
      </DeckGLComponent>
    </div>
  );
};
