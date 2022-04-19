import { PropertiesLayer } from '../../../@types';
import { DEFAULT_IMAGE } from '../../../constants';

export const useTooltip = () => {
  const getImageToDisplay = (objectTypified: PropertiesLayer) => {
    if (objectTypified.properties?.imagelinks) {
      const images = objectTypified.properties.imagelinks.split(',');
      return images[0];
    }
    return DEFAULT_IMAGE;
  };
  return {
    getImageToDisplay
  };
};
