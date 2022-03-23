import { DeckGLComponent } from './DeckGlComponent';

export const Map = () => {
  console.log('MAP init');
  return (
    <div className="map-container">
      <DeckGLComponent layers={[]} />
    </div>
  );
};
