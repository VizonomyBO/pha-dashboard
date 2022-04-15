import { MarketplaceInterface } from '../../@types/redux';

export const INITIAL_MARKETPLACE: MarketplaceInterface = {
  socialMedia: {
    facebook: 'fb'
  },
  businessDetails: {
    name: '',
    address_1: '',
    address_2: '',
    phone: '',
    city: '',
    state: '',
    zipcode: '',
    sun_open: '',
    sun_close: '',
    mon_open: '',
    mon_close: '',
    tues_open: '',
    tues_close: '',
    wed_open: '',
    wed_close: '',
    thurs_open: '',
    thurs_close: '',
    fri_open: '',
    fri_close: '',
    sat_open: '',
    sat_close: '',
    website: '',
    facebook: '',
    twitter: '',
    email: '',
    instagram: '',
    latitude: 0,
    longitude: 0,
  },
  files: {
    bussines: [],
    owner: [],
    media: null
  },
  otherQuestions: {
    description: '',
    availabilityOptions: [],
    quality: '',
    visibility: '',
    local: '',
    produce_avail_store: '',
    produce_avail_seasonally: ''
  },
  contactDetails: {
    contact_name: '',
    contact_email: '',
    contact_owner: 'No',
    contact_patron: 'No'
  },
  selectCategory: {
    supermarket: 'No',
    corner_store: 'No',
    dollar_stores: 'No',
    food_pantry: 'No',
    distribution: 'No',
    food_co_op: 'No',
  },
  selectAccessibility: {
    wic_accepted: 'No',
    snap_accepted: 'No',
  },
};

export const INITIAL_SESSION = {
  sessionState: false,
  error: false
};

export const INITIAL_INDIVIDUAL_FORM = {
  individual_id: '',
  retailer_id: '',
  availability: '',
  quality: '',
  visibility: '',
  local: '',
  meets_need: '',
  produce_avail_store: '',
  contact_name: '',
  contact_email: '',
  contact_phone: '',
  contact_zipcode: '',
  submission_date: new Date(),
  submission_status: '',
};

export const INITIAL_CATEGORIES = {
  categoriesSelected: [],
  center: [],
  accesibilities: [],
  badges: [],
  dataSources: ['retailers_pha'],
  callFilters: true,
  zoomCenter: true,
  mapViewFilter: false
};

export const INITIAL_GEOCODER_STATE = {
  inputText: {
    text: '',
    shouldSearch: false,
    center: [],
    bbox: []
  },
  options: [],
  shouldZoom: false,
  controllerZoom: {
    value: 0,
    type: ''
  }
};

export const INITIAL_MODAL_STATE = {
  open: false,
  type: false
};

export const INITIAL_CENTER_MARKER = {
  center: [],
  click: false,
  elementProperties: {
    properties: {
      address_1: '',
      name: '',
      phone: '',
      retailer_id: '',
      owner_photo: ''
    }
  }
};

export const INITIAL_SCROLL = {
  widthScroll: 0,
  heightScroll: 0
};
