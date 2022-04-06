import { BUSINESS_DETAILS, CONTACT_DETAILS, OTHER_QUESTIONS } from '../../constants';

export interface BadgeType {
  text: string,
  image: string
}

export interface BadgePercentages {
  fresh_percentage?: number,
  acceptable_percentage?: number,
  visible_percentage?: number,
  local_percentage?: number,
  meets_need_percentage?: number,
}
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
  latitude?: number,
  longitude?: number,
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

export interface FormTabTypeInterface {
  setActiveTab?: React.Dispatch<React.SetStateAction<FormTabType>>
}
