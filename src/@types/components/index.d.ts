import { BUSINESS_DETAILS, CONTACT_DETAILS, OTHER_QUESTIONS } from '../../constants';

export interface HeaderInterface {
  type?: string
}

export interface FormHeaderInterface {
  active: string,
  setActive: (value: string) => void,
}

export type FormTabType = typeof BUSINESS_DETAILS | typeof OTHER_QUESTIONS | typeof CONTACT_DETAILS;
