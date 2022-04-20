import { DataPhaDasboardMap, PropertiesLayer } from '../../@types';
import { PHA_RETAILERS } from '../../constants/categories';
import { useMarkerDispatch } from '../../store/hooks/markerHook';

export const ListMarkerComponent = (listMarker: Array<DataPhaDasboardMap>) => {
  const { setCenterMarker } = useMarkerDispatch();
  const zoomToMarker = (elementHovered: DataPhaDasboardMap, type: string) => {
    if (elementHovered?.geom?.coordinates) {
      const elementProperties: PropertiesLayer = {
        properties: {
          ...elementHovered
        }
      };
      setCenterMarker(elementHovered.geom.coordinates, type !== 'hover', elementProperties);
    }
  };
  return listMarker.map((element: DataPhaDasboardMap) => {
    const color = element.source === PHA_RETAILERS ? 'red' : 'green';
    return (
      <div
        key={`itemMarker${element.retailer_id}`}
        className="item"
        onMouseEnter={() => zoomToMarker(element, 'hover')}
        onClick={() => zoomToMarker(element, 'click')}
        aria-hidden="true"
      >
        <div className="statemk">
          <div className="cardmk">
            <div className={`icmk${color} dimensions`} />
            <div className={`desc ${color}`}>Retailer</div>
          </div>
        </div>
        <div className="descres">
          <div className="namemark">{element.name}</div>
          <div className="address">{element.address_1}</div>
          <div className="distance">
            <div className="kind">
              {element.snap_accepted === 'Yes' ? 'SNAP Accepted ' : ''}
              {element.wic_accepted === 'Yes' ? 'WIC Accepted' : ''}
            </div>
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
