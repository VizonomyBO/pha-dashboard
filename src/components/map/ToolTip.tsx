import { Link } from 'react-router-dom';
import { PropertiesLayer } from '../../@types';
import { BADGES } from '../../constants';

export const ToolTip = (data: { x: number; y: number; objectTypified: PropertiesLayer, badges: string[] }) => {
  const {
    x, y, objectTypified, badges
  } = data;
  const openIndividualForm = () => {
    console.info('logic to open form must be here');
  };
  return (
    <div className="modal" style={{ left: x, top: y - 460 }}>
      <figure className="picture">
        <img src={`/images/${objectTypified?.properties?.owner_photo}`} alt="" />
      </figure>
      <div className="detailcard">
        <div className="store">{objectTypified?.properties?.name}</div>
        <div className="services">
          {
            badges.map((badge) => (
              <span
                key={badge}
                className="kind"
                style={{
                  content: `url("${BADGES[badge].image}")`
                }}
              />
            ))
          }
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
