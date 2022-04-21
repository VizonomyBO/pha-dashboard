export const URL = process.env.REACT_APP_URL || 'http://localhost:9000';
export const URL_API = `${URL}/api`;

const CARTODB = 'cartodb';

const addQueryParams = (params?: string) => (params ? `?${params}` : '');

export const ENDPOINTS = {
  BADGES: (id: string | undefined) => `${URL}/${CARTODB}/badges/${id}`,
  DASHBOARD: (params?: string) => `${URL}/${CARTODB}/dashboard${addQueryParams(params)}`,
  DASHBOARD_COUNT: (params?: string) => `${URL}/${CARTODB}/dashboard-count${addQueryParams(params)}`,
  LOGIN: () => `${URL}/auth/login`,
  PHA_RETAILERS: (params?: string) => `${URL}/${CARTODB}/pha-retailer${addQueryParams(params)}`,
  PHA_INDIVIDUAL: (params?: string) => `${URL}/${CARTODB}/pha-individual${addQueryParams(params)}`,
  PHA_RETAILERS_ID: (id: string | undefined) => `${URL}/${CARTODB}/pha-retailer/${id}`,
  MAP: () => `${URL}/${CARTODB}/pha-retailer`,
  POST_PHA_RETAILERS: () => `${URL}/${CARTODB}/pha-individual`,
  INDIVIDUAL_FORM: (id: string | undefined) => `${URL}/${CARTODB}/pha-individual/${id}`,
  PROFILE: (id: string | undefined) => `${URL}/${CARTODB}/profile/${id}`,
  PHA_RETAILER_CSV: () => `${URL}/${CARTODB}/pha-retailer/download`,
  PHA_INDIVIDUAL_CSV: () => `${URL}/${CARTODB}/pha-individual/download`,
  GET_LAYERS: `${URL}/${CARTODB}/layers`,
  GET_MARKERS: `${URL}/${CARTODB}/map-table`,
  DELETE_OSM: (id: number | undefined) => `${URL}/${CARTODB}/osm-point/${id}`
};

export const CARTO_API = 'https://gcp-us-east1.api.carto.com';
