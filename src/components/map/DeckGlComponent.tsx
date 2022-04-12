import { useRef } from 'react';
import { DeckGL } from 'deck.gl';
import Map from 'react-map-gl';
import { MAPBOX_KEY, BASEMAP, NO_DATA } from '../../constants/index';
import { NoDataProvided } from '../NoDataProvided';
import { DeckInterface } from '../../@types';

export const DeckGLComponent: React.FC<DeckInterface> = ({
  initialStateView,
  controller,
  layers,
  onViewStateChange,
  onClickFunction,
  onLoadFunction,
  children
}) => {
  const mapref = useRef(null);
  return (
    <div>
      {MAPBOX_KEY === NO_DATA ? (
        <NoDataProvided variables={['MAPBOX_KEY']} />
      ) : (
        <DeckGL
          initialViewState={initialStateView}
          controller={controller}
          layers={layers}
          onViewStateChange={onViewStateChange}
          onClick={onClickFunction}
          onLoad={onLoadFunction}
        >
          <Map ref={mapref} reuseMaps mapStyle={BASEMAP} mapboxAccessToken={MAPBOX_KEY} />
          { children }
        </DeckGL>
      )}
    </div>
  );
};
