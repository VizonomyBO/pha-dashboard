import { Result } from '@mapbox/mapbox-gl-geocoder';
import { REGION, REGION_GEOCODER } from '../constants';

export const findRegion = (opt: Result) => {
  const regionObject = opt?.context?.find((c) => c.id.includes(REGION));
  const region = regionObject?.text || '';
  const regionShortcode = regionObject?.short_code?.replace(REGION_GEOCODER, '') || '';
  return { region, regionShortcode };
};
