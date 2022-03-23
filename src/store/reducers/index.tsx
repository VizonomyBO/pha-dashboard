import { combineReducers } from 'redux';
import marketplaceReducer from './marketplaceReducers';

export const reducers = {
  marketplace: marketplaceReducer,
};

export default combineReducers(reducers);
