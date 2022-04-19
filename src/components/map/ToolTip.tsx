import { TooltipProps } from '../../@types';
import { CompletelyIntentionalAny } from '../../@types/database';
import { ToolTipPhaRetailer } from './ToolTipPhaRetailer';
import { ToolTipUSDA } from './ToolTipUSDA';
import { PHA_RETAILERS, USDA_RETAILERS } from '../../constants/categories';

export const ToolTip = (data: TooltipProps) => {
  const { layer } = data;
  const layerNotTyped: CompletelyIntentionalAny = layer;
  return (
    <>
      { layerNotTyped?.id === PHA_RETAILERS ? <ToolTipPhaRetailer {...data} /> : '' }
      { layerNotTyped?.id === USDA_RETAILERS ? <ToolTipUSDA {...data} /> : '' }
    </>
  );
};
