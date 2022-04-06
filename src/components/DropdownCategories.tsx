import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { useDropdownCategories } from '../store/hooks/custom/useDropdownCategories';
import { CATEGORIES } from '../constants/categories';
import { FilterType } from '../@types';

export const DropdownCategories = () => {
  const { categoriesSelected, handleChange, goToMapView } = useDropdownCategories();

  return (
    <div className="citysearch">
      <i className="icsearch" />
      <span className="txtd">What</span>
      <Select
        multiple
        displayEmpty
        value={categoriesSelected}
        onChange={handleChange}
        renderValue={(selected: string[]) => {
          if (selected.length === 0) {
            return <em>Select Category</em>;
          }
          if (selected.length > 1) {
            return 'Multiple retailer types…';
          }
          return CATEGORIES.find((elem: FilterType) => elem.attrib === selected[0])?.name;
        }}
      >
        {CATEGORIES.map((category: FilterType) => (
          <MenuItem key={category.name} value={category.attrib}>
            <Checkbox checked={categoriesSelected.indexOf(category.attrib) > -1} />
            <ListItemText primary={category.name} />
          </MenuItem>
        ))}
      </Select>
      <button className="light" type="button" onClick={() => goToMapView()}>
        Search
      </button>
    </div>
  );
};
