import { useEffect, useRef, useState } from 'react';
import { TooltipProps } from '../../@types';

export const ToolTipUSDA = (data: TooltipProps) => {
  const {
    x,
    y,
    objectTypified
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
      className="modal"
      style={{ left: x, top: currentY }}
      ref={popupRef}
    >
      <div className="detailcard">
        <div className="store"><b>{objectTypified?.properties?.listing_name?.toUpperCase()}</b></div>
        <div className="address">{objectTypified?.properties?.location_address}</div>
        <div className="store"> Payment Type</div>
        <div className="address">{objectTypified?.properties?.snap_option}</div>
      </div>
    </div>
  );
};
