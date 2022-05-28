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
  setBbox,
  setSuperStarDateRange,
  setVerifiedDateRange
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
  const setSuperStarDateRangeMemoized = useMemo(() => (superstarDateRange: string[]) => {
    dispatch(setSuperStarDateRange(superstarDateRange));
  }, [dispatch]);
  const setVerifiedDateRangeMemoized = useMemo(() => (verifiedDateRange: string[]) => {
    dispatch(setVerifiedDateRange(verifiedDateRange));
  }, [dispatch]);
  const setResetMemoized = useMemo(() => () => {
    dispatch(resetValues());
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
    setSuperStarDateRange: setSuperStarDateRangeMemoized,
    setVerifiedDateRange: setVerifiedDateRangeMemoized,
    setCallFilters: setCallFiltersMemoized,
    setMapViewFilter: setMapViewFilterMemoized,
    setBbox: setBboxMemoized,
    resetValues: setResetMemoized
  };
};
