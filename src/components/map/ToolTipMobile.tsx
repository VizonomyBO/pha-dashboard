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
  const address = objectTypified?.properties?.address_1?.split(',');
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
            <a
              href={
                `https://www.google.com/maps/dir/${
                  objectTypified?.geometry?.coordinates[1]},${objectTypified?.geometry?.coordinates[0]}`
              }
              rel="noreferrer"
              target="_blank"
              className="address address-bottom-mobile"
            >
              {address ? `${address[0]},  ${address[1]}` : ''}
              <br />
              {address ? `${address[2]}` : ''}
            </a>
            <div className="phone">
              <span className="icphone" />
              <a
                href={
                  `tel:${objectTypified?.properties?.phone}`
                }
                rel="noreferrer"
                className="number"
              >
                {formatPhone(objectTypified?.properties?.phone ?? '')}
              </a>
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
