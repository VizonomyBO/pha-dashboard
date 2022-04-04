import { BadgeType } from '../@types';

export const NO_DATA = 'no-data';
export const BUSINESS_DETAILS = 'businessDetails';
export const OTHER_QUESTIONS = 'otherQuestions';
export const CONTACT_DETAILS = 'contactDetails';
export const VISIBLE_TIME = 2000;
export const PAGE_REDIRECT_TIME = 1000;
export const MARKED_ELEMENT = 'Yes';
export const MARKED_FRESH = 'Fresh';
export const MAPBOX_KEY = process.env.REACT_APP_MAPBOX_KEY || NO_DATA;
export const BASEMAP = 'mapbox://styles/vizonomy/cl0zk8u1o002w15pvqr3t0e1b';
export const CLASSES_BY_FORM = {
  [BUSINESS_DETAILS]: 'form1',
  [OTHER_QUESTIONS]: 'form2',
  [CONTACT_DETAILS]: 'form3',
} as {
  [key: string]: string;
};
export const DEFAULT_VIEW_STATE = {
  latitude: 39.02,
  longitude: -96,
  zoom: 3.1,
  bearing: 0,
  pitch: 0,
};

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
  'Misisipi',
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

export const TYPE_BUSINESS = {
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
  OWNER: 'owner'
};

export const BADGES: {
  [key: string]: BadgeType
} = {
  fresh: {
    text: 'Fresh Produce',
    image: '/images/local-large.png',
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
