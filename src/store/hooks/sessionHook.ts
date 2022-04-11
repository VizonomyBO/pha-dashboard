import { useSelector, useDispatch } from 'react-redux';
import { SessionInterface } from '../../@types/redux';
import { setSessionState } from '../actions';

export const useSessionState = () => useSelector(
  (rootState: { session: SessionInterface }) => rootState.session
);

export const useSessionDispatch = () => {
  const dispatch = useDispatch();
  return {
    setSessionState: (value: boolean) => {
      dispatch(setSessionState(value));
    },
  };
};
