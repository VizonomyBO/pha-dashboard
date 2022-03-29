export const NO_DATA = 'no-data';
export const BUSINESS_DETAILS = 'businessDetails';
export const OTHER_QUESTIONS = 'otherQuestions';
export const CONTACT_DETAILS = 'contactDetails';
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
