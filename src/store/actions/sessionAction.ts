import { Dispatch } from 'redux';
import * as TYPES from '../types';

export const setSessionState = (sessionState: boolean) => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.SET_SESSION_STATE,
    value: sessionState
  });
};
