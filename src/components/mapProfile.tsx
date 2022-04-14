import { DeckGLComponent } from './map/DeckGlComponent';
import { PhaRetailer } from '../@types/database';
import { deckDefaults } from './map/deckDefaults';
import { IconLayerData } from './map/IconLayerData';

export const MapProfile = (profile?: PhaRetailer | null) => {
  const layer = profile ? IconLayerData([profile]) : [];
  const { geom } = profile || {};
  const initDeckDefault = {
    ...deckDefaults,
    layers: layer,
    initialStateView: {
      ...deckDefaults.initialStateView,
      latitude: geom ? geom.coordinates[1] : deckDefaults.initialStateView.latitude,
      longitude: geom ? geom.coordinates[0] : deckDefaults.initialStateView.longitude,
      zoom: 15
    }
  };
  return (
    <div className="maparea">
      <div className="opkindmap">
        <button type="button" className="light active btn1">
          Map
        </button>
        <button type="button" className="light btn2">
          Satelite
        </button>
      </div>
      <div className="controlzoom">
        <div className="zplus">
          <button type="button" className="light">
            <span className="iczplus" />
          </button>
        </div>
        <div className="space">
          <div className="line" />
        </div>
        <div className="zminus">
          <button type="button" className="light">
            <span className="iczminus" />
          </button>
        </div>
      </div>
      <div className="somethingareaexample">
        <DeckGLComponent {...initDeckDefault} />
      </div>
    </div>
  );
};
