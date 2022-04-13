import { Layer, PickInfo } from 'deck.gl';
import { ToolTip } from './ToolTip';
import { PropertiesLayer } from '../../@types';
import { ToolTipMobile } from './ToolTipMobile';

export default function renderTooltip(info: PickInfo<Layer<unknown>[]> | undefined) {
  const pageWidth = document.documentElement.scrollWidth;
  let toolTip = null;
  if (info?.object) {
    const { x, y, object } = info;
    const objectTypified = object as PropertiesLayer;
    toolTip = pageWidth === 375 ? ToolTipMobile({ x, y, objectTypified }) : ToolTip({ x, y, objectTypified });
  }
  return toolTip;
}
