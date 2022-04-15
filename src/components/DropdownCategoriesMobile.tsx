import { FilterType } from '../@types';
import { CATEGORIES } from '../constants/categories';
import { useDropdownCategories } from '../store/hooks/custom/useDropdownCategories';

export const DropdownCategoriesMobile = (
  { setOpenCategories }
  : {setOpenCategories:React.Dispatch<React.SetStateAction<boolean>>}
) => {
  const { categoriesSelected, goToMapView, setCategoriesSelected } = useDropdownCategories();
  const selected = () => {
    if (categoriesSelected) {
      if (categoriesSelected.length === 0) {
        return <em>Select Category</em>;
      }
      if (categoriesSelected.length > 1) {
        return 'Multiple retailer types…';
      }
      return CATEGORIES.find((elem: FilterType) => elem.attrib === categoriesSelected[0])?.name;
    }
    return <em>Select Category</em>;
  };
  return (
    <div className="smcitysearch">
      <i className="icsearch" />
      <span className="txtd">What</span>
      <button
        type="button"
        className="btm-catalogories"
        onClick={() => {
          setOpenCategories(true);
          setCategoriesSelected([]);
        }}
      >
        {selected()}
      </button>
      <button
        type="button"
        className="light"
        onClick={() => goToMapView()}
      >
        Search
      </button>
    </div>
  );
};
