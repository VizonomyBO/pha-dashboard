import { useSelector, useDispatch } from 'react-redux';
import { CategoriesInterface } from '../../@types/redux';
import {
  setCategoriesSelected,
  setAccesibilitiesSelected,
  setBadgesSelected,
  setCenterGeocoder,
  setDataSourcesSelected,
  resetValues,
  setCallFilters
} from '../actions';

export const useCategoriesState = () => useSelector(
  (rootState: { categories: CategoriesInterface }) => rootState.categories
);
export const useCategoriesDispatch = () => {
  const dispatch = useDispatch();
  return {
    setCategoriesSelected: (categoriesSelected: string[]) => {
      dispatch(setCategoriesSelected(categoriesSelected));
    },
    setAccesibilitiesSelected: (accesibilities: string[]) => {
      dispatch(setAccesibilitiesSelected(accesibilities));
    },
    setCenterGeocoder: (center: string[]) => {
      dispatch(setCenterGeocoder(center));
    },
    setDataSourcesSelected: (dataSources: string[]) => {
      dispatch(setDataSourcesSelected(dataSources));
    },
    setBadgesSelected: (badges: string[]) => {
      dispatch(setBadgesSelected(badges));
    },
    setCallFilters: (callFilters: boolean) => {
      dispatch(setCallFilters(callFilters));
    },
    resetValues: () => {
      dispatch(resetValues());
    }
  };
};
