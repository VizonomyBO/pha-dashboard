import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { TooltipProps } from '../../@types';
import { useTooltip } from '../../store/hooks/custom/useTooltip';
import { BADGES } from '../../constants';
import { formatPhone } from '../../utils/textFormatter';

export const ToolTipPhaRetailer = (data: TooltipProps) => {
  const { getImageToDisplay } = useTooltip();
  const {
    x,
    y,
    objectTypified,
    badges,
    setVisibleFeedback,
    setCurrentRetailerId
  } = data;
  const openIndividualForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setVisibleFeedback(true);
    setCurrentRetailerId(objectTypified?.properties?.retailer_id ?? '');
  };
  const popupRef = useRef<HTMLDivElement>(null);
  const [currentY, setCurrentY] = useState(y);
  useEffect(() => {
    if (popupRef.current) {
      setCurrentY(y - popupRef.current.getBoundingClientRect().height);
    }
  }, [y, popupRef, setCurrentY]);
  return (
    <div
      className="modal"
      style={{ left: x, top: currentY }}
      ref={popupRef}
    >
      <figure className="picture">
        <img
          src={getImageToDisplay(objectTypified)}
          alt=""
        />
      </figure>
      <div className="detailcard">
        <div className="store">{objectTypified?.properties?.name}</div>
        <div className="services">
          {badges.map((badge) => (
            <span
              key={badge}
              className="kind"
              style={{
                content: `url("${BADGES[badge].image}")`
              }}
            />
          ))}
        </div>
        <div className="address">{objectTypified?.properties?.address_1}</div>
        <div className="phone">
          <span className="icphone" />
          <span className="number">
            {formatPhone(objectTypified?.properties?.phone ? objectTypified?.properties?.phone : '')}
          </span>
        </div>
        <Link to={`/profile/${objectTypified?.properties?.retailer_id}`}>
          <button className="light" type="button">
            View Details
          </button>
        </Link>
        <div className="pinaddcomment">
          <button className="light" type="button" onClick={(e) => openIndividualForm(e)}>
            <span className="icaddcoment" />
          </button>
        </div>
      </div>
    </div>
  );
};
