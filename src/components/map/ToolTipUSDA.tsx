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
  const [currentX, setCurrentX] = useState(x);
  const { getAddress, getName } = useTooltip();
  useEffect(() => {
    if (popupRef.current) {
      setCurrentY(y - popupRef.current.getBoundingClientRect().height - 10);
    }
  }, [y, popupRef, setCurrentY]);

  useEffect(() => {
    if (popupRef.current) {
      setCurrentX(x - popupRef.current.getBoundingClientRect().width / 2);
    }
  }, [x, popupRef, setCurrentX]);

  return (
    <div
      className={classNames({ bmodal: isMobile, 'usda-mobile': isMobile, modal: !isMobile })}
      style={{ left: isMobile ? '' : currentX, top: isMobile ? '' : currentY }}
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
