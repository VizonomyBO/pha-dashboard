import { ToolTip } from './ToolTip';
import { ToolTipMobile } from './ToolTipMobile';
import { PropertiesLayer, RenderToolTipInterface } from '../../@types';
import { MOBILE_WIDTH } from '../../constants';
import { PHA_RETAILERS_NO, PHA_RETAILERS_YES } from '../../constants/categories';

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
      object,
      layer
    } = info;
    const objectTypified = object as PropertiesLayer;
    toolTip = width <= MOBILE_WIDTH && (layer?.id === PHA_RETAILERS_NO || layer?.id === PHA_RETAILERS_YES)
      ? ToolTipMobile({
        objectTypified, badges, setVisibleFeedback, setCurrentRetailerId
      })
      : ToolTip({
        objectTypified, badges, setVisibleFeedback, setCurrentRetailerId, layer, isMobile: width <= MOBILE_WIDTH
      });
  }
  return toolTip;
}
