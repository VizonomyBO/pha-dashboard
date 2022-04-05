import { AnyAction } from 'redux';
import { INITIAL_CATEGORIES } from '../defaultStore';
import * as TYPES from '../types';

const categoriesReducer = (state: string[], action: AnyAction) => {
  switch (action?.type) {
    case TYPES.SET_CATEGORIES:
      return {
        ...state,
        categoriesSelected: action.categoriesSelected
      };
    default:
      return INITIAL_CATEGORIES;
  }
};

export default categoriesReducer;
