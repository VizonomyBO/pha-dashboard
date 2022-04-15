import { Position } from 'deck.gl';
import { IconLayer } from '@deck.gl/layers';
import PinRed from './ic-pin-red.svg';
import PinBlue from './ic-pin-blue.svg';
import PinGreen from './ic-pin-green.svg';
import { PhaRetailer } from '../../@types/database';

const COLORS = { GREEN: 'green', BLUE: 'blue' };

export const IconLayerData = (data: PhaRetailer[]) => (
  data.map((item: PhaRetailer) => {
    let icon = PinRed;
    if (item?.geom?.type === COLORS.BLUE) {
      icon = PinBlue;
    }
    if (item?.geom?.type === COLORS.GREEN) {
      icon = PinGreen;
    }
    return new IconLayer({
      id: `IconLayer%${item.retailer_id}`,
      data: [item],
      getIcon: () => ({
        id: 'marker',
        url: icon,
        anchorY: 60,
        height: 60,
        width: 55,
        getCursor: () => 'pointer',
        zIndex: 2
      }),
      getPosition: (d: unknown) => ((d as PhaRetailer)?.geom?.coordinates as Position),
      getIconSize: () => 30,
      sizeScale: 5,
      pickable: true,
      style: 'cursor:pointer;',
      getCursor: () => 'pointer',
    });
  })
);
