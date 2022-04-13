import * as TYPES from '../types';

export const setCenterMarker = (center: number[]) => ({
  type: TYPES.SET_CENTER_MARKER,
  center
});
