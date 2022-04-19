import * as TYPES from '../types';

export const setOwnerPhotos = (ownerImages: string) => ({
  type: TYPES.SET_OWNER_PHOTOS,
  payload: ownerImages
});

export const setImagelinks = (imagelinks: string) => ({
  type: TYPES.SET_IMAGELINKS,
  payload: imagelinks
});
