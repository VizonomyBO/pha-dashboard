import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducers';
import marketplaceReducer from './marketplaceReducers';
import sessionReducer from './sessionReducer';
import individualFormReducer from './individualFormReducers';

export const reducers = {
  marketplace: marketplaceReducer,
  categories: categoriesReducer,
  session: sessionReducer,
  individualForm: individualFormReducer,
};

export default combineReducers(reducers);
