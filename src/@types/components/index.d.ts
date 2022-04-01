import { BUSINESS_DETAILS, CONTACT_DETAILS, OTHER_QUESTIONS } from '../../constants';

export interface HeaderInterface {
  type?: string
}

export type FormTabType = typeof BUSINESS_DETAILS | typeof OTHER_QUESTIONS | typeof CONTACT_DETAILS;
export interface FormHeaderInterface {
  activeTab: FormTabType,
  setActiveTab: (value: FormTabType) => void,
}

export interface DataPhaDasboardMap {
  retailer_id: string,
  imagelinks?: string,
  name: string,
  address_1: string,
  address_2: string,
  phone: string,
  city: string,
  state: string,
  zipcode: string,
  geom: {
    type: string,
    coordinates: number[]
  }
}

export interface DropdowInterface {
  initialState: string,
  type: string
}

export interface FileInterface {
  lastModified: number
  lastModifiedDate: date
  name: string
  size: number
  type: string
  webkitRelativePath: string
}
export interface MultimediaInterface {
  file?: FileInterface | FileList
}

export interface MultimediFileInterface {
  file?: {
    lastModified: number
    lastModifiedDate: date
    name: string
    size: number
    type: string
    webkitRelativePath: string
  }
}
