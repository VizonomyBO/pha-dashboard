export const BUSINESS_DETAILS = 'businessDetails';
export const OTHER_QUESTIONS = 'otherQuestions';
export const CONTACT_DETAILS = 'contactDetails';

export const CLASSES_BY_FORM = {
  [BUSINESS_DETAILS]: 'form1',
  [OTHER_QUESTIONS]: 'form2',
  [CONTACT_DETAILS]: 'form3',
} as {
  [key: string]: string;
};

export const INITIAL_MARKETPLACE = {
  businessDetails: {
    name: '',
    cordinate: null,
  },
  socialMedia: {
    facebook: '',
  },
  files: {
    media: null,
  }
};
