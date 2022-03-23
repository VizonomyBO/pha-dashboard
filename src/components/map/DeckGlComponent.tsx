import DeckGL from '@deck.gl/react';
import { Layer } from 'deck.gl';
import Map from 'react-map-gl';
import { useState } from 'react';
import { MAPBOX_KEY, BASEMAP, NO_DATA } from '../../constants/index';
import { NoDataProvided } from '../NoDataProvided';

export const DeckGLComponent = ({ layers }: { layers: Layer<unknown>[] }) => {
  const [initialViewState] = useState({
    latitude: 39.02,
    longitude: -96,
    zoom: 3.1,
    bearing: 0,
    pitch: 0,
  });
  return (
    <div>
      {MAPBOX_KEY === NO_DATA ? (
        <NoDataProvided
          variables={['MAPBOX_KEY']}
        />
      )
        : (
          <DeckGL
            viewState={{ ...initialViewState }}
            layers={layers}
          >
            <Map
              id="mainMap"
              reuseMaps
              mapStyle={BASEMAP}
              mapboxAccessToken={MAPBOX_KEY}
            />
          </DeckGL>
        )}
    </div>
  );
};
