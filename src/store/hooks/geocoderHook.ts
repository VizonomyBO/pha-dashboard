import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GeocoderInterface, InputTextInterface } from '../../@types/database';
import { setInputText, setGeocoderOptions, setShouldZoom } from '../actions';

export const useGeocoderState = () => useSelector(
  (rootState: {geocoder: GeocoderInterface}) => rootState.geocoder
);

export const useGeocoderDispatch = () => {
  const dispatch = useDispatch();
  const setGeocoderOptionsMemoized = useMemo(() => (options: []) => {
    dispatch(setGeocoderOptions(options));
  }, [dispatch]);
  return {
    setInputText: (chart: InputTextInterface) => {
      dispatch(setInputText(chart));
    },
    setGeocoderOptions: setGeocoderOptionsMemoized,
    setShouldZoom: (shouldZoom: boolean) => {
      dispatch(setShouldZoom(shouldZoom));
    }
  };
};
