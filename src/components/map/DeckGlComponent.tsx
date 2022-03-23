import DeckGL from '@deck.gl/react';
import Map from 'react-map-gl';
import { useState } from 'react';
import { MAPBOX_KEY, BASEMAP } from '../../constants/index';

export const DeckGLComponent = ({ layers }: { layers: any[] }) => {
  const [initialViewState] = useState({
    latitude: 39.02,
    longitude: -96,
    zoom: 3.1,
    bearing: 0,
    pitch: 0,
  });
  return (
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
  );
};
