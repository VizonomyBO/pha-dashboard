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
export interface SocialMediaInterface {
  facebook: string,
}
export interface FilesInterface {
  media: null | MediaInterface,
}
export interface Marketplace {
  businessDetails:BusinessDetailsInterface,
  socialMedia : SocialMediaInterface,
  files : FilesInterface,
}
