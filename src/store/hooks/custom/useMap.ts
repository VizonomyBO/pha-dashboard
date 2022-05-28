import { useState, useMemo, useEffect } from 'react';
import * as carto from '@deck.gl/carto';
import { WebMercatorViewport } from 'deck.gl';
import { useCategoriesDispatch, useCategoriesState } from '../categoriesHook';
import { useMarkerDispatch } from '../markerHook';
import { webRequest } from '../../../utils/webRequest';
import { ENDPOINTS, CARTO_API } from '../../../constants/url';
import { PHA_RETAILERS, OSM_RETAILERS, USDA_RETAILERS } from '../../../constants/categories';
import { QueriesInterface } from '../../../@types/redux';
import { useGeocoderState, useGeocoderDispatch } from '../geocoderHook';
import PinBlue from '../../../components/map/ic-pin-blue.svg';
import PinGrey from '../../../components/map/ic-pin-grey.svg';
import { deckDefaults } from '../../../components/map/deckDefaults';
import { getLatLonViewport } from '../../../components/map/defaultGenerator';
import { CompletelyIntentionalAny } from '../../../@types/database';
/* eslint-disable @typescript-eslint/no-explicit-any */
const Carto = carto as any;

export const useMap = () => {
  const { resetValues, setCallFilters, setBbox } = useCategoriesDispatch();
  const { setShouldZoom } = useGeocoderDispatch();
  const { setResetMarker } = useMarkerDispatch();
  const {
    callFilters,
    categoriesSelected,
    accesibilities,
    dataSources,
    superstarDateRange,
    verifiedDateRange,
    mapViewFilter
  } = useCategoriesState() || {};
  const TRANSITION_DURATION = 1800;
  const TRANSITION_DURATION_GEOCODER = 500;
  const POSTCODE = 'postcode';
  const ZOOM_POSTCODE = 15;
  const ZOOM_NORMAL = 13.4;
  const { inputText, shouldZoom } = useGeocoderState() || {};
  const [currentViewstate, setCurrentViewState] = useState(deckDefaults.initialStateView);
  const [queries, setQueries] = useState<QueriesInterface>();
  const [layers, setLayers] = useState<any>([]);
  const getLayers = useMemo(
    () => () => {
      const headers = webRequest.generateJSONHeader();
      const obj: CompletelyIntentionalAny = {
        categories: categoriesSelected,
        accesibility: accesibilities,
        dataSources,
        badges: []
      };
      if (superstarDateRange.length === 2) {
        obj.superstarDateRange = superstarDateRange;
      }
      if (verifiedDateRange.length === 2) {
        obj.verifiedDateRange = verifiedDateRange;
      }
      webRequest
        .post(
          ENDPOINTS.GET_LAYERS,
          obj,
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
    [categoriesSelected, accesibilities, dataSources, setCallFilters, superstarDateRange, verifiedDateRange]
  );

  const getPinColor = (originTable: string) => {
    let defaultPin = PinGrey;
    if (originTable === 'retailers_pha') {
      defaultPin = PinBlue;
    } else if (originTable === 'retailers_osm') {
      defaultPin = PinGrey;
    }
    return defaultPin;
  };
  const getCartoLayer = useMemo(
    () => (connectionName: string, query: string, originTable: string) => {
      console.log(connectionName, query, originTable, 'Dotty..6');
      const cartoLayer = new Carto.CartoLayer({
        id: originTable,
        connection: connectionName,
        type: Carto.MAP_TYPES.QUERY,
        data: query,
        pointType: 'icon',
        pickable: true,
        sizeScale: 10,
        getIconSize: () => 30,
        getIcon: () => ({
          id: 'marker',
          url: getPinColor(originTable),
          anchorY: 60,
          height: 70,
          width: 50,
          getCursor: () => 'pointer',
          zIndex: 2
        }),
        getFillColor: [0, 0, 0, 0],
        getLineColor: [0, 0, 0, 0],
        getLineWidth: 0
      });
      return cartoLayer;
    },
    []
  );

  const zoomToCenterGeocoder = useMemo(
    () => () => {
      const getZoom = (placetypes?: string[]) => {
        if (placetypes && placetypes.includes(POSTCODE)) {
          return ZOOM_POSTCODE;
        }
        return ZOOM_NORMAL;
      };
      if (inputText?.text !== '') {
        if (inputText?.center && inputText.center[0] !== 0 && inputText.center[1] !== 0) {
          setCurrentViewState((oldViewState) => {
            const newViewState = {
              ...oldViewState,
              latitude: inputText.center[1],
              longitude: inputText.center[0],
              zoom: getZoom(inputText?.placetype),
              transitionDuration: TRANSITION_DURATION_GEOCODER
            };
            return newViewState;
          });
        } else if (inputText?.bbox && inputText.bbox.length === 4) {
          const newviewport = getLatLonViewport(inputText);
          setCurrentViewState((oldViewState) => {
            const newViewState = {
              ...oldViewState,
              latitude: newviewport.latitude,
              longitude: newviewport.longitude,
              zoom: newviewport.zoom + 1,
              transitionDuration: TRANSITION_DURATION_GEOCODER
            };
            return newViewState;
          });
        }
      }
    },
    [inputText]
  );
  const zoomToCenterMarker = useMemo(() => (point: number[]) => {
    setResetMarker();
    setCurrentViewState((oldViewState) => {
      const newViewState = {
        ...oldViewState,
        latitude: point[1],
        longitude: point[0],
        zoom: 17.5,
        transitionDuration: TRANSITION_DURATION
      };
      return newViewState;
    });
  }, [setCurrentViewState, setResetMarker]);

  const finishRender = useMemo(() => () => {
    if (mapViewFilter) {
      const viewport = new WebMercatorViewport(currentViewstate);
      const nw = viewport.unproject([0, 0]);
      const se = viewport.unproject([viewport.width, viewport.height]);
      setBbox({
        xmin: se[0],
        xmax: nw[0],
        ymin: nw[1],
        ymax: se[1]
      });
    }
    if (shouldZoom) {
      zoomToCenterGeocoder();
      setShouldZoom(false);
    }
  }, [mapViewFilter, currentViewstate, setBbox, shouldZoom, zoomToCenterGeocoder, setShouldZoom]);

  const zoomEffect = useMemo(() => (type: string) => {
    const adder = type === 'in' ? 0.5 : -0.5;
    setCurrentViewState((oldViewState) => {
      const newViewState = {
        ...oldViewState,
        zoom: oldViewState.zoom + adder,
        transitionDuration: 100
      };
      return newViewState;
    });
  }, [setCurrentViewState]);

  useEffect(() => {
    if (mapViewFilter) {
      finishRender();
    }
  }, [mapViewFilter, finishRender]);
  useEffect(() => {
    if (callFilters) {
      getLayers();
    }
  }, [callFilters, getLayers]);

  useEffect(() => {
    if (shouldZoom) {
      zoomToCenterGeocoder();
    }
  }, [shouldZoom, zoomToCenterGeocoder, inputText]);
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
    shouldZoom,
    zoomToCenterMarker,
    finishRender,
    zoomEffect,
    TRANSITION_DURATION
  };
};
