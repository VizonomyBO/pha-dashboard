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
  const [currentX, setCurrentX] = useState(x);
  const address = objectTypified?.properties?.address_1?.split(',');
  useEffect(() => {
    if (popupRef.current) {
      setCurrentY(y - popupRef.current.getBoundingClientRect().height - 10);
    }
  }, [y, popupRef, setCurrentY, badges]);

  useEffect(() => {
    if (popupRef.current) {
      setCurrentX(x - popupRef.current.getBoundingClientRect().width / 2);
    }
  }, [x, popupRef, setCurrentX, badges]);

  return (
    <div
      className="modal"
      style={{ left: currentX, top: currentY }}
      ref={popupRef}
    >
      <figure className="picture">
        <img
          src={getImageToDisplay(objectTypified)}
          alt=""
        />
      </figure>
      <div className="detailcard detail-pha">
        <div className="store store-bottom">{objectTypified?.properties?.name}</div>
        {badges.length !== 0 && (
          <div className="services services-bottom">
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
        )}
        <a
          href={
            `https://www.google.com/maps/dir/${
              objectTypified?.geometry?.coordinates[1]},${objectTypified?.geometry?.coordinates[0]}`
          }
          rel="noreferrer"
          target="_blank"
          className="address address-bottom"
        >
          {address ? `${address[0]},  ${address[1]}` : ''}
          <br />
          {address ? `${address[2]}` : ''}
        </a>
        <div className="phone phone-bottom">
          <span className="icphone" />
          <a
            href={
              `tel:${objectTypified?.properties?.phone}`
            }
            rel="noreferrer"
            className="number"
          >
            {formatPhone(objectTypified?.properties?.phone ?? '')}
          </a>
        </div>
        <Link to={`/profile/${objectTypified?.properties?.retailer_id}`}>
          <button className="light button-margin" type="button">
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
