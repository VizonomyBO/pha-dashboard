import * as TYPES from '../types';

export const setCategoriesSelected = (categoriesSelected: string[]) => (
  {
    type: TYPES.SET_CATEGORIES,
    categoriesSelected
  }
);
export const setAccesibilitiesSelected = (accesibilities: string[]) => (
  {
    type: TYPES.SET_ACCESSIBILITY,
    accesibilities
  }
);
export const setCenterGeocoder = (center: string[]) => (
  {
    type: TYPES.SET_CENTER,
    center
  }
);
export const setDataSourcesSelected = (dataSources: string[]) => (
  {
    type: TYPES.SET_DATA_SOURCES,
    dataSources
  }
);
export const setBadgesSelected = (badges: string[]) => (
  {
    type: TYPES.SET_BADGES,
    badges
  }
);
export const resetValues = () => (
  {
    type: TYPES.RESET_VALUES
  }
);
export const setCallFilters = (callFilters: boolean) => (
  {
    type: TYPES.CALL_FILTERS,
    callFilters
  }
);
