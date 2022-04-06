import 'mapbox-gl/dist/mapbox-gl.css';
import { useState, useEffect } from 'react';
import { CartoLayer, MAP_TYPES, setDefaultCredentials } from '@deck.gl/carto';
import { Layer, PickInfo } from 'deck.gl';
import { deckDefaults } from './deckDefaults';
import { DeckGLComponent } from './DeckGlComponent';
import RenderTooltip from './RenderTooltip';
// import { WebMercatorViewport } from '@deck.gl/core';
import PinRed from './ic-pin-red.svg';

export const Map = () => {
  const [hoverInfo, setHoverInfo] = useState<PickInfo<Layer<unknown>[]>>();
  const [deckState, setDeckState] = useState({ ...deckDefaults, renderToolTip: RenderTooltip });
  const [layers, setLayers] = useState([]);

  // const { getCartoToken, cartoToken } = useDeckgl();
  const hideTooltip = () => {
    setHoverInfo(undefined);
  };
  const expandTooltip = (info: any) => {
    if (info.object) {
      setHoverInfo(info);
    } else {
      setHoverInfo(undefined);
    }
  };
  const ICON_MAPPING = {
    marker: {
      x: 0,
      y: 0,
      width: 32,
      height: 42,
      mask: false
    }
  };
  useEffect(() => {
    // getCartoToken();
    setDefaultCredentials({
      apiBaseUrl: 'https://gcp-us-east1.api.carto.com',
      accessToken:
        // eslint-disable-next-line
        'eyJhbGciOiJIUzI1NiJ9.eyJhIjoiYWNfajl3eHQwbnoiLCJqdGkiOiI3ZjVkZTJhYiJ9.deIgT389U_YFodUSADFt5g6EccLWIJAbw1Ta0CraYxQ'
    });
    // let icon = PinRed;
    const cartLayer = new CartoLayer({
      connection: 'carto_dw',
      type: MAP_TYPES.QUERY,
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
    console.log('layers', layers);
    setDeckState({
      ...deckState,
      layers,
      onViewStateChange: hideTooltip,
      onClickFunction: expandTooltip
    });
  }, [layers]);
  // const newprops = {
  //   layers: layers
  // };
  return (
    <div className="map-container">
      <DeckGLComponent {...deckState}>{RenderTooltip(hoverInfo)}</DeckGLComponent>
    </div>
  );
};
