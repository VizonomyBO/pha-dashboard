import { AnyAction } from 'redux';
import { loaderInterface } from '../../@types/redux';
import * as TYPES from '../types';

const defaultState: loaderInterface = {
  isLoading: false
};

const loaderReducer = (state: loaderInterface = defaultState, action: AnyAction = { type: 'foo' }) => {
  switch (action.type) {
    case TYPES.SET_LOADER_STATE:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case TYPES.INIT:
      return {
        ...state,
        isLoading: false
      };
    default:
      return {
        ...state
      };
  }
};

export default loaderReducer;
