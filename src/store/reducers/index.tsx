import { combineReducers } from 'redux';
import marketplaceReducer from './marketplaceReducers';

const reducers = {
  marketplace: marketplaceReducer,
};

export default combineReducers(reducers);
