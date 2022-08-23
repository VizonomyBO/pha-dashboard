import { DataPhaDasboardMap, PropertiesLayer } from '../../@types';
import { MARKED_ELEMENT } from '../../constants';
import {
  PHA_RETAILERS,
  OSM_RETAILERS,
  COLORS,
  NAMESMARKERS
} from '../../constants/categories';
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
  const getAddresSplitted = (address: string) => {
    const result = address.split(',');
    const firstRow = result.slice(0, 1);
    const secondRow = result.slice(2);
    const spanfirst = <span>{firstRow.join()}</span>;
    const spansecond = <span>{secondRow.join()}</span>;
    return (
      <>
        {spanfirst}
        <br />
        {spansecond}
      </>
    );
  };
  return listMarker.map((element: DataPhaDasboardMap) => {
    let color = COLORS.RED;
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
    return (
      <div
        key={`itemMarker${element.retailer_id}${Math.random()}`}
        className="item"
        // onMouseEnter={() => zoomToMarker(element, 'hover')}
        onClick={() => zoomToMarker(element, 'click')}
        aria-hidden="true"
      >
        <div className="statemk">
          <div className="cardmk">
            <div className={`icmk${color} dimensions`} />
            <div className={`desc ${color} max-width-usda`}>{namemark}</div>
          </div>
        </div>
        <div className="descres">
          <div className="namemark">{element.name}</div>
          <div className="address">
            {element.address_1
              ? getAddresSplitted(element.address_1.replace(', United States', ''))
              : 'No address registered'}
          </div>
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
