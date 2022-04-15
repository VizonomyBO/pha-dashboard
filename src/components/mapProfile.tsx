import { useEffect, useState } from 'react';
import { DeckGLComponent } from './map/DeckGlComponent';
import { PhaRetailer } from '../@types/database';
import { deckDefaults } from './map/deckDefaults';
import { IconLayerData } from './map/IconLayerData';
import { BASEMAP, BASEMAP_SATELLITE } from '../constants';
/* eslint-disable @typescript-eslint/no-explicit-any */

export const MapProfile = (profile?: PhaRetailer | null) => {
  const [initDeckDefault, setInitDeckDefault] = useState({
    ...deckDefaults
  });
  const [currentBasemap, setCurrentBasemap] = useState(BASEMAP);
  const [currentStateView, setCurrentStateView] = useState(deckDefaults.initialStateView);
  useEffect(() => {
    const { geom } = profile || {};
    setInitDeckDefault((oldDeck) => {
      const newDeck = {
        ...oldDeck,
        currentBasemap,
        onViewStateChange: ({ viewState }:any) => setCurrentStateView(viewState),
        layers: profile ? IconLayerData([profile]) : [],
        initialStateView: {
          ...currentStateView,
          latitude: geom ? geom.coordinates[1] : oldDeck.initialStateView.latitude,
          longitude: geom ? geom.coordinates[0] : oldDeck.initialStateView.longitude,
          zoom: 16
        }
      };
      return newDeck;
    });
  }, [profile, currentBasemap, setInitDeckDefault, currentStateView]);

  const changeZoom = (type: string) => {
    const adder = type === 'in' ? 0.5 : -0.5;
    setInitDeckDefault((oldDeck) => {
      const newDeck = {
        ...oldDeck,
        initialStateView: {
          ...currentStateView,
          zoom: oldDeck.initialStateView.zoom + adder
        }
      };
      return newDeck;
    });
  };

  return (
    <div className="maparea">
      <div className="opkindmap">
        <button
          type="button"
          className={`light btn1 ${currentBasemap === BASEMAP ? 'active' : ''}`}
          onClick={() => setCurrentBasemap(BASEMAP)}
        >
          Map
        </button>
        <button
          type="button"
          className={`light btn2 ${currentBasemap === BASEMAP_SATELLITE ? 'active' : ''}`}
          onClick={() => setCurrentBasemap(BASEMAP_SATELLITE)}
        >
          Satelite
        </button>
      </div>
      <div className="controlzoom">
        <div className="zplus">
          <button
            type="button"
            className="light"
            onClick={() => changeZoom('in')}
          >
            <span className="iczplus" />
          </button>
        </div>
        <div className="space">
          <div className="line" />
        </div>
        <div className="zminus">
          <button
            type="button"
            className="light"
            onClick={() => changeZoom('out')}
          >
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
