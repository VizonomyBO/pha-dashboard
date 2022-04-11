import { AnyAction } from 'redux';
import { CategoriesInterface } from '../../@types/redux';
import { INITIAL_CATEGORIES } from '../defaultStore';
import * as TYPES from '../types';

const defaultState: CategoriesInterface = {
  ...INITIAL_CATEGORIES
};

const categoriesReducer = (state: CategoriesInterface = defaultState, action: AnyAction = { type: 'foo' }) => {
  switch (action?.type) {
    case TYPES.SET_CATEGORIES:
      return {
        ...state,
        categoriesSelected: action.categoriesSelected
      };
    case TYPES.SET_ACCESSIBILITY:
      return {
        ...state,
        accesibilities: action.accesibilities
      };
    case TYPES.SET_CENTER:
      return {
        ...state,
        center: action.center
      };
    case TYPES.SET_DATA_SOURCES:
      return {
        ...state,
        dataSources: action.dataSources
      };
    case TYPES.SET_BADGES:
      return {
        ...state,
        badges: action.badges
      };
    case TYPES.CALL_FILTERS:
      return {
        ...state,
        callFilters: action.callFilters
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
