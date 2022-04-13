import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MarkerCenterInterface } from '../../@types/database';
import { setCenterMarker } from '../actions';

export const useMarkerState = () => useSelector(
  (rootState: { markerCenter: MarkerCenterInterface }) => rootState.markerCenter
);

export const useMarkerDispatch = () => {
  const dispatch = useDispatch();
  const setCenterMarkerMemoized = useMemo(() => (center: number[]) => {
    dispatch(setCenterMarker(center));
  }, [dispatch]);
  return {
    setCenterMarker: setCenterMarkerMemoized
  };
};
