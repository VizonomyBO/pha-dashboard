import { AnyAction } from 'redux';
import { Marketplace } from '../../@types/marketplace';
import { INITIAL_MARKETPLACE } from '../../constants';
import * as TYPES from '../types';

const marketplaceReducer = (state: Marketplace = INITIAL_MARKETPLACE, action: AnyAction) => {
  switch (action?.type) {
    case TYPES.SET_BUSINESS_DETAILS:
      return {
        ...state,
        businessDetails: action.payload,
      };
    case TYPES.RESET_MARKETPLACE_BISINESS:
      return {
        ...state,
        businessDetails: state.businessDetails,
      };
    default:
      return state;
  }
};

export default marketplaceReducer;
