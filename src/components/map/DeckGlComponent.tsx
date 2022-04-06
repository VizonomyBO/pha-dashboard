import { useState, useRef } from 'react';
import { DeckGL, PickInfo } from 'deck.gl';
import Map from 'react-map-gl';
import {
  MAPBOX_KEY, BASEMAP, NO_DATA, DEFAULT_VIEW_STATE
} from '../../constants/index';
import { NoDataProvided } from '../NoDataProvided';
import RenderTooltip from './RenderTooltip';
import { IconLayerData } from './IconLayerData';
import { DataPhaDasboardMap } from '../../@types';

export const DeckGLComponent = ({ dataForMarker }: { dataForMarker: DataPhaDasboardMap[] }) => {
  const mapref = useRef(null);
  const initialViewState = DEFAULT_VIEW_STATE;
  const controller = true;
  const [hoverInfo, setHoverInfo] = useState<PickInfo<DataPhaDasboardMap>>();
  const layer = dataForMarker ? IconLayerData(dataForMarker) : [];

  const hideTooltip = () => {
    setHoverInfo(undefined);
  };

  const expandTooltip = (info: unknown) => {
    if ((info as PickInfo<DataPhaDasboardMap>).object) {
      setHoverInfo(info as PickInfo<DataPhaDasboardMap>);
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
          {hoverInfo && RenderTooltip(hoverInfo)}
        </DeckGL>
      )}
    </div>
  );
};
