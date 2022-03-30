import { AnyAction } from 'redux';
import { MarketplaceInterface } from '../../@types/redux';
import { INITIAL_MARKETPLACE } from '../defaultStore';
import * as TYPES from '../types';

const marketplaceReducer = (state: MarketplaceInterface, action: AnyAction) => {
  switch (action?.type) {
    case TYPES.SET_BUSINESS_DETAILS:
      return {
        ...state,
        businessDetails: {
          ...state.businessDetails,
          [action.payload]: action.value
        }
      };
    case TYPES.RESET_MARKETPLACE_BUSINESS:
      return {
        ...state,
        businessDetails: INITIAL_MARKETPLACE.businessDetails,
      };
    case TYPES.BUSINESS_FILES:
      return {
        ...state,
        files: {
          ...state.files,
          [action.payload]: action.value
        }
      };
    default:
      return INITIAL_MARKETPLACE;
  }
};

export default marketplaceReducer;
