import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducers';
import marketplaceReducer from './marketplaceReducers';
import sessionReducer from './sessionReducer';
import individualFormReducer from './individualFormReducers';
import geocoderReducer from './geocoderReducers';
import modalReducer from './modalReducers';
import markerReducer from './markerReducer';
import scrollReducer from './scrollReducers';
import tabReducer from './tabReducer';

export const reducers = {
  marketplace: marketplaceReducer,
  categories: categoriesReducer,
  session: sessionReducer,
  individualForm: individualFormReducer,
  geocoder: geocoderReducer,
  modal: modalReducer,
  markerCenter: markerReducer,
  scroll: scrollReducer,
  tab: tabReducer
};

export default combineReducers(reducers);
