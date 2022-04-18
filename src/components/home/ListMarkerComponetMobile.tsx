import { DataPhaDasboardMap } from '../../@types';
import { PHA_RETAILERS } from '../../constants/categories';

export const ListMarkerComponentMobil = (listMarker: Array<DataPhaDasboardMap>) => (
  listMarker.map((element: DataPhaDasboardMap) => {
    const color = element.source === PHA_RETAILERS ? 'red' : 'green';
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
