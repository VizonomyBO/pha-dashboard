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
