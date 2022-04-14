import { useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ControllerZoomInterface, GeocoderInterface, InputTextInterface } from '../../@types/database';
import {
  setInputText,
  setGeocoderOptions,
  setShouldZoom,
  setControllerZoom
} from '../actions';

export const useGeocoderState = () => useSelector(
  (rootState: {geocoder: GeocoderInterface}) => rootState.geocoder
);

export const useGeocoderDispatch = () => {
  const dispatch = useDispatch();
  const setGeocoderOptionsMemoized = useMemo(() => (options: []) => {
    dispatch(setGeocoderOptions(options));
  }, [dispatch]);
  const setShouldZoomMemoized = useCallback((shouldZoom: boolean) => {
    dispatch(setShouldZoom(shouldZoom));
  }, [dispatch]);
  const setControllerZoomMemoized = useCallback((controllerZoom: ControllerZoomInterface) => {
    dispatch(setControllerZoom(controllerZoom));
  }, [dispatch]);
  return {
    setInputText: (chart: InputTextInterface) => {
      dispatch(setInputText(chart));
    },
    setGeocoderOptions: setGeocoderOptionsMemoized,
    setShouldZoom: setShouldZoomMemoized,
    setControllerZoom: setControllerZoomMemoized
  };
};
