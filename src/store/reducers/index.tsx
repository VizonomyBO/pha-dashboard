import { combineReducers } from 'redux';
import marketplaceReducer from './marketplaceReducers';
import sessionReducer from './sessionReducer';
import individualFormReducer from './individualFormReducers';

export const reducers = {
  marketplace: marketplaceReducer,
  session: sessionReducer,
  individualForm: individualFormReducer,
};

export default combineReducers(reducers);
