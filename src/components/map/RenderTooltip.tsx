import { ToolTip } from './ToolTip';
import { ToolTipMobile } from './ToolTipMobile';
import { PropertiesLayer, RenderToolTipInterface } from '../../@types';
import { MOBILE_WIDTH } from '../../constants';
import { PHA_RETAILERS } from '../../constants/categories';

export default function renderTooltip({
  info,
  badges,
  width,
  setVisibleFeedback,
  setCurrentRetailerId
}: RenderToolTipInterface) {
  let toolTip = null;
  if (info?.object) {
    const {
      x,
      y,
      object,
      layer
    } = info;
    const objectTypified = object as PropertiesLayer;
    console.log('layer', layer?.id, width <= MOBILE_WIDTH && layer?.id === PHA_RETAILERS);
    toolTip = width <= MOBILE_WIDTH && layer?.id === PHA_RETAILERS
      ? ToolTipMobile({
        x, y, objectTypified, badges, setVisibleFeedback, setCurrentRetailerId
      })
      : ToolTip({
        x, y, objectTypified, badges, setVisibleFeedback, setCurrentRetailerId, layer, isMobile: width <= MOBILE_WIDTH
      });
  }
  return toolTip;
}
