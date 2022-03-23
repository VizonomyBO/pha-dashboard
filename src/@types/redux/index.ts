import { INITIAL_MARKETPLACE } from '../../constants';

export interface CoordinateInterface {
  latitude: string,
  longitude: string
}
export interface MediaInterface {
  name: string,
  tipe: string,
  size: string,
  link: string,
}

export interface Marketplace {
  businessDetails:{
    name: string,
    coordinate: CoordinateInterface | null,
  },
  socialMedia : {
    facebook: string,
  },
  files : {
    media: object | null | MediaInterface,
  }
}

export type MarketplaceType = typeof INITIAL_MARKETPLACE.businessDetails | typeof INITIAL_MARKETPLACE.socialMedia |
 typeof INITIAL_MARKETPLACE.files | typeof INITIAL_MARKETPLACE;
