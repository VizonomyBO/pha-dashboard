import { AnyAction } from 'redux';
import { SessionInterface } from '../../@types/redux';
import { INITIAL_SESSION } from '../defaultStore';
import * as TYPES from '../types';

const sessionReducer = (state: SessionInterface = INITIAL_SESSION, action: AnyAction = { type: 'foo' }) => {
  switch (action?.type) {
    case TYPES.SET_SESSION_STATE:
      return {
        ...state,
        sessionState: action.payload
      };
    case TYPES.INIT:
      return INITIAL_SESSION;
    default:
      return {
        ...state
      };
  }
};

export default sessionReducer;
