import 'mapbox-gl/dist/mapbox-gl.css';
import { DeckGLComponent } from './DeckGlComponent';
import {
  MAPBOX_KEY, BASEMAP, NO_DATA, DEFAULT_VIEW_STATE
} from '../../constants/index';
import { deckDefaults } from './deckDefaults';

export const Map = () => {
  const initialViewState = DEFAULT_VIEW_STATE;
  // const controller = true;
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
  return (
    <div className="map-container">
      {/* <DeckGLComponent /> */}
    </div>
  );
}

