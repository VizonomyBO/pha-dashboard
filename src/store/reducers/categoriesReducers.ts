import { AnyAction } from 'redux';
import { INITIAL_CATEGORIES } from '../defaultStore';
import * as TYPES from '../types';

interface CategoryState {
  categoriesSelected: unknown[],
  center: unknown[],
  accesibility: unknown[],
  dataSources: unknown[]
}

const defaultState: CategoryState = {
  ...INITIAL_CATEGORIES
};

const categoriesReducer = (state: CategoryState = defaultState, action: AnyAction = { type: 'foo' }) => {
  switch (action?.type) {
    case TYPES.SET_CATEGORIES:
      return {
        ...state,
        categoriesSelected: action.categoriesSelected
      };
    case TYPES.INIT:
      return INITIAL_CATEGORIES;
    default:
      return {
        ...state
      };
  }
};

export default categoriesReducer;
