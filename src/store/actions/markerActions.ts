import { PropertiesLayer } from '../../@types';
import * as TYPES from '../types';

export const setCenterMarker = (center: number[], click: boolean, elementProperties: PropertiesLayer) => ({
  type: TYPES.SET_CENTER_MARKER,
  center,
  click,
  elementProperties
});
