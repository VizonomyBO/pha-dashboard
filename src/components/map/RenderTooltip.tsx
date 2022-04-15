import { ToolTip } from './ToolTip';
import { ToolTipMobile } from './ToolTipMobile';
import { PropertiesLayer, RenderToolTipInterface } from '../../@types';
import { MOBILE_WIDTH } from '../../constants';

export default function renderTooltip({
  info,
  badges,
  width,
  setVisibleFeedback,
  setCurrentRetailerId
}: RenderToolTipInterface) {
  let toolTip = null;
  if (info?.object) {
    const { x, y, object } = info;
    const objectTypified = object as PropertiesLayer;
    toolTip = width === MOBILE_WIDTH
      ? ToolTipMobile({
        x, y, objectTypified
      })
      : ToolTip({
        x, y, objectTypified, badges, setVisibleFeedback, setCurrentRetailerId
      });
  }
  return toolTip;
}
