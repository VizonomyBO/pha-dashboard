import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropertiesLayer } from '../../@types';
import { MarkerCenterInterface } from '../../@types/database';
import { setCenterMarker, setResetMarker } from '../actions';

export const useMarkerState = () => useSelector(
  (rootState: { markerCenter: MarkerCenterInterface }) => rootState.markerCenter
);

export const useMarkerDispatch = () => {
  const dispatch = useDispatch();
  const setCenterMarkerMemoized = useMemo(() => (center: number[], click: boolean, elementHovered: PropertiesLayer) => {
    dispatch(setCenterMarker(center, click, elementHovered));
  }, [dispatch]);
  return {
    setCenterMarker: setCenterMarkerMemoized,
    setResetMarker: () => {
      dispatch(setResetMarker());
    }
  };
};
