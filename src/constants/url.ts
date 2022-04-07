export const URL = process.env.REACT_APP_URL || 'http://localhost:9000';
export const URL_API = `${URL}/api`;

const CARTODB = 'cartodb';

const addQueryParams = (params?: string) => (params ? `?${params}` : '');

export const ENDPOINTS = {
  PROFILE: (id: string | undefined) => `${URL}/${CARTODB}/profile/${id}`,
  LOGIN: () => `${URL}/auth/login`,
  BADGES: (id: string | undefined) => `${URL}/${CARTODB}/badges/${id}`,
  PHA_RETAILERS: (params?: string) => `${URL}/${CARTODB}/pha-retailer${addQueryParams(params)}`,
  PHA_INDIVIDUAL: (params?: string) => `${URL}/${CARTODB}/pha-individual${addQueryParams(params)}`,
  MAP: () => `${URL}/${CARTODB}/pha-retailer`,
  POST_PHA_RETAILERS: () => `${URL}/${CARTODB}/pha-individual`,
};
