import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { TooltipProps } from '../../@types';
import { useMarketplaceDispatch } from '../../store/hooks';
import { TYPE_BUSINESS } from '../../constants';

export const ToolTipOSM = (data: TooltipProps) => {
  const {
    x,
    y,
    objectTypified
  } = data;
  const popupRef = useRef<HTMLDivElement>(null);
  const [currentY, setCurrentY] = useState(y);
  const { setBusinessDetails } = useMarketplaceDispatch();
  useEffect(() => {
    if (popupRef.current) {
      setCurrentY(y - popupRef.current.getBoundingClientRect().height);
    }
  }, [popupRef, setCurrentY, y]);
  const setDataBusiness = () => {
    console.log(objectTypified);
    if (objectTypified.properties?.name) {
      setBusinessDetails(TYPE_BUSINESS.NAME, objectTypified.properties.name);
    }
    if (objectTypified.properties?.address) {
      setBusinessDetails(TYPE_BUSINESS.ADDRESS_1, objectTypified.properties.address ?? '');
    }
    if (objectTypified.properties?.city) {
      setBusinessDetails(TYPE_BUSINESS.CITY, objectTypified.properties.city);
    }
    if (objectTypified.properties?.postcode) {
      setBusinessDetails(TYPE_BUSINESS.ZIPCODE, objectTypified.properties.postcode);
    }
    if (objectTypified?.geometry?.coordinates) {
      setBusinessDetails(TYPE_BUSINESS.LONGITUDE, objectTypified.geometry.coordinates[0]);
      setBusinessDetails(TYPE_BUSINESS.LATITUDE, objectTypified.geometry.coordinates[1]);
    }
    setBusinessDetails(TYPE_BUSINESS.STATE, 'MS');
  };
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
        <Link to="/form">
          <button className="lightOSM" type="button" onClick={() => setDataBusiness()}>
            Submit Retailer Info
          </button>
        </Link>
      </div>
    </div>
  );
};
