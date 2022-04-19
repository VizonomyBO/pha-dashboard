import { PropertiesLayer } from '../../../@types';

export const useTooltip = () => {
  const getImageToDisplay = (objectTypified: PropertiesLayer) => {
    if (objectTypified.properties?.imagelinks) {
      const images = objectTypified.properties.imagelinks.split(',');
      return images[0];
    }
    return '/images/img_landing.png';
  };
  return {
    getImageToDisplay
  };
};
