import { Dispatch } from 'redux';
import { MarketplaceType } from '../../@types/redux';
import * as TYPES from '../types';

export const setBusinessDetails = (businessDetails: MarketplaceType) => {
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
