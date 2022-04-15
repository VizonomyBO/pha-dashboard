import { Link } from 'react-router-dom';
import { TooltipProps } from '../../@types';
import { BADGES } from '../../constants';

export const ToolTipMobile = (data: TooltipProps) => {
  const {
    objectTypified, badges, setVisibleFeedback, setCurrentRetailerId
  } = data;
  const openIndividualForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setVisibleFeedback(true);
    setCurrentRetailerId(objectTypified?.properties?.retailer_id ?? '');
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
              {
                badges.map((badge) => (
                  <span
                    key={badge}
                    className="kind icmkdish"
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
          </div>
        </div>
      </Link>
      <div className="bmodal-ts">
        <div className="pinaddcomment">
          <button className="light" type="button" onClick={openIndividualForm}>
            <span className="icaddcoment" />
          </button>
        </div>
      </div>
    </>
  );
};
