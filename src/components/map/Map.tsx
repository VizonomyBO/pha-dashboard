import 'mapbox-gl/dist/mapbox-gl.css';
import { DeckGLComponent } from './DeckGlComponent';
import { DataPhaDasboardMap } from '../../@types';

export const Map = ({ dataMarker }: { dataMarker: DataPhaDasboardMap[] }) => (
  <div className="map-container">
    <DeckGLComponent dataForMarker={dataMarker} />
  </div>
);
