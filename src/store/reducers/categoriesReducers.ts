import { AnyAction } from 'redux';
import { INITIIAL_FILTERS } from '../defaultStore';
import * as TYPES from '../types';

const categoriesReducer = (state: string[], action: AnyAction) => {
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
    default:
      return INITIIAL_FILTERS;
  }
};

export default categoriesReducer;
