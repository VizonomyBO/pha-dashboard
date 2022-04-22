import * as TYPES from '../types';

export const setLoaderState = (isLoading: boolean) => ({
  type: TYPES.SET_LOADER_STATE,
  isLoading
});
