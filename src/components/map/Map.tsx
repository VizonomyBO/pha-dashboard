import { DeckGLComponent } from './DeckGlComponent';
import 'mapbox-gl/dist/mapbox-gl.css';

export const Map = () => {
  console.log('MAP init');
  return (
    <div className="map-container">
      <DeckGLComponent layers={[]} />
    </div>
  );
};
