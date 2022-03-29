import { IconLayer } from '@deck.gl/layers';
import PinRed from './ic-pin-red.svg';
import PinBlue from './ic-pin-blue.svg';
import PinGreen from './ic-pin-green.svg';

export default function IconLayerData(data) {
  const layer = data.map((item, i) => {
    let icon = PinRed;
    if (item.type === 'blue') icon = PinBlue;
    if (item.type === 'green') icon = PinGreen;
    return new IconLayer({
      id: 'IconLayer' + i,
      data: [item],
      getIcon: () => ({
        id: 'marker',
        url: icon,
        anchorY: 60,
        height: 60,
        width: 60,
        getCursor: () => 'pointer',
        zIndex: 1 + 1
      }),
      getPosition: (d) => d.coordinates,
      getSize: () => 5,
      sizeScale: 10,
      pickable: true,
      style: 'cursor:pointer;',
      getCursor: () => 'pointer',
    });
  });
  return layer;
}
