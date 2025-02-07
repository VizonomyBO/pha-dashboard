import { Link } from 'react-router-dom';
import { TooltipProps } from '../../@types';
import { BADGES, DEFAULT_IMAGE } from '../../constants';
import { formatPhone } from '../../utils/textFormatter';

export const ToolTipMobile = (data: TooltipProps) => {
  const {
    objectTypified, badges, setVisibleFeedback, setCurrentRetailerId
  } = data;
  const getImageToDisplay = () => {
    if (objectTypified.properties?.imagelinks && objectTypified.properties.imagelinks !== '') {
      const images = objectTypified.properties.imagelinks.split(',');
      if (images[0] !== '') {
        return images[0];
      }
      if (images.length > 1) {
        return images[1];
      }
      return DEFAULT_IMAGE;
    }
    return DEFAULT_IMAGE;
  };
  const openIndividualForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setVisibleFeedback(true);
    setCurrentRetailerId(objectTypified?.properties?.retailer_id ?? '');
  };
  const address = objectTypified?.properties?.address_1?.split(',');
  return (
    <>
      <div className="bmodal">
        <Link to={`/profile/${objectTypified?.properties?.retailer_id}`}>
          <figure className="picture">
            <img
              src={getImageToDisplay()}
              alt=""
            />
          </figure>
        </Link>
        <div className="detailcard">
          <Link to={`/profile/${objectTypified?.properties?.retailer_id}`} style={{ textDecoration: 'none' }}>
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
          </Link>
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
