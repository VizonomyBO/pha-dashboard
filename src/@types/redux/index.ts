export interface CoordinateInterface {
  latitude: string,
  longitude: string
}
export interface MediaInterface {
  name: string,
  tipe: string,
  size: string,
  link: string,
}
export interface BusinessDetailsInterface {
  name: string,
  address_1: string,
  address_2: string,
  phone: string,
  city: string,
  state: string,
  zipcode: string,
  sun_open: string,
  sun_close: string,
  mon_open: string,
  mon_close: string,
  tues_open: string,
  tues_close: string,
  wed_open: string,
  wed_close: string,
  thurs_open: string,
  thurs_close: string,
  fri_open: string,
  fri_close: string,
  sat_open: string,
  sat_close: string,
  website: string,
  facebook: string,
  twitter: string,
  email: string,
  instagram: string,
}
export interface OtherQuestionsInterface {
  description: string,
  availability: string[],
  quality: string,
  visibility: string,
  local: string,
  produce_avail_store: string,
  produce_avail_seasonally: string
}
export interface ContactDetailsInterface {
  contact_name?: string,
  contact_email?: string,
  contact_owner?: string,
  contact_patron?: string
}
export interface SocialMediaInterface {
  facebook: string,
}
export interface FilesInterface {
  media: null | MediaInterface,
}
export interface MarketplaceInterface {
  businessDetails: BusinessDetailsInterface,
  socialMedia: SocialMediaInterface,
  files: FilesInterface,
  otherQuestions: OtherQuestionsInterface,
  contactDetails: ContactDetailsInterface,
}
