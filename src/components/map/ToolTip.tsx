import { Link } from 'react-router-dom';
import { PropertiesLayer } from '../../@types';

export const ToolTip = (data: { x: number; y: number; objectTypified: PropertiesLayer }) => {
  const { x, y, objectTypified } = data;
  const openIndividualForm = () => {
    console.log('open form');
  };
  return (
    <div className="modal" style={{ left: x, top: y - 460 }}>
      <figure className="picture">
        <img src={`/public/images/${objectTypified?.properties?.owner_photo}`} alt="" />
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
        <Link to={`profile/${objectTypified?.properties?.retailer_id}`}>
          <button className="light" type="button">
            View Details
          </button>
        </Link>
        <div className="pinaddcomment">
          <button className="light" type="button" onClick={() => openIndividualForm()}>
            <span className="icaddcoment" />
          </button>
        </div>
      </div>
    </div>
  );
};
