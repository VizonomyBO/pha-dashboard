export interface PropertiesLayer {
  properties?: {
    address_1?: string;
    name?: string;
    phone?: string;
    retailer_id?: string;
    owner_photo?: string;
  };
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
}

interface TooltipProps {
  x: number,
  y: number,
  objectTypified: PropertiesLayer,
  badges: string[],
}
