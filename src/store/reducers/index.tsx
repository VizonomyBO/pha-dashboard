import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducers';
import marketplaceReducer from './marketplaceReducers';
import sessionReducer from './sessionReducer';
import individualFormReducer from './individualFormReducers';
import geocoderReducer from './geocoderReducers';
import modalReducer from './modalReducers';

export const reducers = {
  marketplace: marketplaceReducer,
  categories: categoriesReducer,
  session: sessionReducer,
  individualForm: individualFormReducer,
  geocoder: geocoderReducer,
  modal: modalReducer,
};

export default combineReducers(reducers);
