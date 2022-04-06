import { useState, useRef, useEffect } from 'react';
import { DeckGL, Layer, PickInfo } from 'deck.gl';
import Map from 'react-map-gl';
import { CartoLayer, MAP_TYPES, setDefaultCredentials } from '@deck.gl/carto';
import PinRed from './ic-pin-red.svg';
// import { WebMercatorViewport } from '@deck.gl/core';
import {
  MAPBOX_KEY, BASEMAP, NO_DATA, DEFAULT_VIEW_STATE
} from '../../constants/index';
import { NoDataProvided } from '../NoDataProvided';
import RenderTooltip from './RenderTooltip';
import { DeckInterface } from '../../@types';

export const DeckGLComponent = ({
  initialStateView,
  controller,
  layers,
  onViewStateChange,
  onClickFunction
} : DeckInterface) => {
  const mapref = useRef(null);
  return (
    <div>
      {MAPBOX_KEY === NO_DATA ? (
        <NoDataProvided variables={['MAPBOX_KEY']} />
      ) : (
        <DeckGL
          initialViewState={{ ...initialStateView }}
          controller={controller}
          layers={layers}
          onViewStateChange={onViewStateChange}
          onClick={onClickFunction}
        >
          <Map ref={mapref} reuseMaps mapStyle={BASEMAP} mapboxAccessToken={MAPBOX_KEY} />
          {/* {RenderTooltip(hoverInfo)} */}
        </DeckGL>
      )}
    </div>
  );
};
