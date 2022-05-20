import { useRef } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { TooltipProps } from '../../@types';
import { useMarketplaceDispatch } from '../../store/hooks';
import { TYPE_BUSINESS } from '../../constants';
import { useTooltip } from '../../store/hooks/custom/useTooltip';

export const ToolTipOSM = (data: TooltipProps) => {
  const {
    objectTypified,
    isMobile
  } = data;
  const popupRef = useRef<HTMLDivElement>(null);
  const { setBusinessDetails } = useMarketplaceDispatch();
  const { getAddress, getPostCode } = useTooltip();
  const name = objectTypified?.properties?.name || objectTypified?.properties?.listing_name;
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
      className={classNames({ bmodal: isMobile, 'usda-mobile': isMobile, modal: !isMobile })}
      ref={popupRef}
    >
      <div className={classNames('detailcard', { 'detail-card-other': isMobile })}>
        <div className={classNames('store', { 'store-osm-bottom': isMobile })}>
          <b>
            {name?.toUpperCase()}
          </b>
        </div>
        <div className="address margin-bottom-osm">
          {`${getAddress(objectTypified)}
          ${objectTypified?.properties?.city ? `${objectTypified?.properties?.city}, ` : ''} MS,
          ${getPostCode(objectTypified)}`}
        </div>
        <Link to={`/form/${name}`}>
          <button className="light-osm" type="button" onClick={() => setDataBusiness()}>
            Submit Retailer Info
          </button>
        </Link>
      </div>
    </div>
  );
};
