import { DataPhaDasboardMap } from '../../@types';

export const ListMarkerComponent = (listMarker: Array<DataPhaDasboardMap>) => {
  const item = listMarker.map((element: DataPhaDasboardMap, i) => {
    const color = element.geom.type;
    return (
      <div key={`itemMarker${i + 1}`} className="item">
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
            <div className="miles">1.2 Miles</div>
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
  });
  return item;
};
