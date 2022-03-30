import React, { useState } from 'react';
import { DeckGL, Layer, PickInfo } from 'deck.gl';
import Map from 'react-map-gl';
import {
  MAPBOX_KEY,
  BASEMAP,
  NO_DATA,
  DEFAULT_VIEW_STATE
} from '../../constants/index';
import { NoDataProvided } from '../NoDataProvided';
import RenderTooltip from './RenderTooltip';
import IconLayerData from './IconLayerData';

const data = [
  { coordinates: [-100.45, 40.78], message: 'Hover over me', type: 'red' },
  { coordinates: [-95.45, 45.78], message: 'Hover over me', type: 'blue' },
  { coordinates: [-105.45, 50.78], message: 'Hover over me', type: 'green' }
];

export const DeckGLComponent = ({ layers }: { layers: Layer<unknown>[] }) => {
  const initialViewState = DEFAULT_VIEW_STATE;
  const controller = true;
  const [hoverInfo, setHoverInfo] = useState<PickInfo<Layer<unknown>[]>>();

  const hideTooltip = () => {
    setHoverInfo(undefined);
  };

  const expandTooltip = (info: unknown) => {
    console.log(info);
    if ((info as PickInfo<Layer<unknown>[]>).object) {
      setHoverInfo((info as PickInfo<Layer<unknown>[]>));
    }
  };
  let layer;
  if (layers) {
    layer = IconLayerData(data);
  }
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
            controller={controller}
            layers={layer}
            onViewStateChange={hideTooltip}
            onClick={(info: unknown) => expandTooltip(info)}
          /*  getCursor={(info: any) => 'pointer'} */
          /* onViewStateChange={handleViewStateChange} */
          /* onViewportChange={(viewport) => setViewport(viewport)} */
          >
            <Map
              id="mainMap"
              reuseMaps
              mapStyle={BASEMAP}
              mapboxAccessToken={MAPBOX_KEY}
            >
              {RenderTooltip(hoverInfo)}
              {/* <div style={{ margin: 10, left: 0, zIndex: 9999 }}>
                <NavigationControl position="bottom-right"
                showCompass={false} showZoom={true} visualizePitch={true}
                style={{ position: 'relative', right: 30, top: -20 }} />
              </div> */}
            </Map>
          </DeckGL>
        )}
    </div>
  );
};
