import { useSelector, useDispatch } from 'react-redux';
import { GeocoderInterface, InputTextInterface } from '../../@types/database';
import { setInputText, setGeocoderOptions } from '../actions';

export const useGeocoderState = () => useSelector(
  (rootState: {geocoder: GeocoderInterface}) => rootState.geocoder
);

export const useGeocoderDispatch = () => {
  const dispatch = useDispatch();
  return {
    setInputText: (chart: InputTextInterface) => {
      dispatch(setInputText(chart));
    },
    setGeocoderOptions: (options: []) => {
      dispatch(setGeocoderOptions(options));
    }
  };
};
