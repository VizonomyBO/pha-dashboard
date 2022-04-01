import { SERVER } from '../constants';

const BASE_URL = `${SERVER}/cartodb/pha-retailer`;

export function getDhaRetailer() {
  return fetch(BASE_URL);
}
