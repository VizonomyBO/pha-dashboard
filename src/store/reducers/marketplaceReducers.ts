import { AnyAction } from 'redux';
import { MarketplaceInterface } from '../../@types/redux';
import { INITIAL_MARKETPLACE } from '../defaultStore';
import * as TYPES from '../types';

const defaultState: MarketplaceInterface = {
  ...INITIAL_MARKETPLACE
};

const marketplaceReducer = (state: MarketplaceInterface = defaultState, action: AnyAction = { type: 'foo' }) => {
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
      return INITIAL_MARKETPLACE;
    case TYPES.BUSINESS_FILES:
      return {
        ...state,
        files: {
          ...state.files,
          [action.payload]: action.value
        }
      };
    case TYPES.SET_OTHER_QUESTIONS:
      return {
        ...state,
        otherQuestions: {
          ...state.otherQuestions,
          description: action.value,
        }
      };
    case TYPES.SET_AVAILABILITY_OPTIONS:
      return {
        ...state,
        otherQuestions: {
          ...state.otherQuestions,
          availabilityOptions: action.payload
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
          produce_avail_store: action.value,
        }
      };
    case TYPES.SET_PRODUCE_AVAIL_SEASONALLY:
      return {
        ...state,
        otherQuestions: {
          ...state.otherQuestions,
          produce_avail_seasonally: action.value,
        }
      };
    case TYPES.SET_CONTACT_NAME:
      return {
        ...state,
        contactDetails: {
          ...state.contactDetails,
          contact_name: action.value,
        }
      };
    case TYPES.SET_CONTACT_EMAIL:
      return {
        ...state,
        contactDetails: {
          ...state.contactDetails,
          contact_email: action.value,

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
    case TYPES.SET_SELECT_CATEGORY:
      return {
        ...state,
        selectCategory: {
          ...state.selectCategory,
          [action.payload]: action.value
        }
      };
    case TYPES.SET_SELECT_CATEGORY_SUPERMARKET:
      return {
        ...state,
        selectCategory: {
          ...state.selectCategory,
          supermarket: action.payload
        }
      };
    case TYPES.SET_SELECT_CATEGORY_CORNER:
      return {
        ...state,
        selectCategory: {
          ...state.selectCategory,
          corner_store: action.payload
        }
      };
    case TYPES.SET_SELECT_CATEGORY_DOLLAR:
      return {
        ...state,
        selectCategory: {
          ...state.selectCategory,
          dollar_stores: action.payload
        }
      };
    case TYPES.SET_SELECT_CATEGORY_FOOD_PANTRY:
      return {
        ...state,
        selectCategory: {
          ...state.selectCategory,
          food_pantry: action.payload
        }
      };
    case TYPES.IMAGES_FILES:
      return {
        ...state,
        files: {
          ...state.files,
          [action.payload]: action.value
        }
      };
    case TYPES.SET_SELECT_CATEGORY_DISTRIBUTION:
      return {
        ...state,
        selectCategory: {
          ...state.selectCategory,
          distribution: action.payload
        }
      };
    case TYPES.SET_SELECT_OPERATION:
      return {
        ...state,
        currentOperation: {
          open: action.payload
        }
      };
    case TYPES.SET_SELECT_CATEGORY_FOOD_CO_OP:
      return {
        ...state,
        selectCategory: {
          ...state.selectCategory,
          food_co_op: action.payload
        }
      };
    case TYPES.SET_SELECT_WIC_ACCEPTED:
      return {
        ...state,
        selectAccessibility: {
          ...state.selectAccessibility,
          wic_accepted: action.payload
        }
      };
    case TYPES.SET_SELECT_SNAP_ACCEPTED:
      return {
        ...state,
        selectAccessibility: {
          ...state.selectAccessibility,
          snap_accepted: action.payload
        }
      };
    case TYPES.SET_IMAGELINKS:
      return {
        ...state,
        retailerFiles: {
          ...state.retailerFiles,
          imagelinks: action.payload
        }
      };
    case TYPES.SET_OWNER_PHOTOS:
      return {
        ...state,
        retailerFiles: {
          ...state.retailerFiles,
          owner_photo: action.payload
        }
      };
    case TYPES.INIT:
      return INITIAL_MARKETPLACE;
    default:
      return {
        ...state
      };
  }
};

export default marketplaceReducer;
