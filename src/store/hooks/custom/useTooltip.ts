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
  const getAddress = (objectTypifiedAddress: PropertiesLayer) => {
    if (objectTypifiedAddress.properties?.address) {
      return `${objectTypifiedAddress.properties?.address}, `;
    }
    if (objectTypifiedAddress.properties?.address_1) {
      return `${objectTypifiedAddress.properties?.address_1}, `;
    }
    if (objectTypifiedAddress.properties?.location_address) {
      return `${objectTypifiedAddress.properties.location_address}`;
    }
    return '';
  };
  const getPostCode = (objectTypifiedPC: PropertiesLayer) => {
    if (objectTypifiedPC.properties?.postcode) {
      return `${objectTypifiedPC.properties?.postcode}`;
    }
    if (objectTypifiedPC.properties?.zipcode) {
      return `${objectTypifiedPC.properties?.zipcode}`;
    }
    return '';
  };
  const getName = (objectTypified: PropertiesLayer) => {
    if (objectTypified.properties?.listing_name) {
      return `${objectTypified.properties?.listing_name}`;
    }
    if (objectTypified.properties?.name) {
      return `${objectTypified.properties?.name}`;
    }
    return '';
  };
  return {
    getImageToDisplay,
    getAddress,
    getPostCode,
    getName
  };
};
