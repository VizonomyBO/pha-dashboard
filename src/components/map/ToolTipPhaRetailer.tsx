/* eslint-disable array-callback-return */
import { Paper } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Link } from 'react-router-dom';
import { TooltipProps } from '../../@types';
import { useTooltip } from '../../store/hooks/custom/useTooltip';
import { BADGES, DEFAULT_IMAGE, MAX_ELEMENTS } from '../../constants';
import { formatPhone } from '../../utils/textFormatter';

export const ToolTipPhaRetailer = (data: TooltipProps) => {
  const [returnImg, setReurnImg] = useState<string[]>();
  const {
    objectTypified,
    badges,
    setVisibleFeedback,
    setCurrentRetailerId
  } = data;
  const { getImageToDisplayList, imageIndividual } = useTooltip(objectTypified);
  const openIndividualForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setVisibleFeedback(true);
    setCurrentRetailerId(objectTypified?.properties?.retailer_id ?? '');
  };
  const popupRef = useRef<HTMLDivElement>(null);
  const address = objectTypified?.properties?.address_1?.split(',');
  useEffect(() => {
    if (objectTypified) {
      const imgReturn = getImageToDisplayList(objectTypified).concat(imageIndividual);
      if (imgReturn.length === 0) {
        imgReturn.push(DEFAULT_IMAGE);
      }
      if (imgReturn.length > MAX_ELEMENTS) {
        imgReturn.length = MAX_ELEMENTS;
      }
      setReurnImg(imgReturn);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageIndividual]);
  return (
    <div
      className="modal"
      ref={popupRef}
    >
      <figure className="picture">
        <Carousel
          animation="fade"
          navButtonsAlwaysVisible
          autoPlay={false}
          activeIndicatorIconButtonProps={{
            style: {
              zIndex: '2',
              bottom: '40px',
            }
          }}
          indicatorIconButtonProps={{
            style: {
              zIndex: '2',
              bottom: '40px',
            }
          }}
        >
          {
            returnImg?.map((item, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <Paper key={`picture${i}`} className="HeightItem">
                <img
                  src={item}
                  alt=""
                  className="img"
                />
              </Paper>
            ))
          }
        </Carousel>
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
            {objectTypified?.properties?.superstar_badge && objectTypified.properties?.superstar_badge === 'Yes' && (
              <span
                key="meets_need"
                className="kind"
                style={{
                  content: `url("${BADGES.meets_need.image}")`
                }}
              />
            )}
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
