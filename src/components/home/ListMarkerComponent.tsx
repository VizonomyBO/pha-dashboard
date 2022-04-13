import { useEffect } from 'react';
import { DataPhaDasboardMap } from '../../@types';
import { PHA_RETAILERS } from '../../constants/categories';
import { useMarkerDispatch } from '../../store/hooks/markerHook';

export const ListMarkerComponent = (listMarker: Array<DataPhaDasboardMap>) => {
  const { setCenterMarker } = useMarkerDispatch();
  const hoverMarker = (elementHovered: DataPhaDasboardMap) => {
    if (elementHovered?.geom?.coordinates) {
      setCenterMarker(elementHovered?.geom?.coordinates);
    }
  };
  useEffect(
    () => () => {
      setCenterMarker([0, 0]);
    },
    [setCenterMarker]
  );
  return listMarker.map((element: DataPhaDasboardMap) => {
    const color = element.source === PHA_RETAILERS ? 'red' : 'green';
    return (
      <div key={`itemMarker${element.retailer_id}`} className="item" onMouseEnter={() => hoverMarker(element)}>
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
};
