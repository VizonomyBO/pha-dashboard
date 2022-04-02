import { AnyAction } from 'redux';
import { SessionInterface } from '../../@types/redux';
import { INITIAL_SESSION } from '../defaultStore';
import * as TYPES from '../types';

const sessionReducer = (state: SessionInterface, action: AnyAction) => {
  switch (action?.type) {
    case TYPES.SET_SESSION_STATE:
      return {
        ...state,
        sessionState: action.payload
      };
    default:
      return INITIAL_SESSION;
  }
};

export default sessionReducer;
