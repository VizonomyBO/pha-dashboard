import { useState } from 'react';
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
import { DataPhaDasboardMap } from '../../@types';

export const DeckGLComponent = ({ dataForMarker }: { dataForMarker: DataPhaDasboardMap[] }) => {
  const initialViewState = DEFAULT_VIEW_STATE;
  const controller = true;
  const [hoverInfo, setHoverInfo] = useState<PickInfo<Layer<unknown>[]>>();
  const layer = dataForMarker ? IconLayerData(dataForMarker) : [];

  const hideTooltip = () => {
    setHoverInfo(undefined);
  };

  const expandTooltip = (info: unknown) => {
    if ((info as PickInfo<Layer<unknown>[]>).object) {
      setHoverInfo((info as PickInfo<Layer<unknown>[]>));
    }
  };

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
          >
            <Map
              id="mainMap"
              reuseMaps
              mapStyle={BASEMAP}
              mapboxAccessToken={MAPBOX_KEY}
            >
              {RenderTooltip(hoverInfo)}
            </Map>
          </DeckGL>
        )}
    </div>
  );
};
