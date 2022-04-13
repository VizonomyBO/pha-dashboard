import { ToolTip } from './ToolTip';
import { PropertiesLayer, RenderToolTipInterface } from '../../@types';

export default function renderTooltip({ info, badges }: RenderToolTipInterface) {
  let toolTip = null;
  if (info?.object) {
    const { x, y, object } = info;
    const objectTypified = object as PropertiesLayer;
    toolTip = ToolTip({
      x, y, objectTypified, badges
    });
  }
  return toolTip;
}
