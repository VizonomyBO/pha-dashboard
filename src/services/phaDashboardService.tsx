import axios from 'axios';
import { SERVER } from '../constants';

const BASE_URL = `${SERVER}/cartodb/pha-retailer`;

export function getDhaRetailer() {
  return axios.get(BASE_URL);
}
