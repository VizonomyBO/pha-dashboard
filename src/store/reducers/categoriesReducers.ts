import { AnyAction } from 'redux';
import { INITIAL_FILTERS } from '../defaultStore';
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
    case TYPES.INIT:
      return INITIAL_FILTERS;
    default:
      return {
        ...state
      };
  }
};

export default categoriesReducer;
