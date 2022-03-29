import { Dispatch } from 'redux';
import * as TYPES from '../types';

export const setBusinessDetails = (type: string, valueType: string) => (dispatch : Dispatch) => {
  dispatch({
    type: TYPES.SET_SCHEDULE,
    payload: type,
    value: valueType
  });
};

export const resetBusiness = () => (dispatch : Dispatch) => {
  dispatch({
    type: TYPES.RESET_MARKETPLACE_BUSINESS,
  });
};
