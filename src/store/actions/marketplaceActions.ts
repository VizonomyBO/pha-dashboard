import { Dispatch } from 'redux';
import { MultimediaInterface } from '../../@types';
import * as TYPES from '../types';

export const setBusinessDetails = (type: string, value: string) => (dispatch : Dispatch) => {
  dispatch({
    type: TYPES.SET_BUSINESS_DETAILS,
    payload: type,
    value
  });
};

export const resetBusiness = () => (dispatch : Dispatch) => {
  dispatch({
    type: TYPES.RESET_MARKETPLACE_BUSINESS,
  });
};

export const setBusinessFile = (type: string, value: MultimediaInterface[]) => (dispatch : Dispatch) => {
  dispatch({
    type: TYPES.BUSINESS_FILES,
    payload: type,
    value
  });
};
