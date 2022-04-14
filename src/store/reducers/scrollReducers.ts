import { AnyAction } from 'redux';
import { ScrollInterface } from '../../@types/redux';
import { INITIAL_SCROLL } from '../defaultStore';
import * as TYPES from '../types';

const defaultState: ScrollInterface = {
  ...INITIAL_SCROLL
};

const scrollReducer = (state: ScrollInterface = defaultState, action: AnyAction = { type: 'foo' }) => {
  switch (action.type) {
    case TYPES.SET_SCROLL_WITH:
      return {
        ...state,
        withScroll: action.payload
      };
    case TYPES.SET_SCROLL_HEIGHT:
      return {
        ...state,
        heightScroll: action.payload
      };
    case TYPES.INIT:
      return INITIAL_SCROLL;
    default:
      return {
        ...state
      };
  }
};

export default scrollReducer;
