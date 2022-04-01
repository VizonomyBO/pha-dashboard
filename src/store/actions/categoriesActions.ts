import { Dispatch } from 'redux';
import * as TYPES from '../types';

export const setCategoriesSelected = (categoriesSelected: string[]) => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.SET_CATEGORIES,
    categoriesSelected
  });
};
