import { Dispatch } from 'redux';
import { classBusinessDetails } from '../../classes/form';
import * as TYPES from '../types';

export const setBusinessDetails = (businessDetails: classBusinessDetails) => {
  console.log(businessDetails);
  return (dispatch : any) => {
    dispatch({
      type: TYPES.SET_BUSINESS_DETAILS,
      payload: businessDetails
    });
  };
};

export const resetMarketplace = () => {
  console.log();
  return (dispatch : Dispatch) => {
    dispatch({
      type: TYPES.RESET_MARKETPLACE,
    });
  };
};
