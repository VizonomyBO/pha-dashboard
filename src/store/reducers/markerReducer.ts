import { AnyAction } from 'redux';
import * as TYPES from '../types';
import { INITIAL_CENTER_MARKER } from '../defaultStore';
import { MarkerCenterInterface } from '../../@types/database';

const defaultState: MarkerCenterInterface = {
  ...INITIAL_CENTER_MARKER
};

const markerReducer = (state: MarkerCenterInterface = defaultState, action: AnyAction = { type: 'foo' }) => {
  console.log('action', action);
  switch (action.type) {
    case TYPES.SET_CENTER_MARKER:
      return {
        ...state,
        center: action.center,
        click: action.click,
        elementProperties: action.elementProperties
      };
    case TYPES.INIT:
      return INITIAL_CENTER_MARKER;
    case TYPES.SET_RESET:
      return INITIAL_CENTER_MARKER;
    default:
      return {
        ...state
      };
  }
};

export default markerReducer;
