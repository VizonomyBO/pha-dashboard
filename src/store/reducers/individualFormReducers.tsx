import { AnyAction } from 'redux';
import { PhaIndividual } from '../../@types/database';
import { INITIAL_INDIVIDUAL_FORM } from '../defaultStore';
import * as TYPES from '../types';

const individualFormReducer = (state: PhaIndividual = INITIAL_INDIVIDUAL_FORM, action: AnyAction = { type: 'foo' }) => {
  switch (action?.type) {
    case TYPES.SET_INDIVIDUAL_FORM:
      return {
        ...state,
        [action.payload]: action.value
      };
    case TYPES.RESET_INDIVIDUAL_FORM:
      return { ...state, ...INITIAL_INDIVIDUAL_FORM };
    default:
      return {
        ...state
      };
  }
};

export default individualFormReducer;
