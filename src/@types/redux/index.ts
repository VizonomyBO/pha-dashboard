import { FormTabType } from '../components';

export interface CoordinateInterface {
  latitude: string,
  longitude: string,
}
export interface MediaInterface {
  name: string,
  tipe: string,
  size: string,
  link: string,
}
export interface BusinessDetailsInterface {
  retailer_id?: string | undefined;
  name: string,
  address_1: string,
  address_2: string,
  phone: string,
  city: string,
  state: string,
  zipcode: string,
  sun_open: string,
  sun_close: string,
  mon_open: string,
  mon_close: string,
  tues_open: string,
  tues_close: string,
  wed_open: string,
  wed_close: string,
  thurs_open: string,
  thurs_close: string,
  fri_open: string,
  fri_close: string,
  sat_open: string,
  sat_close: string,
  website: string,
  facebook: string,
  twitter: string,
  email: string,
  instagram: string,
  latitude: number,
  longitude: number,
}
export interface OtherQuestionsInterface {
  description: string,
  availabilityOptions: string[],
  quality: string,
  visibility: string,
  local: string,
  produce_avail_store: string,
  produce_avail_seasonally: string,
}
export interface ContactDetailsInterface {
  contact_name?: string,
  contact_email?: string,
  contact_owner?: string,
  contact_patron?: string,
}
export interface SocialMediaInterface {
  facebook: string,
}
export interface FilesInterface {
  bussines: unknown[],
  owner: unknown[],
  media: null | MediaInterface,
  images: Blob[],
  ownerimages: Blob[]
}
export interface SelectCategoryInterface {
  supermarket: string,
  corner_store: string,
  dollar_stores: string,
  food_pantry: string,
  distribution: string,
  food_co_op: string,
}
export interface SelectAccessibilityInterface {
  wic_accepted: string,
  snap_accepted: string,
}
export interface MarketplaceInterface {
  businessDetails: BusinessDetailsInterface,
  socialMedia: SocialMediaInterface,
  files: FilesInterface,
  otherQuestions: OtherQuestionsInterface,
  contactDetails: ContactDetailsInterface,
  selectCategory: SelectCategoryInterface,
  selectAccessibility: SelectAccessibilityInterface,
  retailerFiles: RetailerFileInterface,
  osm_id?: string
}

export interface SessionInterface {
  sessionState: boolean,
  error: boolean,
}

export interface IndividualFormInterface {
  individual_id?: string,
  retailer_id: string,
  availability: string[],
  quality?: string,
  visibility?: string,
  local?: string,
  meetsNeed?: string,
  produceAvailStore?: string,
  contactName?: string,
  contactEmail?: string,
  contactPhone?: string,
  contactZipcode?: string,
  submissionDate?: Date,
  submissionStatus?: string,
  multimedia?: MediaInterface[],
}

export interface BBOXInterface {xmin: number, ymin: number, xmax: number, ymax: number}

export interface CategoriesInterface {
  categoriesSelected: string[],
  center: number[],
  accesibilities: string[],
  dataSources: string[],
  badges: string[],
  bbox?: BBOXInterface,
  callFilters: boolean,
  zoomCenter: boolean,
  mapViewFilter: boolean
}

export interface QueriesInterface {
  connection_name: string,
  token: string,
  queries: {
    retailers_pha?: string,
    retailers_osm?: string,
    retailers_usda?: string,
  },
}

export interface ModalInderface {
  open: boolean,
  type: boolean
}

export interface TabStateInterface {
  activeTab: FormTabType;
}

export interface ScrollInterface {
  widthScroll: number,
  heightScroll: number
}

export interface RetailerFileInterface {
  imagelinks: string,
  owner_photo: string,
}
