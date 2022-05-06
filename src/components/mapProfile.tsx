import { useEffect, useState, useMemo } from 'react';
import { DeckGLComponent } from './map/DeckGlComponent';
import { PhaRetailer } from '../@types/database';
import { deckDefaults } from './map/deckDefaults';
import { IconLayerData } from './map/IconLayerData';
import { BASEMAP, BASEMAP_SATELLITE } from '../constants';
import { ViewStateChangeFn, ViewStateInterface } from '../@types';
/* eslint-disable @typescript-eslint/no-explicit-any */

export const MapProfile = (profile?: PhaRetailer | null) => {
  const [initDeckDefault, setInitDeckDefault] = useState({
    ...deckDefaults
  });
  const [currentBasemap, setCurrentBasemap] = useState(BASEMAP);
  const [currentStateView, setCurrentStateView] = useState(deckDefaults.initialStateView);
  const onViewChange: ViewStateChangeFn = useMemo(() => ({ viewState }) => {
    setCurrentStateView(viewState);
  }, [setCurrentStateView]);
  useEffect(() => {
    const { geom } = profile || {};
    setInitDeckDefault((oldDeck) => {
      const newDeck = {
        ...oldDeck,
        currentBasemap: BASEMAP,
        onViewStateChange: onViewChange,
        layers: profile ? IconLayerData([profile]) : [],
        initialStateView: {
          ...oldDeck.initialStateView,
          latitude: geom ? geom.coordinates[1] : oldDeck.initialStateView.latitude,
          longitude: geom ? geom.coordinates[0] : oldDeck.initialStateView.longitude,
          zoom: 16.0
        }
      };
      return newDeck;
    });
  }, [profile, setInitDeckDefault, onViewChange]);

  const changeDeckState = useMemo(() => (viewState: ViewStateInterface) => {
    setInitDeckDefault((oldDeckState) => {
      const newDS = {
        ...oldDeckState,
        initialStateView: {
          ...viewState,
        }
      };
      return newDS;
    });
  }, [setInitDeckDefault]);
  useEffect(() => {
    changeDeckState(currentStateView);
  }, [currentStateView, changeDeckState]);
  useEffect(() => {
    setInitDeckDefault((oldDeck) => {
      const newDeck = {
        ...oldDeck,
        currentBasemap
      };
      return newDeck;
    });
  }, [currentBasemap]);
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
