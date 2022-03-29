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
    case TYPES.SET_NAME:
      return {
        ...state,
        businessDetails: {
          ...state.businessDetails,
          name: action.payload
        }
      };
    case TYPES.SET_ADDRESS_1:
      return {
        ...state,
        businessDetails: {
          ...state.businessDetails,
          address_1: action.payload
        }
      };
    case TYPES.SET_ADDRESS_2:
      return {
        ...state,
        businessDetails: {
          ...state.businessDetails,
          address_2: action.payload
        }
      };
    case TYPES.SET_PHONE:
      return {
        ...state,
        businessDetails: {
          ...state.businessDetails,
          phone: action.payload
        }
      };
    case TYPES.SET_CITY:
      return {
        ...state,
        businessDetails: {
          ...state.businessDetails,
          city: action.payload
        }
      };
    case TYPES.SET_STATE:
      return {
        ...state,
        businessDetails: {
          ...state.businessDetails,
          state: action.payload
        }
      };
    case TYPES.SET_ZIPCODE:
      return {
        ...state,
        businessDetails: {
          ...state.businessDetails,
          zipcode: action.payload
        }
      };
    case TYPES.SET_SCHEDULE:
      return {
        ...state,
        businessDetails: {
          ...state.businessDetails,
          [action.payload]: action.value
        }
      };
    case TYPES.SET_WEBSITE:
      return {
        ...state,
        businessDetails: {
          ...state.businessDetails,
          website: action.payload
        }
      };
    case TYPES.SET_FACEBOOK:
      return {
        ...state,
        businessDetails: {
          ...state.businessDetails,
          facebook: action.payload
        }
      };
    case TYPES.SET_TWITTER:
      return {
        ...state,
        businessDetails: {
          ...state.businessDetails,
          twitter: action.payload
        }
      };
    case TYPES.SET_INSTAGRAM:
      return {
        ...state,
        businessDetails: {
          ...state.businessDetails,
          instagram: action.payload
        }
      };
    case TYPES.SET_EMAIL:
      return {
        ...state,
        businessDetails: {
          ...state.businessDetails,
          email: action.payload
        }
      };
    default:
      return INITIAL_MARKETPLACE;
  }
};

export default marketplaceReducer;
