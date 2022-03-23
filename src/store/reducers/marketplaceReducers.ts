import { AnyAction } from 'redux';
import * as TYPES from '../types';

export const INITIAL_MARKETPLACE = {
  businessDetails: {
    name: '',
    coordinate: null,
  },
  socialMedia: {
    facebook: '',
  },
  files: {
    media: null,
  }
};


const marketplaceReducer = (state = INITIAL_MARKETPLACE, action: AnyAction) => {
  switch (action?.type) {
    case TYPES.SET_BUSINESS_DETAILS:
      return {
        ...state,
        businessDetails: action.payload,
      };
    case TYPES.RESET_MARKETPLACE_BUSINESS:
      return {
        ...state,
        businessDetails: INITIAL_MARKETPLACE.businessDetails,
      };
    default:
      return state;
  }
};

export default marketplaceReducer;
