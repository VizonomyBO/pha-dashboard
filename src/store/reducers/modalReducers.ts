import { AnyAction } from 'redux';
import { ModalInderface } from '../../@types/redux';
import { INITIAL_MODAL_STATE } from '../defaultStore';
import * as TYPES from '../types';

const defaultState: ModalInderface = {
  ...INITIAL_MODAL_STATE
};

const modalReducer = (state: ModalInderface = defaultState, action: AnyAction = { type: 'foo' }) => {
  switch (action.type) {
    case TYPES.SET_MODAL_OPEN:
      return {
        ...state,
        open: action.payload.open,
        type: action.payload.type
      };
    case TYPES.INIT:
      return INITIAL_MODAL_STATE;
    default:
      return {
        ...state
      };
  }
};

export default modalReducer;
