import { TooltipProps } from '../../@types';
import { CompletelyIntentionalAny } from '../../@types/database';
import { ToolTipPhaRetailer } from './ToolTipPhaRetailer';
import { ToolTipUSDA } from './ToolTipUSDA';
import { PHA_RETAILERS, USDA_RETAILERS } from '../../constants/categories';

export const ToolTip = (data: TooltipProps) => {
  const { layer } = data;
  const layerNotTyped: CompletelyIntentionalAny = layer;
  let toolTipSelected = <ToolTipPhaRetailer {...data} />;
  switch (layerNotTyped?.id) {
    case USDA_RETAILERS:
      toolTipSelected = <ToolTipUSDA {...data} />;
      break;
    case PHA_RETAILERS:
      toolTipSelected = <ToolTipPhaRetailer {...data} />;
      break;
    default:
      toolTipSelected = <ToolTipPhaRetailer {...data} />;
      break;
  }
  return toolTipSelected;
};
