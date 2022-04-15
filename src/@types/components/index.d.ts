/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetStateAction } from 'react';
import { Layer } from 'deck.gl';
import { BUSINESS_DETAILS, CONTACT_DETAILS, OTHER_QUESTIONS } from '../../constants';
import { PhaRetailer } from '../database';

export interface BadgeType {
  text: string,
  image: string,
}

type Status = 'Rejected' | 'Pending' | 'Approved' | '';
export interface QueryParams {
  page: number,
  limit: number,
  search: string,
  status: string,
  dateRange: string
}
export interface BadgePercentages {
  fresh_percentage?: number,
  acceptable_percentage?: number,
  visible_percentage?: number,
  local_percentage?: number,
  meets_need_percentage?: number,
}
export interface HeaderInterface {
  type?: string,
  setOpenModal?: SetStateAction<S>,
}

export type FormTabType = typeof BUSINESS_DETAILS | typeof OTHER_QUESTIONS | typeof CONTACT_DETAILS;
export interface FormHeaderInterface {
  activeTab: FormTabType,
  setActiveTab: (value: FormTabType) => void,
}
export type Geomtype = {
  geom: {
    type: string,
    coordinates: number[],
  },
};

export interface imageLinks {
  imagelinks: string;
}

export type DataPhaDasboardMap = PhaRetailer & Geomtype & imageLinks & { source: string};

export interface DropdowInterface {
  initialState: string,
  type: string,
}

export interface FileInterface {
  lastModified: number,
  lastModifiedDate: date,
  name: string,
  size: number,
  type: string,
  webkitRelativePath: string,
}
export interface MultimediaInterface {
  file?: FileInterface | FileList,
}

export interface MultimediFileInterface {
  file?: {
    lastModified: number,
    lastModifiedDate: date,
    name: string,
    size: number,
    type: string,
    webkitRelativePath: string,
  },
}

export interface FormTabTypeInterface {
  setActiveTab?: React.Dispatch<React.SetStateAction<FormTabType>>,
}

export interface ViewStateInterface {
  latitude: number,
  longitude: number,
  zoom: number,
  bearing: number,
  pitch: number,
}
export type ViewStateChangeFn = (args: {
  viewState: any,
  interactionState: {
    inTransition?: boolean,
    isDragging?: boolean,
    isPanning?: boolean,
    isRotating?: boolean,
    isZooming?: boolean,
  },
  oldViewState: any,
}) => any;

export interface DeckInterface {
  initialStateView: ViewStateInterface,
  onViewStateChange: ViewStateChangeFn,
  controller: boolean,
  layers: Layer[],
  onClickFunction: (...args) => any,
  onLoadFunction: (...args) => any,
  onTransitionEnd: (...args) => any,
  onFinishRenderFunction: (...args) => any,
  currentBasemap: string
}

export interface ButtonDashboard {
  id: string,
  name: string,
  class: string,
  active: boolean
}
