import { useSelector, useDispatch } from 'react-redux';
import { CategoriesInterface } from '../../@types/redux';
import {
  setCategoriesSelected
} from '../actions';

export const useCategoriesState = () => useSelector(
  (rootState: { categories: CategoriesInterface }) => rootState.categories
);
export const useCategoriesDispatch = () => {
  const dispatch = useDispatch();
  return {
    setCategoriesSelected: (categoriesSelected: string[]) => {
      dispatch(setCategoriesSelected(categoriesSelected));
    }
  };
};
