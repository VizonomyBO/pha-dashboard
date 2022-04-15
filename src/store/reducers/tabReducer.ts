import { AnyAction } from 'redux';
import { FormTabType } from '../../@types';
import { TabStateInterface } from '../../@types/redux';
import { BUSINESS_DETAILS } from '../../constants';
import * as TYPES from '../types';

const tabReducer = (state: TabStateInterface = {
  activeTab: BUSINESS_DETAILS as FormTabType
}, action: AnyAction = { type: 'foo' }) => {
  switch (action?.type) {
    case TYPES.SET_ACTIVE_TAB:
      return {
        ...state,
        sessionState: action.payload
      };
    default:
      return {
        ...state
      };
  }
};

export default tabReducer;
