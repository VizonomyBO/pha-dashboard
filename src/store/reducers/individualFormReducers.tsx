import { AnyAction } from 'redux';
import { PhaIndividual } from '../../@types/database';
import { INITIAL_INDIVIDUAL_FORM } from '../defaultStore';
import * as TYPES from '../types';

const individualFormReducer = (state: PhaIndividual, action: AnyAction) => {
  switch (action?.type) {
    case TYPES.SET_INDIVIDUAL_FORM:
      return {
        ...state,
        [action.payload]: action.value
      };
    default:
      return INITIAL_INDIVIDUAL_FORM;
  }
};

export default individualFormReducer;
