import ClearIcon from '@mui/icons-material/Clear';
import { CATEGORIES } from '../constants/categories';
import { FilterType } from '../@types';
import { useDropdownCategoriesMobile } from '../store/hooks/custom/useDropdownCategoriesMobile';

export const DropdownCategoriesMobile = (
  { setOpenCategories }:{setOpenCategories:React.Dispatch<React.SetStateAction<boolean>>}
) => {
  const {
    categoriesSelect,
  } = useDropdownCategoriesMobile();
  return (
    <div className="arearesult">
      <div className="tab">
        <div className="space">
          <div className="line" />
        </div>
        <div className="title">
          What
          <ClearIcon
            style={{ marginLeft: '250px' }}
            onClick={() => setOpenCategories(false)}
          />
        </div>
      </div>
      <div className="searchresult" style={{ height: '357px' }}>
        <ul className="ul-geocoder-mobile">
          {CATEGORIES.map((category: FilterType) => (
            <li key={`${category.name}index`} className="tr-categories">
              <label className="chkwrap-mobile">
                <span className="span-geocoder">{category.name}</span>
                <input
                  type="checkbox"
                  className="checkbox-mobile"
                  onChange={(e:React.ChangeEvent<HTMLInputElement>) => categoriesSelect(e, category)}
                />
                <span className="checkmark-mobile ckeckmark-form" />
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
