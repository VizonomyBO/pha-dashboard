import { SelectChangeEvent } from '@mui/material/Select';
import { useCategoriesDispatch, useCategoriesState } from '../categoriesHook';

export const useDropdownCategories = () => {
  const { categoriesSelected } = useCategoriesState();
  const { setCategoriesSelected } = useCategoriesDispatch();
  const handleChange = (event: SelectChangeEvent<typeof categoriesSelected>) => {
    const {
      target: { value }
    } = event;
    setCategoriesSelected(typeof value === 'string' ? value.split(',') : value);
  };
  return {
    categoriesSelected,
    handleChange
  };
};
