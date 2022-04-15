import { useNavigate } from 'react-router-dom';
import { SelectChangeEvent } from '@mui/material/Select';
import { useCategoriesDispatch, useCategoriesState } from '../categoriesHook';

export const useDropdownCategories = () => {
  const { categoriesSelected } = useCategoriesState();
  const { setCategoriesSelected, setCenterGeocoder } = useCategoriesDispatch();
  const navigate = useNavigate();
  const handleChange = (event: SelectChangeEvent<typeof categoriesSelected>) => {
    const {
      target: { value }
    } = event;
    setCategoriesSelected(typeof value === 'string' ? value.split(',') : value);
  };
  const goToMapView = () => {
    const path = 'home';
    navigate(path);
  };
  return {
    categoriesSelected,
    handleChange,
    goToMapView,
    setCenterGeocoder,
    setCategoriesSelected
  };
};
