import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollInterface } from '../../@types/redux';
import { setScrollHeight, setScrollWidth } from '../actions';

export const useScrollState = () => useSelector(
  (rootState: {scroll: ScrollInterface}) => rootState.scroll || {
    widthScroll: 0,
    heightScroll: 0
  }
);

export const useScrollDispatch = () => {
  const dispatch = useDispatch();
  const setScrollWidthMemoized = useMemo(() => (widthScroll: number) => {
    dispatch(setScrollWidth(widthScroll));
  }, [dispatch]);
  const setScrollHeightMemoized = useMemo(() => (heightScroll: number) => {
    dispatch(setScrollHeight(heightScroll));
  }, [dispatch]);
  return {
    setScrollWidth: setScrollWidthMemoized,
    setScrollHeight: setScrollHeightMemoized
  };
};
