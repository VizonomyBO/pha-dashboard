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
  coordinate: CoordinateInterface | null,
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
}
