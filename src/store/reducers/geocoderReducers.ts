import { AnyAction } from 'redux';
import { GeocoderInterface } from '../../@types/database';
import { INITIAL_GEOCODER_STATE } from '../defaultStore';
import * as TYPES from '../types';

const defaultState: GeocoderInterface = {
  ...INITIAL_GEOCODER_STATE
};

const geocoderReducer = (state: GeocoderInterface = defaultState, action: AnyAction = { type: 'foo' }) => {
  switch (action.type) {
    case TYPES.SET_INPUT_TEXT:
      return {
        ...state,
        inputText: action.payload
      };
    case TYPES.SET_GEOCODER_OPTIONS:
      return {
        ...state,
        options: action.payload
      };
    case TYPES.SET_SHOULD_ZOOM:
      return {
        ...state,
        shouldZoom: action.shouldZoom
      };
    case TYPES.SET_CONTROLLER_ZOOM:
      return {
        ...state,
        controllerZoom: action.controllerZoom
      };
    case TYPES.SET_RESET_GEOCODER:
      return INITIAL_GEOCODER_STATE;
    case TYPES.INIT:
      return INITIAL_GEOCODER_STATE;
    default:
      return {
        ...state
      };
  }
};

export default geocoderReducer;
