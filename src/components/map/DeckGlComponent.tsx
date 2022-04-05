import { useState, useRef } from 'react';
import { DeckGL, Layer, PickInfo } from 'deck.gl';
import Map from 'react-map-gl';
import {
  MAPBOX_KEY, BASEMAP, NO_DATA, DEFAULT_VIEW_STATE
} from '../../constants/index';
import { NoDataProvided } from '../NoDataProvided';
import RenderTooltip from './RenderTooltip';
import IconLayerData from './IconLayerData';

const data = [
  {
    coordinates: [-100.45, 40.78],
    message: 'Hover over me',
    type: 'red',
    retailerId: ''
  },
  {
    coordinates: [-95.45, 45.78],
    message: 'Hover over me',
    type: 'blue',
    retailerId: ''
  },
  {
    coordinates: [-105.45, 50.78],
    message: 'Hover over me',
    type: 'green',
    retailerId: ''
  }
];

export const DeckGLComponent = () => {
  const mapref = useRef(null);
  const initialViewState = DEFAULT_VIEW_STATE;
  const controller = true;
  const [hoverInfo, setHoverInfo] = useState<PickInfo<Layer<unknown>[]>>();
  const layer = IconLayerData(data);
  const hideTooltip = () => {
    setHoverInfo(undefined);
  };

  const expandTooltip = (info: unknown) => {
    if ((info as PickInfo<Layer<unknown>[]>).object) {
      setHoverInfo(info as PickInfo<Layer<unknown>[]>);
    }
  };

  return (
    <div>
      {MAPBOX_KEY === NO_DATA ? (
        <NoDataProvided variables={['MAPBOX_KEY']} />
      ) : (
        <DeckGL
          initialViewState={{ ...initialViewState }}
          controller={controller}
          layers={layer}
          onViewStateChange={hideTooltip}
          onClick={(info: unknown) => expandTooltip(info)}
        >
          <Map ref={mapref} reuseMaps mapStyle={BASEMAP} mapboxAccessToken={MAPBOX_KEY} />
          {RenderTooltip(hoverInfo)}
        </DeckGL>
      )}
    </div>
  );
};
