import { ToolTip } from './ToolTip';
import { ToolTipMobile } from './ToolTipMobile';
import { PropertiesLayer, RenderToolTipInterface } from '../../@types';

export default function renderTooltip({ info, badges }: RenderToolTipInterface) {
  const pageWidth = document.documentElement.scrollWidth;
  let toolTip = null;
  if (info?.object) {
    const { x, y, object } = info;
    const objectTypified = object as PropertiesLayer;
    toolTip = pageWidth === 375
      ? ToolTipMobile({
        x, y, objectTypified
      })
      : ToolTip({
        x, y, objectTypified, badges
      });
  }
  return toolTip;
}
