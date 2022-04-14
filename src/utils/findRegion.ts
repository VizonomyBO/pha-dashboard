import { Result } from '@mapbox/mapbox-gl-geocoder';
import { REGION, REGION_GEOCODER } from '../constants';

export const findRegion = (opt: Result) => {
  const region = opt?.context?.find((c) => c.id.includes(REGION))?.text || '';
  const regionShortcode = opt?.context?.find((c) => c.id.includes(REGION))?.short_code
    ?.replace(REGION_GEOCODER, '') || '';
  return { region, regionShortcode };
};
