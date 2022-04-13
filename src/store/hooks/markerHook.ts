import { useDispatch, useSelector } from 'react-redux';
import { MarkerCenterInterface } from '../../@types/database';
import { setCenterMarker } from '../actions';

export const useMarkerState = () => useSelector(
  (rootState: { markerCenter: MarkerCenterInterface }) => rootState.markerCenter
);

export const useMarkerDispatch = () => {
  const dispatch = useDispatch();
  return {
    setCenterMarker: (center: number[]) => {
      dispatch(setCenterMarker(center));
    }
  };
};
