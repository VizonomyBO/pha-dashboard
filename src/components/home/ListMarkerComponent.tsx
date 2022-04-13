import { DataPhaDasboardMap } from '../../@types';
import { PHA_RETAILERS } from '../../constants/categories';

export const ListMarkerComponent = (listMarker: Array<DataPhaDasboardMap>) => (
  listMarker.map((element: DataPhaDasboardMap) => {
    const color = element.source === PHA_RETAILERS ? 'red' : 'green';
    return (
      <div key={`itemMarker${element.retailer_id}`} className="item">
        <div className="statemk">
          <div className="cardmk">
            <div className={`icmk${color} dimensions`} />
            <div className={`desc ${color}`}>Food Co-op</div>
          </div>
        </div>
        <div className="descres">
          <div className="namemark">{element.name}</div>
          <div className="address">{element.address_1}</div>
          <div className="distance">
            <div className="miles">1.2 Miles </div>
            <div className="kind">{element.state}</div>
          </div>
        </div>
        <div className="arrow">
          <button className="light" type="button">
            <div className="icarrowright" />
          </button>
        </div>
      </div>
    );
  })
);
