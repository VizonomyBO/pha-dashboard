import { Link } from 'react-router-dom';
import { TooltipProps } from '../../@types';
import { BADGES } from '../../constants';
import { useTooltip } from '../../store/hooks/custom/useTooltip';
import { formatPhone } from '../../utils/textFormatter';

export const ToolTipMobile = (data: TooltipProps) => {
  const {
    objectTypified, badges, setVisibleFeedback, setCurrentRetailerId
  } = data;
  const { getImageToDisplay } = useTooltip();
  const openIndividualForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setVisibleFeedback(true);
    setCurrentRetailerId(objectTypified?.properties?.retailer_id ?? '');
  };
  return (
    <>
      <Link to={`/profile/${objectTypified?.properties?.retailer_id}`}>
        <div className="bmodal">
          <figure className="picture">
            <img
              src={getImageToDisplay(objectTypified)}
              alt=""
            />
          </figure>
          <div className="detailcard">
            <div className="store store-bottom-mobile">{objectTypified?.properties?.name}</div>
            {badges.length !== 0 && (
              <div className="services services-mobile">
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
            )}
            <div className="address address-bottom-mobile">{objectTypified?.properties?.address_1}</div>
            <div className="phone">
              <span className="icphone" />
              <span className="number">
                {formatPhone(objectTypified?.properties?.phone ? objectTypified?.properties?.phone : '')}
              </span>
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
