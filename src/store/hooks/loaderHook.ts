import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loaderInterface } from '../../@types/redux';
import { setLoaderState } from '../actions/loaderActions';

export const useLoaderState = () => useSelector(
  (rootState: {loaderState: loaderInterface}) => rootState.loaderState || {
    isLoading: false
  }
);

export const useLoaderDispatch = () => {
  const dispatch = useDispatch();
  const setLoaderStateMemoized = useCallback((isLoading: boolean) => {
    dispatch(setLoaderState(isLoading));
  }, [dispatch]);
  return {
    setLoaderState: setLoaderStateMemoized
  };
};
