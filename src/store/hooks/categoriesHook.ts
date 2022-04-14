import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BBOXInterface, CategoriesInterface } from '../../@types/redux';
import {
  setCategoriesSelected,
  setAccesibilitiesSelected,
  setBadgesSelected,
  setCenterGeocoder,
  setDataSourcesSelected,
  resetValues,
  setCallFilters,
  setMapViewFilter,
  setBbox
} from '../actions';

export const useCategoriesState = () => useSelector(
  (rootState: { categories: CategoriesInterface }) => rootState.categories
);
export const useCategoriesDispatch = () => {
  const dispatch = useDispatch();
  const setCallFiltersMemoized = useMemo(() => (callFilters: boolean) => {
    dispatch(setCallFilters(callFilters));
  }, [dispatch]);
  const setMapViewFilterMemoized = useMemo(() => (mapViewFilter: boolean) => {
    dispatch(setMapViewFilter(mapViewFilter));
  }, [dispatch]);
  const setBboxMemoized = useMemo(() => (bbox: BBOXInterface) => {
    dispatch(setBbox(bbox));
  }, [dispatch]);
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
    setCallFilters: setCallFiltersMemoized,
    setMapViewFilter: setMapViewFilterMemoized,
    setBbox: setBboxMemoized,
    resetValues: () => {
      dispatch(resetValues());
    }
  };
};
