import { Link } from 'react-router-dom';
import { PropertiesLayer } from '../../@types';

export const ToolTipMobile = (data: { x: number; y: number; objectTypified: PropertiesLayer }) => {
  const { objectTypified } = data;
  const openIndividualForm = () => {
    console.info('open form');
  };
  return (
    <>
      <Link to={`profile/${objectTypified?.properties?.retailer_id}`}>
        <div className="bmodal">
          <figure className="picture">
            <img src={objectTypified?.properties?.owner_photo} alt="" />
          </figure>
          <div className="detailcard">
            <div className="store">{objectTypified?.properties?.name}</div>
            <div className="services">
              <span className="kind icmkdish" />
              <span className="kind icmkshop" />
              <span className="kind icmkdish" />
              <span className="kind icmkshop" />
              <span className="kind icmkshop" />
            </div>
            <div className="address">{objectTypified?.properties?.address_1}</div>
            <div className="phone">
              <span className="icphone" />
              <span className="number">{objectTypified?.properties?.phone}</span>
            </div>
          </div>
        </div>
      </Link>
      <div className="bmodal-ts">
        <div className="pinaddcomment">
          <button className="light" type="button" onClick={() => openIndividualForm()}>
            <span className="icaddcoment" />
          </button>
        </div>
      </div>
    </>
  );
};
