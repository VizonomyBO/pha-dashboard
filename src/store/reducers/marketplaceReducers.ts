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
    case TYPES.SET_SUN_OPEN:
      return {
        ...state,
        businessDetails: {
          ...state.businessDetails,
          sun_open: action.payload
        }
      };
    case TYPES.SET_SUN_CLOSE:
      return {
        ...state,
        businessDetails: {
          ...state.businessDetails,
          sun_close: action.payload
        }
      };
    case TYPES.SET_MON_OPEN:
      return {
        ...state,
        businessDetails: {
          ...state.businessDetails,
          mon_open: action.payload
        }
      };
    case TYPES.SET_MON_CLOSE:
      return {
        ...state,
        businessDetails: {
          ...state.businessDetails,
          mon_close: action.payload
        }
      };
    case TYPES.SET_TUES_OPEN:
      return {
        ...state,
        businessDetails: {
          ...state.businessDetails,
          tues_open: action.payload
        }
      };
    case TYPES.SET_TUES_CLOSE:
      return {
        ...state,
        businessDetails: {
          ...state.businessDetails,
          tues_close: action.payload
        }
      };
    case TYPES.SET_WED_OPEN:
      return {
        ...state,
        businessDetails: {
          ...state.businessDetails,
          wed_open: action.payload
        }
      };
    case TYPES.SET_WED_CLOSE:
      return {
        ...state,
        businessDetails: {
          ...state.businessDetails,
          wed_close: action.payload
        }
      };
    case TYPES.SET_THURS_OPEN:
      return {
        ...state,
        businessDetails: {
          ...state.businessDetails,
          thurs_open: action.payload
        }
      };
    case TYPES.SET_THURS_CLOSE:
      return {
        ...state,
        businessDetails: {
          ...state.businessDetails,
          thurs_close: action.payload
        }
      };
    case TYPES.SET_FRI_OPEN:
      return {
        ...state,
        businessDetails: {
          ...state.businessDetails,
          fri_open: action.payload
        }
      };
    case TYPES.SET_FRI_CLOSE:
      return {
        ...state,
        businessDetails: {
          ...state.businessDetails,
          fri_close: action.payload
        }
      };
    case TYPES.SET_SAT_OPEN:
      return {
        ...state,
        businessDetails: {
          ...state.businessDetails,
          sat_open: action.payload
        }
      };
    case TYPES.SET_SAT_CLOSE:
      return {
        ...state,
        businessDetails: {
          ...state.businessDetails,
          sat_close: action.payload
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
