import { Dispatch } from 'redux';
import { initialMarketplace } from '../reducers/marketplaceReducers';
import * as TYPES from '../types';

export const setBusinessDetails = (businessDetails: typeof initialMarketplace.businessDetails) => {
  console.debug(businessDetails);
  return (dispatch : Dispatch) => {
    dispatch({
      type: TYPES.SET_BUSINESS_DETAILS,
      payload: businessDetails
    });
  };
};

export const resetMarketplace = () => {
  console.debug();
  return (dispatch : Dispatch) => {
    dispatch({
      type: TYPES.RESET_MARKETPLACE,
    });
  };
};
