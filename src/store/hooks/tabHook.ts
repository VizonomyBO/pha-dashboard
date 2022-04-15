import { useSelector, useDispatch } from 'react-redux';
import { FormTabType } from '../../@types';
import { TabStateInterface } from '../../@types/redux';
import { setActiveTab } from '../actions';

export const useTabState = () => useSelector(
  (rootState: {tab: TabStateInterface}) => rootState.tab
);

export const useTabDispatch = () => {
  const dispatch = useDispatch();
  return {
    setActiveTab: (activeTab: FormTabType) => {
      dispatch(setActiveTab(activeTab));
    }
  };
};
