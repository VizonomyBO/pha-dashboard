import { Layer, Position } from 'deck.gl';
import { IconLayer } from '@deck.gl/layers';
import PinRed from './ic-pin-red.svg';
import PinBlue from './ic-pin-blue.svg';
import PinGreen from './ic-pin-green.svg';
import { dataMapGl } from '../../@types';

const COLORS = { GREEN: 'green', BLUE: 'blue' };

export default function IconLayerData(data: Array<dataMapGl>): Layer<unknown>[] {
  const layer: Layer<unknown>[] = data.map((item: dataMapGl, i: number) => {
    let icon = PinRed;
    if (item.type === COLORS.BLUE) {
      icon = PinBlue;
    }
    if (item.type === COLORS.GREEN) {
      icon = PinGreen;
    }
    return new IconLayer({
      id: `IconLayer%${i}`,
      data: [item],
      getIcon: () => ({
        id: 'marker',
        url: icon,
        anchorY: 60,
        height: 60,
        width: 60,
        getCursor: () => 'pointer',
        zIndex: 2
      }),
      getPosition: (d: unknown) => ((d as dataMapGl).coordinates as Position), // TODO fix any
      getSize: () => 5,
      sizeScale: 10,
      pickable: true,
      style: 'cursor:pointer;',
      getCursor: () => 'pointer',
    });
  });
  return layer;
}
