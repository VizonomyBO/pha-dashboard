import * as TYPES from '../types';

export const setBusinessDetails = (businessDetails: any) => {
  console.log(businessDetails);
  return (dispatch : any) => {
    dispatch({
      type: TYPES.SET_BUSINESS_DETAILS,
      payload: businessDetails
    });
  };
};

export const resetMarketplace = () => {
  return (dispatch : any) => {
    dispatch({
      type: TYPES.RESET_MARKETPLACE,
    });
  };
};
