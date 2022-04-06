import { PickInfo } from 'deck.gl';
import { Link } from 'react-router-dom';
import { DataPhaDasboardMap } from '../../@types';

export const ToolTip = (data: PickInfo<DataPhaDasboardMap>) => {
  const { x, y, object } = data;
  const openIndividualForm = () => {
    console.log('open form');
  };
  return (
    <div className="modal" style={{ left: x, top: y - 460 }}>
      <figure className="picture">
        <img src="/public/images/img_market_001.png" alt="" />
      </figure>
      <div className="detailcard">
        <div className="store">{object?.name}</div>
        <div className="services">
          <span className="kind icmkdish" />
          <span className="kind icmkshop" />
          <span className="kind icmkdish" />
          <span className="kind icmkshop" />
          <span className="kind icmkshop" />
        </div>
        <div className="address">{object?.address_1}</div>
        <div className="phone">
          <span className="icphone" />
          <span className="number">{object?.phone}</span>
        </div>
        <Link to={`profile/${object?.retailer_id}`}>
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
