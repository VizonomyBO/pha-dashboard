import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { TooltipProps } from '../../@types';

export const ToolTipOSM = (data: TooltipProps) => {
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
        <div className="store"><b>{objectTypified?.properties?.name?.toUpperCase()}</b></div>
        <div className="address">
          {
          `${objectTypified?.properties?.address ?? ''}, 
          ${objectTypified?.properties?.city ?? ''}, MS, 
          ${objectTypified?.properties?.postcode ?? ''}`
          }
        </div>
        <Link to={`/profile/${objectTypified?.properties?.retailer_id}`}>
          <button className="lightOSM" type="button">
            Submit Retailer Info
          </button>
        </Link>
      </div>
    </div>
  );
};
