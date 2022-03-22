import { INITIAL_MARKETPLACE } from '../../constants';

export interface Marketplace {
  businessDetails:{
    name: string,
    cordinate: Array<string> | null | Array<number>,
  },
  socialMedia : {
    facebook: string,
  },
  files : {
    media: Array<string> | null,
  }
}

export type MarketplaceType = typeof INITIAL_MARKETPLACE.businessDetails | typeof INITIAL_MARKETPLACE.socialMedia |
 typeof INITIAL_MARKETPLACE.files | typeof INITIAL_MARKETPLACE;
