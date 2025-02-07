import { Link } from 'react-router-dom';
import { DataPhaDasboardMap } from '../../@types';
import { MARKED_ELEMENT } from '../../constants';
import {
  PHA_RETAILERS,
  OSM_RETAILERS,
  COLORS,
  NAMESMARKERS
} from '../../constants/categories';

export const ListMarkerComponentMobil = (listMarker: Array<DataPhaDasboardMap>) => (
  listMarker.map((element: DataPhaDasboardMap) => {
    let color = COLORS.BLUE;
    let namemark = NAMESMARKERS.PHA_RETAILERS;
    switch (element.source) {
      case PHA_RETAILERS:
        color = COLORS.BLUE;
        namemark = NAMESMARKERS.PHA_RETAILERS;
        break;
      case OSM_RETAILERS:
        color = COLORS.GREY;
        namemark = NAMESMARKERS.OSM_RETAILERS;
        break;
      default:
        color = COLORS.GREY;
        namemark = NAMESMARKERS.USDA_RETAILERS;
        break;
    }
    if (element.superstar_badge === MARKED_ELEMENT) {
      color = COLORS.GOLDEN;
      namemark = NAMESMARKERS.SUPERSTAR;
    }
    const picture:string[] = element.imagelinks ? element.imagelinks.split(',') : [];
    const pictureValid:string[] = [];
    for (let i = 0; i < picture.length; i += 1) {
      if (picture[i] !== '') {
        pictureValid.push(picture[i]);
      }
    }
    return (
      <div key={`itemMarker${element.retailer_id}`} className="item">
        <div className="item">
          <Link to={`/profile/${element.retailer_id}`} style={{ textDecoration: 'none' }}>
            {pictureValid.length > 1 && (
              <div className="picturerow">
                <div className="picture">
                  <img className="img" src={pictureValid[0]} alt="" />
                </div>
                <div className="picture">
                  <img className="img" src={pictureValid[1]} alt="" />
                </div>
              </div>
            )}
            {pictureValid.length === 1 && (
              <div className="picture" style={{ paddingBottom: '8px' }}>
                <img className="img" src={pictureValid[0]} alt="" />
              </div>
            )}
            <div className="detail">
              <div className="namemarket">{element.name}</div>
              <div className="address">
                <div className="reference">
                  <div className="ref1">
                    {element.address_1 ? element.address_1.replace(', United States', '') : 'No address registered'}
                  </div>
                </div>
                <div className="statemk">
                  <div className="cardmk">
                    <div className={`icmk${color} dimensions`} />
                    <div className={`desc ${color}`}>{namemark}</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  })
);
