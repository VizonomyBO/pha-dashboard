import { useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ControllerZoomInterface, GeocoderInterface, InputTextInterface } from '../../@types/database';
import {
  setInputText,
  setGeocoderOptions,
  setShouldZoom,
  setControllerZoom,
  setResetGeocoder
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
  const setResetGeocoderMemoized = useCallback(() => {
    dispatch(setResetGeocoder());
  }, [dispatch]);
  const setInputTextMemoized = useCallback((chart: InputTextInterface) => {
    dispatch(setInputText(chart));
  }, [dispatch]);
  return {
    setInputText: setInputTextMemoized,
    setGeocoderOptions: setGeocoderOptionsMemoized,
    setShouldZoom: setShouldZoomMemoized,
    setControllerZoom: setControllerZoomMemoized,
    setResetGeocoder: setResetGeocoderMemoized
  };
};
