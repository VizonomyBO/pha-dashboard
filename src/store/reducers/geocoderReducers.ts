import { AnyAction } from 'redux';
import { GeocoderInterface } from '../../@types/database';
import { INITIAL_GEOCODER_STATE } from '../defaultStore';
import * as TYPES from '../types';

const geocoderReducer = (state: GeocoderInterface, action: AnyAction) => {
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
    default:
      return INITIAL_GEOCODER_STATE;
  }
};

export default geocoderReducer;
