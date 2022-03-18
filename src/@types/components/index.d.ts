import { BUSINESS_DETAILS, CONTACT_DETAILS, OTHER_QUESTIONS } from '../../constants';

export interface HeaderInterface {
  type?: string
}

export type FormTabType = typeof BUSINESS_DETAILS | typeof OTHER_QUESTIONS | typeof CONTACT_DETAILS;
export interface FormHeaderInterface {
  activeTab: FormTabType,
  setActiveTab: (value: FormTabType) => void,
}
