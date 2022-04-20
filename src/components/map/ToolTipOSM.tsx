import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { TooltipProps } from '../../@types';
import { useMarketplaceDispatch } from '../../store/hooks';
import { TYPE_BUSINESS } from '../../constants';
import { useTooltip } from '../../store/hooks/custom/useTooltip';

export const ToolTipOSM = (data: TooltipProps) => {
  const {
    x,
    y,
    objectTypified,
    isMobile
  } = data;
  const popupRef = useRef<HTMLDivElement>(null);
  const [currentY, setCurrentY] = useState(y);
  const { setBusinessDetails } = useMarketplaceDispatch();
  const { getAddress, getPostCode } = useTooltip();
  useEffect(() => {
    if (popupRef.current) {
      setCurrentY(y - popupRef.current.getBoundingClientRect().height);
    }
  }, [popupRef, setCurrentY, y]);
  const setDataBusiness = () => {
    if (objectTypified.properties?.name) {
      setBusinessDetails(TYPE_BUSINESS.NAME, objectTypified.properties.name);
    }
    // commented because supposably they will return
    // if (objectTypified.properties?.address) {
    //   setBusinessDetails(TYPE_BUSINESS.ADDRESS_1, objectTypified.properties.address ?? '');
    // }
    // if (objectTypified.properties?.city) {
    //   setBusinessDetails(TYPE_BUSINESS.CITY, objectTypified.properties.city);
    // }
    // if (objectTypified.properties?.postcode) {
    //   setBusinessDetails(TYPE_BUSINESS.ZIPCODE, objectTypified.properties.postcode);
    // }
    // setBusinessDetails(TYPE_BUSINESS.STATE, 'MS');
    if (objectTypified?.geometry?.coordinates) {
      setBusinessDetails(TYPE_BUSINESS.LONGITUDE, objectTypified.geometry.coordinates[0]);
      setBusinessDetails(TYPE_BUSINESS.LATITUDE, objectTypified.geometry.coordinates[1]);
    }
    if (objectTypified?.properties?.master_id) {
      setBusinessDetails(TYPE_BUSINESS.MASTER_ID, objectTypified.properties.master_id);
    }
  };
  return (
    <div
      className={isMobile ? 'bmodal' : 'modal'}
      style={{ left: isMobile ? '' : x, top: isMobile ? '' : currentY }}
      ref={popupRef}
    >
      <div className={classNames('detailcard', isMobile ? 'detailCardOther' : '')}>
        <div className="store"><b>{objectTypified?.properties?.name?.toUpperCase()}</b></div>
        <div className="address">
          {
          `${getAddress(objectTypified)}
          ${objectTypified?.properties?.city ? (`${objectTypified?.properties?.city}, `) : ''} MS,
          ${getPostCode(objectTypified)}`
          }
        </div>
        <Link to="/form">
          <button className="lightOSM" type="button" onClick={() => setDataBusiness()}>
            Submit Retailer Info
          </button>
        </Link>
      </div>
    </div>
  );
};
