import DeckGL from '@deck.gl/react';
import { Layer } from 'deck.gl';
import Map from 'react-map-gl';
import {
  MAPBOX_KEY,
  BASEMAP,
  NO_DATA,
  DEFAULT_VIEW_STATE
} from '../../constants/index';
import { NoDataProvided } from '../NoDataProvided';

export const DeckGLComponent = ({ layers }: { layers: Layer<unknown>[] }) => {
  const initialViewState = DEFAULT_VIEW_STATE;
  const controllerStatus = true;
  return (
    <div>
      {MAPBOX_KEY === NO_DATA ? (
        <NoDataProvided
          variables={['MAPBOX_KEY']}
        />
      )
        : (
          <DeckGL
            initialViewState={{ ...initialViewState }}
            layers={layers}
            controller={controllerStatus}
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
