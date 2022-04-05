import { Layer, PickInfo } from 'deck.gl';
import { ToolTip } from './ToolTip';

export default function renderTooltip(info: PickInfo<Layer<unknown>[]> | undefined) {
  console.log('INFO TOOL', info);
  let toolTip = null;
  if (info?.object) {
    const { x, y } = info;
    toolTip = ToolTip({ x, y, retailerId: '' });
  }
  return toolTip;
}
