import { useEffect, useState } from 'react';
import { PropertiesLayer } from '../../../@types';
import { CompletelyIntentionalAny } from '../../../@types/database';
import { DEFAULT_IMAGE, GOOGLE_STORAGE } from '../../../constants';
import { ENDPOINTS } from '../../../constants/url';
import { isEmpty } from '../../../utils/validation';
import { webRequest } from '../../../utils/webRequest';

export const useTooltip = (objectTypifiedd?: PropertiesLayer) => {
  const [imageIndividual, setImageIndividual] = useState<string[]>();
  useEffect(() => {
    if (objectTypifiedd) {
      const returnimg: string[] = [];
      webRequest.get(ENDPOINTS.IMAGE_INDIVIDUAL(objectTypifiedd.properties?.retailer_id)).then((res) => res.json())
        .then((res) => {
          if (res.data.length > 0) {
            res.data.forEach((value: string) => {
              if (isEmpty(value)) {
                returnimg.push(value);
              }
            });
          }
          setImageIndividual(returnimg);
        });
    }
  }, [objectTypifiedd]);
  const getImageToDisplay = (objectTypified: PropertiesLayer) => {
    if (objectTypified.properties?.imagelinks) {
      const images = objectTypified.properties.imagelinks.split(',');
      if (images[0].includes(GOOGLE_STORAGE)) {
        return images[0];
      }
      return images[1];
    }
    return DEFAULT_IMAGE;
  };
  const getImageToDisplayList = (objectTypified: PropertiesLayer) => {
    const returnImg: CompletelyIntentionalAny[] | PromiseLike<CompletelyIntentionalAny[]> = [];
    if (objectTypified.properties?.imagelinks) {
      const images = objectTypified.properties.imagelinks.split(',');
      for (let i = 0; i < images.length; i += 1) {
        if (images[i].includes(GOOGLE_STORAGE)) {
          returnImg.push(images[i]);
        }
      }
    }
    return returnImg;
  };
  const getAddress = (objectTypifiedAddress: PropertiesLayer) => {
    if (objectTypifiedAddress.properties?.address) {
      return `${objectTypifiedAddress.properties?.address}`;
    }
    if (objectTypifiedAddress.properties?.address_1) {
      return `${objectTypifiedAddress.properties?.address_1}`;
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
    getName,
    getImageToDisplayList,
    imageIndividual
  };
};
