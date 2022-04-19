import { AnyAction } from 'redux';
import { RetailerFileInterface } from '../../@types/redux';
import { INITIAL_RETAILER_FILES_REDUCER } from '../defaultStore';
import * as TYPES from '../types';

const defaultState: RetailerFileInterface = {
  ...INITIAL_RETAILER_FILES_REDUCER
};

const retailerFileReducer = (state: RetailerFileInterface = defaultState, action: AnyAction = { type: 'foo' }) => {
  switch (action.type) {
    case TYPES.INIT:
      return INITIAL_RETAILER_FILES_REDUCER;
    default:
      return {
        ...state
      };
  }
};

export default retailerFileReducer;
