import { Link } from 'react-router-dom';
import { TooltipProps } from '../../@types';
import { BADGES } from '../../constants';

export const ToolTip = (data: TooltipProps) => {
  const {
    x, y, objectTypified, badges, setVisibleFeedback, setCurrentRetailerId
  } = data;
  const openIndividualForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setVisibleFeedback(true);
    setCurrentRetailerId(objectTypified?.properties?.retailer_id ? objectTypified?.properties?.retailer_id : '');
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
          <button className="light" type="button" onClick={(e) => openIndividualForm(e)}>
            <span className="icaddcoment" />
          </button>
        </div>
      </div>
    </div>
  );
};
