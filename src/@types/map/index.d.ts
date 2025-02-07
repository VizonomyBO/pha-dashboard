export interface PropertiesLayer {
  properties?: {
    address_1?: string;
    name?: string;
    phone?: string;
    retailer_id?: string;
    owner_photo?: string;
    imagelinks?: string,
    listing_name?: string,
    location_address?: string,
    snap_option?: string,
    adress?: string,
    city?: string,
    postcode?: string,
    address?: string,
    master_id?: number,
    zipcode?: string,
    location_address?: string,
    superstar_badge?: string
  },
  geometry?: {
    type: string,
    coordinates: number[]
  }
}

export interface ModalFilterData {
  setOpenModal?: SetStateAction<S>;
}

export interface FilterType {
  name: string;
  attrib: string;
}

export interface RenderToolTipInterface {
  info: PickInfo<Layer<unknown>[]> | undefined,
  badges: string[],
  width: number,
  setVisibleFeedback: React.Dispatch<React.SetStateAction<boolean>>,
  setCurrentRetailerId: React.Dispatch<React.SetStateAction<string>>
}

interface TooltipProps {
  x?: number,
  y?: number,
  objectTypified: PropertiesLayer,
  badges: string[],
  setVisibleFeedback: React.Dispatch<React.SetStateAction<boolean>>,
  setCurrentRetailerId: React.Dispatch<React.SetStateAction<string>>,
  layer?: Layer<unknown>[] | undefined,
  isMobile?: boolean
}

export type ZoomInterface = {value: number, type: string}
