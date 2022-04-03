import { combineReducers } from 'redux';
import marketplaceReducer from './marketplaceReducers';
import sessionReducer from './sessionReducer';

export const reducers = {
  marketplace: marketplaceReducer,
  session: sessionReducer,
};

export default combineReducers(reducers);
