export const URL = process.env.REACT_APP_URL || 'http://localhost:9000';
export const URL_API = `${URL}/api`;

const CARTODB = 'cartodb';

const addQueryParams = (params?: string) => (params ? `?${params}` : '');

export const ENDPOINTS = {
  BADGES: (id: string | undefined) => `${URL}/${CARTODB}/badges/${id}`,
  DASHBOARD: (params?: string) => `${URL}/${CARTODB}/dashboard${addQueryParams(params)}`,
  LOGIN: () => `${URL}/auth/login`,
  MAP: () => `${URL}/${CARTODB}/pha-retailer`,
  PHA_RETAILERS: (params?: string) => `${URL}/${CARTODB}/pha-retailer${addQueryParams(params)}`,
  PHA_INDIVIDUAL: (params?: string) => `${URL}/${CARTODB}/pha-individual${addQueryParams(params)}`,
  PROFILE: (id: string | undefined) => `${URL}/${CARTODB}/profile/${id}`,
};
