import { Dispatch } from 'redux';
import { InputTextInterface } from '../../@types/database';
import * as TYPES from '../types';

export const setInputText = (text:InputTextInterface) => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.SET_INPUT_TEXT,
    payload: text
  });
};

export const setGeocoderOptions = (options: []) => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.SET_GEOCODER_OPTIONS,
    payload: options
  });
};
