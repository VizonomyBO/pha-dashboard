import * as TYPES from '../types';

export const setCategoriesSelected = (categoriesSelected: string[]) => (
  {
    type: TYPES.SET_CATEGORIES,
    categoriesSelected
  }
);
