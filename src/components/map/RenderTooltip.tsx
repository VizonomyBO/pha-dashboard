import { Layer, PickInfo } from 'deck.gl';
import { ToolTip } from './ToolTip';
import { PropertiesLayer } from '../../@types';

export default function renderTooltip(info: PickInfo<Layer<unknown>[]> | undefined) {
  let toolTip = null;
  if (info?.object) {
    const { x, y, object } = info;
    const newObj = object as PropertiesLayer;
    toolTip = ToolTip({ x, y, newObj });
  }
  return toolTip;
}
