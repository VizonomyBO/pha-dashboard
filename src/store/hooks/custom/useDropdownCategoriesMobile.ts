import { useCategoriesDispatch, useCategoriesState } from '../categoriesHook';
import { FilterType } from '../../../@types';

export const useDropdownCategoriesMobile = () => {
  const { setCenterGeocoder } = useCategoriesDispatch();
  const { categoriesSelected } = useCategoriesState();
  const categoriesSelect = (e:React.ChangeEvent<HTMLInputElement>, category:FilterType) => {
    const categoties: string[] = categoriesSelected;
    if (e.target.checked) {
      categoties.push(category.attrib);
      setCenterGeocoder(categoties);
    } else {
      const categoriesDeled = categoties.filter((element: string) => (
        element !== category.attrib
      ));
      setCenterGeocoder(categoriesDeled);
    }
  };
  return {
    categoriesSelected,
    categoriesSelect,
    setCenterGeocoder
  };
};
