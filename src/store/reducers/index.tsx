import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducers';
import marketplaceReducer from './marketplaceReducers';

export const reducers = {
  marketplace: marketplaceReducer,
  categories: categoriesReducer
};

export default combineReducers(reducers);
