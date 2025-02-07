import { BadgeType } from '../@types';

export const NO_DATA = 'no-data';
export const BUSINESS_DETAILS = 'businessDetails';
export const OTHER_QUESTIONS = 'otherQuestions';
export const CONTACT_DETAILS = 'contactDetails';
export const SUPERSTART_BADGE = 'superstar_badge';
export const HOME = 'home';
export const VISIBLE_TIME = 2000;
export const PAGE_REDIRECT_TIME = 1000;
export const MARKED_ELEMENT = 'Yes';
export const MARKED_FRESH = 'Fresh';
export const GEOCODER_ADDRESS = 'geocoder-address';
export const GEOCODER = 'geocoder';
export const GEOCODER_MOBILE = 'geocoder-mobile';
export const REGION_GEOCODER = 'US-';
export const REGION = 'region';
export const MAX_TEXT = 450;
export const INDIVIDUAL_FORM = 'individualForm';
export const MAPBOX_KEY = process.env.REACT_APP_MAPBOX_KEY || NO_DATA;
export const MAX_ELEMENTS = 5;
export const BASEMAP = 'mapbox://styles/vizonomy/cl0zk8u1o002w15pvqr3t0e1b';
export const BASEMAP_SATELLITE = 'mapbox://styles/vizonomy/cl0zka27x000m14qxfq4d8pn6';
export const GOOGLE_STORAGE = 'https://storage.googleapis.com/pha-storage/';
export const CLASSES_BY_FORM = {
  [BUSINESS_DETAILS]: 'form1',
  [OTHER_QUESTIONS]: 'form2',
  [CONTACT_DETAILS]: 'form3',
} as {
  [key: string]: string;
};
export const DEFAULT_VIEW_STATE = {
  latitude: 32.745440,
  longitude: -89.638029,
  zoom: 6.33,
  bearing: 0,
  pitch: 0
};

export const DEFAULT_VIEW_STATE_MOBILE = {
  latitude: 32.847450,
  longitude: -89.778029,
  zoom: 6.2,
  bearing: 0,
  pitch: 0
};

export const DEFAULT_VIEW_STATE_PROFILE = {
  latitude: 33.047450,
  longitude: -89.638029,
  zoom: 6.3,
  bearing: 0,
  pitch: 0,
};

export const POINTS_OF_INTEREST = 'poi';

export const STATES = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Carolina del Norte',
  'Carolina del Sur',
  'Colorado',
  'Connecticut',
  'Dakota del Norte',
  'Dakota del Sur',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawái',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Luisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Míchigan',
  'Minnesota',
  'Mississippi',
  'Misuri',
  'Montana',
  'Nebraska',
  'Nevada',
  'Nueva Jersey',
  'Nueva York',
  'Nuevo Hampshire',
  'Nuevo México',
  'Ohio',
  'Oklahoma',
  'Oregón',
  'Pensilvania',
  'Rhode Island',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Virginia Occidental',
  'Washington',
  'Wisconsin',
  'Wyoming'
];

export const DEFAULT_DROPDOWN_OPTION = {
  STATES: 'States',
  OPEN: 'Open',
  CLOSE: 'Close'
};

export const SELECT_CATEGORY = {
  CATEGORY_SUPERMARKET: 'supermarket',
  CATEGORY_CORNER: 'corner_store',
  CATEGORY_DOLLAR: 'dollar_stores',
  CATEGORY_FOOD_PANTRY: 'food_pantry',
  CATEGORY_DISTRIBUTION: 'distribution',
  CATEGORY_FOOD_CO_OP: 'food_co_op',
};

export const TYPE_BUSINESS = {
  RETAILER_ID: 'retailer_id',
  NAME: 'name',
  ADDRESS_1: 'address_1',
  ADDRESS_2: 'address_2',
  PHONE: 'phone',
  CITY: 'city',
  STATE: 'state',
  ZIPCODE: 'zipcode',
  SUN_OPEN: 'sun_open',
  SUN_CLOSE: 'sun_close',
  MON_OPEN: 'mon_open',
  MON_CLOSE: 'mon_close',
  TUES_OPEN: 'tues_open',
  TUES_CLOSE: 'tues_close',
  WED_OPEN: 'wed_open',
  WED_CLOSE: 'wed_close',
  THURS_OPEN: 'thurs_open',
  THURS_CLOSE: 'thurs_close',
  FRI_OPEN: 'fri_open',
  FRI_CLOSE: 'fri_close',
  SAT_OPEN: 'sat_open',
  SAT_CLOSE: 'sat_close',
  WEBSITE: 'website',
  FACEBOOK: 'facebook',
  TWITTER: 'twitter',
  EMAIL: 'email',
  INSTAGRAM: 'instagram',
  BUSINESS: 'business',
  OWNER: 'owner',
  LATITUDE: 'latitude',
  LONGITUDE: 'longitude',
  MASTER_ID: 'master_id'
};

export const BADGES: {
  [key: string]: BadgeType
} = {
  fresh: {
    text: 'Fresh Produce',
    image: '/images/availability-large.png',
  },
  acceptable: {
    text: 'Quality',
    image: '/images/quality-large.png',
  },
  visible: {
    text: 'Local',
    image: '/images/local-large.png',
  },
  local: {
    text: 'Visibility',
    image: '/images/visibility-large.png',
  },
  meets_need: {
    text: 'Superstar',
    image: '/images/superstar-large.png',
  }
};

export const PERCENTAGE_KEYS = {
  FRESH: 'fresh',
  ACCEPTABLE: 'acceptable',
  VISIBLE: 'visible',
  LOCAL: 'local',
  MEETS_NEED: 'meets_need',
};

export const TYPE_INDIVIDUAL_FORM = {
  individual_id: 'individual_id',
  retailer_id: 'retailer_id',
  availability: 'availability',
  quality: 'quality',
  visibility: 'visibility',
  permanently_closed: 'permanently_closed',
  imagelinks: 'imagelinks',
  local: 'local',
  meets_need: 'meets_need',
  produce_avail_store: 'produce_avail_store',
  contact_name: 'contact_name',
  contact_email: 'contact_email',
  contact_phone: 'contact_phone',
  contact_zipcode: 'contact_zipcode',
  submission_date: 'submission_date',
  submission_status: 'submission_status',
  multimedia: 'files'
};

export const ICON_MAPPING = {
  marker: {
    x: 0,
    y: 0,
    width: 32,
    height: 42,
    mask: false
  }
};

export const ATTACHMENTS_SUB_TYPES = {
  OWNER_IMAGES: 'ownerimages',
  IMAGES: 'images',
};

export const JSON_FIELD = 'json';
export const MOBILE_WIDTH = 600;
export const MOBILE_WIDTH_ATTACHMENT = 400;

export const DEFAULT_IMAGE = '/images/img_landing.png';

export const MISSISSIPPI_BBOX:[number, number, number, number] = [
  -91.669922, 30.173625, -88.077393, 35.029996
];

export const MISSISSIPPI_CENTER:[number, number] = [
  -89.741821, 32.342841
];

export const MISSISSIPPI_NAME = 'Mississippi';
