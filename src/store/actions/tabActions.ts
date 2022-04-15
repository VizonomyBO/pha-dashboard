import { FormTabType } from '../../@types';
import * as TYPES from '../types';

export const setActiveTab = (activeTab: FormTabType) => ({
  type: TYPES.SET_ACTIVE_TAB,
  value: activeTab
});
