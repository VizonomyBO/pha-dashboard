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

export const HOURS = [
  '12:00 am',
  '1:00 am',
  '2:00 am',
  '3:00 am',
  '4:00 am',
  '5:00 am',
  '6:00 am',
  '7:00 am',
  '8:00 am',
  '9:00 am',
  '10:00 am',
  '11:00 am',
  '12:00 pm',
  '1:00 pm',
  '2:00 pm',
  '3:00 pm',
  '4:00 pm',
  '5:00 pm',
  '6:00 pm',
  '7:00 pm',
  '8:00 pm',
  '9:00 pm',
  '10:00 pm',
  '11:00 pm'
];

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

export const NAME_DROPDOWN = {
  STATES: 'States',
  OPEN: 'Open',
  CLOSE: 'Close'
};

export const TYPE_DROPDOWN = {
  STATE: 'state',
  SUN_OPEN: 'sun_open',
  SUN_CLOSE: 'sun_close',
  MON_OPEN: 'mon_open',
  MON_CLOSE: 'mon_close',
  TUE_OPEN: 'tue_open',
  TUE_CLOSE: 'tue_clouse',
  WED_OPEN: 'wed_open',
  WED_CLOSE: 'wed_clouse',
  THU_OPEN: 'thu_open',
  THU_CLOSE: 'thu_close',
  FRI_OPEN: 'fri_open',
  FRI_CLOSE: 'fri_clouse',
  SAT_OPEN: 'sat_open',
  SAT_CLOSE: 'sat_close'
};
