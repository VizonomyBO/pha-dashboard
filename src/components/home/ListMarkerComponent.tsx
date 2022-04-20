import { DataPhaDasboardMap, PropertiesLayer } from '../../@types';
import { PHA_RETAILERS, OSM_RETAILERS } from '../../constants/categories';
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
    let color = 'red';
    switch (element.source) {
      case PHA_RETAILERS:
        color = 'red';
        break;
      case OSM_RETAILERS:
        color = 'green';
        break;
      default:
        color = 'blue';
        break;
    }
    return (
      <div
        key={`itemMarker${element.retailer_id}`}
        className="item"
        // onMouseEnter={() => zoomToMarker(element, 'hover')}
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
          <div className="address">{element.address_1?.replace(', United States', '')}</div>
          <div className="distance">
            <div className="kind">
              {element.snap_accepted === 'Yes' ? 'SNAP Accepted' : ''}
              {element.snap_accepted === 'Yes' && element.wic_accepted === 'Yes' ? ', ' : ''}
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
