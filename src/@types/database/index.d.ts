import { Result } from '@mapbox/mapbox-gl-geocoder';

/* eslint-disable camelcase */
export interface PhaRetailer {
  retailer_id?: string,
  latitude?: number,
  longitude?: number,
  name?: string,
  address_1?: string,
  address_2?: string,
  phone?: string,
  city?: string,
  state?: string,
  zipcode?: string,
  sun_open?: string,
  sun_close?: string,
  mon_open?: string,
  mon_close?: string,
  tues_open?: string,
  tues_close?: string,
  wed_open?: string,
  wed_close?: string,
  thurs_open?: string,
  thurs_close?: string,
  fri_open?: string,
  fri_close?: string,
  sat_open?: string,
  sat_close?: string,
  website?: string,
  facebook?: string,
  instagram?: string,
  twitter?: string,
  email?: string,
  corner_store?: string,
  distribution?: string,
  farmers_market?: string,
  food_pantry?: string,
  food_co_op?: string,
  supermarket?: string,
  dollar_stores?: string,
  wic_accepted?: string,
  snap_accepted?: string,
  description?: string,
  availability?: string,
  quality?: string,
  visibility?: string,
  local?: string,
  produce_avail_store?: string,
  produce_avail_seasonally?: string,
  owner_photo?: string,
  owner_name?: string,
  contact_name?: string | undefined,
  contact_email?: string | undefined,
  contact_owner?: string | undefined,
  contact_patron?: string | undefined,
  general_store?: string,
  grocery_store?: string,
  submission_date?: string,
  submission_status?: string,
  imagelinks?: string,
  superstar_badge?: string | undefined,
  permanently_closed?: string | undefined,
  geom?: {
    type: string,
    coordinates: number[],
  },
  total?: number
}

export interface PhaIndividual {
  permanently_closed?: string,
  individual_id?: string,
  retailer_id: string,
  availability?: string,
  quality?: string,
  visibility?: string,
  local?: string,
  meets_need?: string,
  imagelinks?: string,
  produce_avail_store?: string,
  contact_name?: string,
  contact_email?: string,
  contact_phone?: string,
  contact_zipcode?: string,
  submission_date?: Date,
  submission_status?: string,
  files: Blob[]
}

export interface Manual {
  manual?: string
}
export interface InputTextInterface {
  text: string,
  shouldSearch: boolean,
  center: number[],
  bbox?: number[],
  placetype?: string[]
}
export interface ControllerZoomInterface {
  value: number,
  type: string
}
export interface GeocoderInterface {
  inputText: InputTextInterface,
  options: Result[],
  shouldZoom: boolean,
  controllerZoom: ControllerZoomInterface
}
export interface MarkerCenterInterface {
  center: number[],
  click: boolean,
  elementProperties: PropertiesLayer
}

export interface AvailabilityOptions {
  FRESH: boolean;
  FROZEN: boolean;
  CANNED: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CompletelyIntentionalAny = any;
