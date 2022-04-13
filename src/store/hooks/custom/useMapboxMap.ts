import mapboxgl from 'mapbox-gl';
import {
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { BASEMAP } from '../../../constants';

mapboxgl.accessToken = 'pk.eyJ1Ijoidml6b25vbXkiLCJhIjoib2d2c1F4QSJ9.KXqLpaO5bElct6O6q_NfhQ';

export const useMapboxMap = () => {
  const mapContainer = useRef<any>('');
  const map = useRef<any>(null);
  const [lng] = useState(0);
  const [lat] = useState(0);
  const [zoom] = useState(5);
  useEffect(() => {
    if (map.current) {
      return;
    }
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: BASEMAP,
      center: [lng, lat],
      zoom
    });
  }, [lng, lat, zoom]);

  useEffect(() => {
    if (!map.current) {
      return;
    }
    map.current.on('load', () => {
      map.current.resize();
    });
  }, []);

  const addGeoJSONSource = useMemo(() => (id: string, data: any) => {
    if (!map.current) {
      return;
    }
    map.current.addSource(id, {
      type: 'geojson',
      data
    });
  }, []);

  const addGeoJSONLayer = useMemo(() => (id: string, sourceId: string, layer: any) => {
    if (!map.current) {
      return;
    }
    map.current.addLayer({
      id,
      source: sourceId,
      ...layer
    });
  }, []);

  const addVectorSource = useMemo(() => (id: string, source: string[]) => {
    if (!map.current) {
      return;
    }
    map.current.addSource(id, {
      type: 'vector',
      tiles: source
    });
  }, []);

  const getSource = useMemo(() => (id: string) => {
    if (!map.current) {
      return null;
    }
    return map.current.getSource(id);
  }, []);

  const getLayer = useMemo(() => (id: string) => {
    if (!map.current) {
      return null;
    }
    return map.current.getLayer(id);
  }, []);

  const addVectorLayer = useMemo(() => (layer: any) => {
    if (!map.current) {
      return;
    }
    map.current.addLayer({
      ...layer,
      'source-layer': 'pluto15v1'
    });
  }, []);

  const onClickLayer = useMemo(() => (id: string, callback: (e: any) => void) => {
    if (!map.current) {
      return;
    }
    map.current.on('click', id, callback);
  }, []);

  return {
    mapContainer,
    map,
    addVectorSource,
    addVectorLayer,
    addGeoJSONSource,
    addGeoJSONLayer,
    getSource,
    getLayer,
    onClickLayer
  };
};
