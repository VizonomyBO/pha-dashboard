import { Dispatch } from 'redux';
import { MultimediaInterface } from '../../@types';
import * as TYPES from '../types';

export const setBusinessDetails = (type: string, valueType: string) => (dispatch : Dispatch) => {
  dispatch({
    type: TYPES.SET_BUSINESS_DETAILS,
    payload: type,
    value: valueType
  });
};

export const resetBusiness = () => (dispatch : Dispatch) => {
  dispatch({
    type: TYPES.RESET_MARKETPLACE_BUSINESS,
  });
};

export const setBusinessFile = (type: string, valueType: MultimediaInterface[]) => (dispatch : Dispatch) => {
  dispatch({
    type: TYPES.BUSINESS_FILES,
    payload: type,
    value: valueType
  });
};
