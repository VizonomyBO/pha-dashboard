console.log(process.env);
export const URL = process.env.REACT_APP_URL || 'http://localhost:9000';
export const URL_API = `${URL}/api`;
const CARTODB = 'cartodb';

export const ENDPOINTS = {
  PROFILE: (id: string | undefined) => `${URL}/${CARTODB}/profile/${id}`,
};
