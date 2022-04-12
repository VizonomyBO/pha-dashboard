import { useState, useMemo, useEffect } from 'react';
import * as carto from '@deck.gl/carto';
import { WebMercatorViewport } from 'deck.gl';
import { useCategoriesDispatch, useCategoriesState } from '../categoriesHook';
import { webRequest } from '../../../utils/webRequest';
import { ENDPOINTS, CARTO_API } from '../../../constants/url';
import { QueriesInterface } from '../../../@types/redux';
import { useGeocoderState } from '../geocoderHook';
import { ICON_MAPPING } from '../../../constants';
import PinRed from '../../../components/map/ic-pin-red.svg';
import PinBlue from '../../../components/map/ic-pin-blue.svg';
import PinGreen from '../../../components/map/ic-pin-green.svg';
import { deckDefaults } from '../../../components/map/deckDefaults';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  const [currentViewstate, setCurrentViewState] = useState(deckDefaults.initialStateView);
  const [queries, setQueries] = useState<QueriesInterface>();
  const [layers, setLayers] = useState([]);
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
      if (inputText.bbox) {
        const viewportWebMercator = new WebMercatorViewport({
          width: window.innerWidth,
          height: window.innerHeight
        });
        const newviewport = viewportWebMercator.fitBounds(
          [
            [inputText.bbox[0], inputText.bbox[1]],
            [inputText.bbox[2], inputText.bbox[3]]
          ],
          {
            padding: 100
          }
        );
        console.info('newviewport', newviewport);
      }
      setCurrentViewState((oldViewState) => {
        const newViewState = {
          ...oldViewState,
          latitud: inputText.center[0],
          longitud: inputText.center[1]
        };
        return newViewState;
      });
    },
    [setCurrentViewState, inputText]
  );

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
      if (queries.queries?.retailers_pha) {
        setLayers(getCartoLayer(queries.connection_name, queries.queries.retailers_pha, 'retailers_pha'));
      }
      if (queries.queries?.retailers_osm) {
        setLayers(getCartoLayer(queries.connection_name, queries.queries.retailers_osm, 'retailers_osm'));
      }
      if (queries.queries?.retailers_usda) {
        setLayers(getCartoLayer(queries.connection_name, queries.queries.retailers_usda, 'retailers_usda'));
      }
    }
  }, [queries, getCartoLayer]);
  return {
    callFilters,
    resetValues,
    getLayers,
    queries,
    layers,
    currentViewstate,
    setCurrentViewState
  };
};
