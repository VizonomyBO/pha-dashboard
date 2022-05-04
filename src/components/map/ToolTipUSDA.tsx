import { useRef } from 'react';
import classNames from 'classnames';
import { TooltipProps } from '../../@types';
import { useTooltip } from '../../store/hooks/custom/useTooltip';

export const ToolTipUSDA = (data: TooltipProps) => {
  const {
    objectTypified,
    isMobile
  } = data;
  const popupRef = useRef<HTMLDivElement>(null);
  const { getAddress, getName } = useTooltip();
  return (
    <div
      className={classNames({ bmodal: isMobile, 'usda-mobile': isMobile, modal: !isMobile })}
      ref={popupRef}
    >
      <div className={classNames('detailcard', { 'detail-card-other': isMobile })}>
        <div className="store store-usda-bottom">
          <b>{getName(objectTypified).toUpperCase()}</b>
        </div>
        <div className="address margin-bottom">{getAddress(objectTypified)}</div>
        <div className="store margin-bottom-payment"> Payment Type</div>
        <div className="payment">{objectTypified?.properties?.snap_option ?? 'No payment type collected'}</div>
      </div>
    </div>
  );
};
