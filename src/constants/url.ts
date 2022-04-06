export const URL = process.env.REACT_APP_URL || 'http://localhost:9000';
export const URL_API = `${URL}/api`;

const CARTODB = 'cartodb';

export const ENDPOINTS = {
  PROFILE: (id: string | undefined) => `${URL}/${CARTODB}/profile/${id}`,
  LOGIN: () => `${URL}/auth/login`,
  BADGES: (id: string | undefined) => `${URL}/${CARTODB}/badges/${id}`,
  MAP: () => `${URL}/${CARTODB}/pha-retailer`,
  CARTO_TOKEN: `${URL}/${CARTODB}/token`
};
