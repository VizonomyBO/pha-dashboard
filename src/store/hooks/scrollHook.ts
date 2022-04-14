import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollInterface } from '../../@types/redux';
import { setScrollHeight, setScrollWith } from '../actions';

export const useScrollState = () => useSelector(
  (rootState: {modal: ScrollInterface}) => rootState.modal
);

export const useScrollDispatch = () => {
  const dispatch = useDispatch();
  const setScrollWithMemoized = useMemo(() => (withScroll: number) => {
    dispatch(setScrollWith(withScroll));
  }, [dispatch]);
  const setScrollHeightMemoized = useMemo(() => (heightScroll: number) => {
    dispatch(setScrollHeight(heightScroll));
  }, [dispatch]);
  return {
    setScrollWith: setScrollWithMemoized,
    setScrollHeight: setScrollHeightMemoized
  };
};
