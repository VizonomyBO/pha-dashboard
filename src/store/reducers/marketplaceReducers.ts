import { AnyAction } from 'redux';
import { MarketplaceInterface } from '../../@types/redux';
import { INITIAL_MARKETPLACE } from '../defaultStore';
import * as TYPES from '../types';

const marketplaceReducer = (state: MarketplaceInterface, action: AnyAction) => {
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
        otherQuestions: {
          ...state.otherQuestions,
          [action.typeOtherQuestions]: action.value,
        }
      };
    case TYPES.SET_AVAILABILITY:
      return {
        ...state,
        otherQuestions: {
          ...state.otherQuestions,
          availability: action.payload
        }
      };
    case TYPES.SET_QUALITY:
      return {
        ...state,
        otherQuestions: {
          ...state.otherQuestions,
          quality: action.payload
        }
      };
    case TYPES.SET_VISIBILITY:
      return {
        ...state,
        otherQuestions: {
          ...state.otherQuestions,
          visibility: action.payload
        }
      };
    case TYPES.SET_LOCAL:
      return {
        ...state,
        otherQuestions: {
          ...state.otherQuestions,
          local: action.payload
        }
      };
    case TYPES.SET_PRODUCE_AVAIL_STORE:
      return {
        ...state,
        otherQuestions: {
          ...state.otherQuestions,
          [action.typeProduceAvailStore]: action.value,
        }
      };
    case TYPES.SET_PRODUCE_AVAIL_SEASONALLY:
      return {
        ...state,
        otherQuestions: {
          ...state.otherQuestions,
          [action.typeProduceAvailSeasonally]: action.value,
        }
      };
    case TYPES.SET_CONTACT_NAME:
      return {
        ...state,
        contactDetails: {
          ...state.contactDetails,
          [action.typeContactName]: action.value,

        }
      };
    case TYPES.SET_CONTACT_EMAIL:
      return {
        ...state,
        contactDetails: {
          ...state.contactDetails,
          [action.typeContactEmail]: action.value,

        }
      };
    case TYPES.SET_CONTACT_OWNER:
      return {
        ...state,
        contactDetails: {
          ...state.contactDetails,
          contact_owner: action.payload
        }
      };
    case TYPES.SET_CONTACT_PATRON:
      return {
        ...state,
        contactDetails: {
          ...state.contactDetails,
          contact_patron: action.payload
        }
      };
    default:
      return INITIAL_MARKETPLACE;
  }
};

export default marketplaceReducer;
