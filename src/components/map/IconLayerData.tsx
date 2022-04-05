import { Position } from 'deck.gl';
import { IconLayer } from '@deck.gl/layers';
import PinRed from './ic-pin-red.png';
import PinBlue from './ic-pin-blue.png';
import PinGreen from './ic-pin-green.png';

import { DataPhaDasboardMap } from '../../@types';

const COLORS = { GREEN: 'green', BLUE: 'blue' };

export const IconLayerData = (data: Array<DataPhaDasboardMap>) => (
  data.map((item: DataPhaDasboardMap) => {
    let icon = PinRed;
    if (item.geom.type === COLORS.BLUE) {
      icon = PinBlue;
    }
    if (item.geom.type === COLORS.GREEN) {
      icon = PinGreen;
    }
    return new IconLayer({
      id: `IconLayer%${item.retailer_id}`,
      data: [item],
      getIcon: () => ({
        id: 'marker',
        url: icon,
        anchorY: 15,
        height: 30,
        width: 22,
        getCursor: () => 'pointer',
        zIndex: 2
      }),
      getPosition: (d: unknown) => ((d as DataPhaDasboardMap).geom.coordinates as Position),
      getSize: () => 6,
      sizeScale: 7,
      pickable: true,
      style: 'cursor:pointer;',
      getCursor: () => 'pointer',
    });
  })
);
