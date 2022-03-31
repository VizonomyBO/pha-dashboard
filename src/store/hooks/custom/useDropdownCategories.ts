import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';

export const useDropdownCategories = () => {
  const [categoriesSelected, setCategoriesSelected] = useState<string[]>([]);
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
