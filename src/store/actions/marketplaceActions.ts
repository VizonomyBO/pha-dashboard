import { Dispatch } from 'redux';
import { BusinessDetailsInterface } from '../../@types/redux';
import * as TYPES from '../types';

export const setBusinessDetails = (businessDetails: BusinessDetailsInterface) => {
  return (dispatch : Dispatch) => {
    dispatch({
      type: TYPES.SET_BUSINESS_DETAILS,
      payload: businessDetails
    });
  };
};

export const resetBusiness = () => {
  return (dispatch : Dispatch) => {
    dispatch({
      type: TYPES.RESET_MARKETPLACE_BUSINESS,
    });
  };
};
