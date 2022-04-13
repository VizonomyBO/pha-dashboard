import { AnyAction } from 'redux';
import * as TYPES from '../types';
import { INITIAL_CENTER_MARKER } from '../defaultStore';
import { MarkerCenterInterface } from '../../@types/database';

const defaultState: MarkerCenterInterface = {
  ...INITIAL_CENTER_MARKER
};

const markerReducer = (state: MarkerCenterInterface = defaultState, action: AnyAction = { type: 'foo' }) => {
  switch (action.type) {
    case TYPES.SET_CENTER_MARKER:
      return {
        ...state,
        center: action.center
      };
    case TYPES.INIT:
      return INITIAL_CENTER_MARKER;
    default:
      return {
        ...state
      };
  }
};

export default markerReducer;
