import 'mapbox-gl/dist/mapbox-gl.css';
// import { CartoLayer, MAP_TYPES, setDefaultCredentials } from '@deck.gl/carto';
// import { Layer, PickInfo } from 'deck.gl';
import { deckDefaults } from './deckDefaults';
import { DeckGLComponent } from './DeckGlComponent';
// import RenderTooltip from './RenderTooltip';
// import { useDeckMainMap } from '../../store/hooks/custom/useDeckMainMap';
// import { ViewStateChangeFn } from '../../@types';
// import { ICON_MAPPING } from '../../constants';
// import PinRed from './ic-pin-red.svg';

export const Map = () => {
  console.log('Map');
  // const [hoverInfo, setHoverInfo] = useState<PickInfo<Layer<unknown>[]>>();
  // const [deckState, setDeckState] = useState({ ...deckDefaults, renderToolTip: RenderTooltip });
  // const [layers, setLayers] = useState([]);
  // const [currentViewstate, setCurrentViewState] = useState(deckDefaults.initialStateView);
  // const hideTooltip: ViewStateChangeFn = ({ viewState }) => {
  //   setHoverInfo(undefined);
  //   console.log('Temporary log to see how to use it', currentViewstate);
  //   setCurrentViewState(viewState);
  // };
  // const expandTooltip = (info: PickInfo<Layer<unknown>[]>) => {
  //   if (info.object) {
  //     setHoverInfo(info);
  //   } else {
  //     setHoverInfo(undefined);
  //   }
  // };

  // useEffect(() => {
  // setDefaultCredentials({
  //   apiBaseUrl: 'https://gcp-us-east1.api.carto.com',
  //   accessToken:
  //     // eslint-disable-next-line
  // });
  // const cartLayer = new CartoLayer({
  //   connection: 'carto_dw',
  //   type: MAP_TYPES.QUERY,
  //   data: 'select * from carto-dw-ac-j9wxt0nz.shared.pha_retailer_2',
  //   pointType: 'icon',
  //   pickable: true,
  //   getIconSize: () => 29,
  //   getIconColor: () => [255, 0, 0],
  //   getIcon: () => 'marker',
  //   iconMapping: ICON_MAPPING,
  //   iconAtlas: PinRed
  // });
  // setLayers([]);
  //   return () => {
  //     resetValues();
  //   };
  // }, [resetValues]);
  // useEffect(() => {
  //   setDeckState((oldDeckState) => {
  //     const newDeckState = {
  //       ...oldDeckState,
  //       layers,
  //       onViewStateChange: hideTooltip,
  //       onClickFunction: expandTooltip
  //     };
  //     return newDeckState;
  //   });
  // }, [layers, deckState]);
  return (
    <div className="map-container">
      <DeckGLComponent {...deckDefaults} />
      {/* {RenderTooltip(hoverInfo)} */}
      {/* </DeckGLComponent> */}
    </div>
  );
};
