import { PickInfo } from 'deck.gl';
import { DataPhaDasboardMap } from '../../@types';
import { ToolTip } from './ToolTip';

export default function renderTooltip(info: PickInfo<DataPhaDasboardMap>) {
  let toolTip = null;
  if (info?.object) {
    toolTip = ToolTip(info);
  }
  return toolTip;
}
