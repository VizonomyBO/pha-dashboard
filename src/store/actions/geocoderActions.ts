import { InputTextInterface, ControllerZoomInterface } from '../../@types/database';
import * as TYPES from '../types';

export const setInputText = (text:InputTextInterface) => ({
  type: TYPES.SET_INPUT_TEXT,
  payload: text
});

export const setGeocoderOptions = (options: []) => ({
  type: TYPES.SET_GEOCODER_OPTIONS,
  payload: options
});

export const setShouldZoom = (shouldZoom: boolean) => ({
  type: TYPES.SET_SHOULD_ZOOM,
  shouldZoom
});

export const setControllerZoom = (controllerZoom: ControllerZoomInterface) => ({
  type: TYPES.SET_CONTROLLER_ZOOM,
  controllerZoom
});

export const setResetGeocoder = () => ({
  type: TYPES.SET_RESET_GEOCODER
});
