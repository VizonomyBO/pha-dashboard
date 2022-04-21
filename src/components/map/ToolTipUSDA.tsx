import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { TooltipProps } from '../../@types';
import { useTooltip } from '../../store/hooks/custom/useTooltip';

export const ToolTipUSDA = (data: TooltipProps) => {
  const {
    x,
    y,
    objectTypified,
    isMobile
  } = data;
  const popupRef = useRef<HTMLDivElement>(null);
  const [currentY, setCurrentY] = useState(y);
  const { getAddress, getName } = useTooltip();

  useEffect(() => {
    if (popupRef.current) {
      setCurrentY(y - popupRef.current.getBoundingClientRect().height);
    }
  }, [popupRef, setCurrentY, y]);

  return (
    <div
      className={classNames({ bmodal: isMobile, 'usda-mobile': isMobile, modal: !isMobile })}
      style={{ left: isMobile ? '' : x, top: isMobile ? '' : currentY }}
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
