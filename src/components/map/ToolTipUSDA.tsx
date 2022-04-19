import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { TooltipProps } from '../../@types';

export const ToolTipUSDA = (data: TooltipProps) => {
  const {
    x,
    y,
    objectTypified,
    isMobile
  } = data;
  const popupRef = useRef<HTMLDivElement>(null);
  const [currentY, setCurrentY] = useState(y);
  useEffect(() => {
    if (popupRef.current) {
      setCurrentY(y - popupRef.current.getBoundingClientRect().height);
    }
  }, [popupRef, setCurrentY, y]);
  return (
    <div
      className={isMobile ? 'bmodal' : 'modal'}
      style={{ left: isMobile ? '' : x, top: isMobile ? '' : currentY }}
      ref={popupRef}
    >
      <div className={classNames('detailcard', isMobile ? 'detailCardOther' : '')}>
        <div className="store"><b>{objectTypified?.properties?.listing_name?.toUpperCase()}</b></div>
        <div className="address">{objectTypified?.properties?.location_address}</div>
        <div className="store"> Payment Type</div>
        <div className="address">{objectTypified?.properties?.snap_option}</div>
      </div>
    </div>
  );
};
