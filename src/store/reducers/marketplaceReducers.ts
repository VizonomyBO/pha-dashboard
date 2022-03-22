import { AnyAction } from 'redux';
import * as TYPES from '../types';

export class Marketplace {
  businessDetails: any;

  socialMedia: any;

  files: any;

  constructor() {
    this.businessDetails = {
      name: '',
      cordinate: [],
    };
    this.socialMedia = {
      facebook: '',
    };
    this.files = {
      media: [],
    };
  }
}

const initialMarketplace = {
  businessDetails: {
    name: '',
    cordinate: [],
  },
  socialMedia: {
    facebook: '',
  },
  files: {
    media: [],
  }
};

const marketplaceReducer = (state: Marketplace, action: AnyAction) => {
  switch (action?.type) {
    case TYPES.SET_BUSINESS_DETAILS:
      return {
        ...initialMarketplace,
        businessDetails: action.payload,
      };
    case TYPES.RESET_MARKETPLACE:
      return initialMarketplace;
    default:
      return initialMarketplace;
  }
};

export default marketplaceReducer;
