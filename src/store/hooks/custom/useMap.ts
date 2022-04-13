import { useState, useMemo, useEffect } from 'react';
import * as carto from '@deck.gl/carto';
import { useCategoriesDispatch, useCategoriesState } from '../categoriesHook';
import { useMarkerState } from '../markerHook';
import { webRequest } from '../../../utils/webRequest';
import { ENDPOINTS, CARTO_API } from '../../../constants/url';
import { PHA_RETAILERS, OSM_RETAILERS, USDA_RETAILERS } from '../../../constants/categories';
import { QueriesInterface } from '../../../@types/redux';
import { useGeocoderState } from '../geocoderHook';
import { ICON_MAPPING } from '../../../constants';
import PinRed from '../../../components/map/ic-pin-red.svg';
import PinBlue from '../../../components/map/ic-pin-blue.svg';
import PinGreen from '../../../components/map/ic-pin-green.svg';
import { deckDefaults } from '../../../components/map/deckDefaults';
import { getLatLonViewport } from '../../../components/map/defaultGenerator';
/* eslint-disable @typescript-eslint/no-explicit-any */
const Carto = carto as any;

export const useMap = () => {
  const { resetValues, setCallFilters } = useCategoriesDispatch();
  const {
    callFilters,
    categoriesSelected,
    accesibilities,
    dataSources
  } = useCategoriesState() || {};
  const { inputText, shouldZoom } = useGeocoderState() || {};
  const {
    center
  } = useMarkerState() || {};
  const [currentViewstate, setCurrentViewState] = useState(deckDefaults.initialStateView);
  const [queries, setQueries] = useState<QueriesInterface>();
  const [layers, setLayers] = useState<any>([]);
  const getLayers = useMemo(
    () => () => {
      const headers = webRequest.generateJSONHeader();
      webRequest
        .post(
          ENDPOINTS.GET_LAYERS,
          {
            categories: categoriesSelected,
            accesibility: accesibilities,
            dataSources,
            badges: []
          },
          headers
        )
        .then((res) => res.json())
        .then((res) => {
          if (res.data && res.success) {
            setQueries(res.data);
          }
          setCallFilters(false);
        })
        .catch((err) => console.error(err));
    },
    [categoriesSelected, accesibilities, dataSources, setCallFilters]
  );

  const getPinColor = (originTable: string) => {
    let defaultPin = PinBlue;
    if (originTable === 'retailers_pha') {
      defaultPin = PinRed;
    } else if (originTable === 'retailers_osm') {
      defaultPin = PinGreen;
    }
    return defaultPin;
  };
  const getCartoLayer = useMemo(
    () => (connectionName: string, query: string, originTable: string) => {
      const cartoLayer = new Carto.CartoLayer({
        id: originTable,
        connection: connectionName,
        type: Carto.MAP_TYPES.QUERY,
        data: query,
        pointType: 'icon',
        pickable: true,
        getIconSize: () => 29,
        getIconColor: () => [255, 0, 0],
        getIcon: () => 'marker',
        iconMapping: ICON_MAPPING,
        iconAtlas: getPinColor(originTable)
      });
      return cartoLayer;
    },
    []
  );

  const zoomToCenterGeocoder = useMemo(
    () => () => {
      if (inputText?.text !== '') {
        if (inputText?.bbox && inputText.bbox.length === 4) {
          const newviewport = getLatLonViewport(inputText);
          setCurrentViewState((oldViewState) => {
            const newViewState = {
              ...oldViewState,
              latitude: newviewport.latitude,
              longitude: newviewport.longitude,
              zoom: newviewport.zoom
            };
            return newViewState;
          });
        } else if (inputText?.center && inputText.center[0] !== 0 && inputText.center[1] !== 0) {
          setCurrentViewState((oldViewState) => {
            const newViewState = {
              ...oldViewState,
              latitude: inputText.center[1],
              longitude: inputText.center[0]
            };
            return newViewState;
          });
        }
      }
    },
    [inputText]
  );
  const zoomToCenterMarker = (point: number[]) => {
    setCurrentViewState((oldViewState) => {
      const newViewState = {
        ...oldViewState,
        latitude: point[1],
        longitude: point[0],
        zoom: 16
      };
      return newViewState;
    });
  };
  useEffect(() => {
    if (center[0] && center[1]) {
      zoomToCenterMarker(center);
    }
  }, [center]);
  useEffect(() => {
    if (callFilters) {
      getLayers();
    }
  }, [callFilters, getLayers]);

  useEffect(() => {
    if (shouldZoom) {
      zoomToCenterGeocoder();
    }
  }, [shouldZoom, zoomToCenterGeocoder]);
  useEffect(() => {
    if (queries) {
      Carto.setDefaultCredentials({
        apiBaseUrl: CARTO_API,
        accessToken: queries.token
      });
      const newLayers = [];
      if (queries.queries?.retailers_pha) {
        newLayers.push(getCartoLayer(queries.connection_name, queries.queries.retailers_pha, PHA_RETAILERS));
      }
      if (queries.queries?.retailers_osm) {
        newLayers.push(getCartoLayer(queries.connection_name, queries.queries.retailers_osm, OSM_RETAILERS));
      }
      if (queries.queries?.retailers_usda) {
        newLayers.push(getCartoLayer(queries.connection_name, queries.queries.retailers_usda, USDA_RETAILERS));
      }
      setLayers(newLayers);
    }
  }, [queries, getCartoLayer]);
  return {
    callFilters,
    resetValues,
    getLayers,
    queries,
    layers,
    currentViewstate,
    setCurrentViewState,
    shouldZoom
  };
};
