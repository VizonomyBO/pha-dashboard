import 'mapbox-gl/dist/mapbox-gl.css';
import { DeckGLComponent } from './DeckGlComponent';
// import {
//   MAPBOX_KEY, BASEMAP, NO_DATA, DEFAULT_VIEW_STATE
// } from '../../constants/index';
import { deckDefaults } from './deckDefaults';

export const Map = () => {
  // const initialViewState = DEFAULT_VIEW_STATE;
  // // const controller = true;
  // const [hoverInfo, setHoverInfo] = useState<PickInfo<Layer<unknown>[]>>();
  // const mapref = useRef(null);
  // const [layers, setLayers] = useState();
  // // const { getCartoToken, cartoToken } = useDeckgl();
  // const hideTooltip = () => {
  //   setHoverInfo(undefined);
  // };
  // const expandTooltip = (info: any) => {
  //   if (info.object) {
  //     setHoverInfo(info);
  //   } else {
  //     setHoverInfo(undefined);
  //   }
  // };
  // const ICON_MAPPING = {
  //   marker: {
  //     x: 0, y: 0, width: 32, height: 42, mask: false
  //   }
  // };
  // useEffect(() => {
  //   // getCartoToken();
  //   setDefaultCredentials({
  //     apiBaseUrl: 'https://gcp-us-east1.api.carto.com',
  //     accessToken:
  //     // eslint-disable-next-line
  //       'eyJhbGciOiJIUzI1NiJ9.eyJhIjoiYWNfa
  // jl3eHQwbnoiLCJqdGkiOiI3ZjVkZTJhYiJ9.deIgT389U_YFodUSADFt5g6EccLWIJAbw1Ta0CraYxQ'
  //   });
  //   // let icon = PinRed;
  //   const cartLayer = new CartoLayer({
  //     connection: 'carto_dw',
  //     type: MAP_TYPES.QUERY,
  //     data: 'select * from carto-dw-ac-j9wxt0nz.shared.pha_retailer_2',
  //     pointType: 'icon',
  //     pickable: true,
  //     getIconSize: () => 29,
  //     getIconColor: () => [255, 0, 0],
  //     getIcon: () => 'marker',
  //     iconMapping: ICON_MAPPING,
  //     iconAtlas:
  //       PinRed
  //   });
  //   setLayers(cartLayer);
  // }, []);
  console.log('map');
  return (
    <div className="map-container">
      <DeckGLComponent {...deckDefaults} />
    </div>
  );
};
