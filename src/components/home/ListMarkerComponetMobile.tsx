import { DataPhaDasboardMap } from '../../@types';
import {
  PHA_RETAILERS,
  OSM_RETAILERS,
  COLORS
} from '../../constants/categories';

export const ListMarkerComponentMobil = (listMarker: Array<DataPhaDasboardMap>) => (
  listMarker.map((element: DataPhaDasboardMap) => {
    let color = COLORS.RED;
    switch (element.source) {
      case PHA_RETAILERS:
        color = COLORS.RED;
        break;
      case OSM_RETAILERS:
        color = COLORS.GREEN;
        break;
      default:
        color = COLORS.BLUE;
        break;
    }
    const picture:string[] = element.imagelinks ? element.imagelinks.split(',') : [];
    return (
      <div key={`itemMarker${element.retailer_id}`} className="item">
        <div className="item">
          {picture.length > 1 && (
            <div className="picturerow">
              <div className="picture">
                <img className="img" src={picture[0]} alt="" />
              </div>
              <div className="picture">
                <img className="img" src={picture[1]} alt="" />
              </div>
            </div>
          )}
          {picture.length === 1 && (
            <div className="picture">
              <img className="img" src={picture[0]} alt="" />
            </div>
          )}
          <div className="detail">
            <div className="namemarket">{element.name}</div>
            <div className="address">
              <div className="reference">
                <div className="ref1">
                  {element.address_1}
                </div>
              </div>
              <div className="statemk">
                <div className="cardmk">
                  <div className={`icmk${color} dimensions`} />
                  <div className={`desc ${color}`}>Retailer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  })
);
