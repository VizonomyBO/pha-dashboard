import { AnyAction } from 'redux';
import { INITIAL_MARKETPLACE } from '../defaultStore';
import * as TYPES from '../types';

const marketplaceReducer = (action: AnyAction, state = INITIAL_MARKETPLACE) => {
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
    case TYPES.SET_OTHER_QUESTIONS:
      return {
        ...state,
        otherQuestions: INITIAL_MARKETPLACE.otherQuestions,
      };
    case TYPES.SET_CONTACT_DETAILS:
      return {
        ...state,
        contactDetails: INITIAL_MARKETPLACE.contactDetails,
      };
    default:
      return state;
  }
};

export default marketplaceReducer;
