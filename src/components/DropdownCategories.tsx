import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { useDropdownCategories } from '../store/hooks/custom/useDropdownCategories';
import { CATEGORIES } from '../constants/categories';

export const DropdownCategories = () => {
  const { categoriesSelected, handleChange, goToMapView } = useDropdownCategories();

  return (
    <div className="citysearch">
      <i className="icsearch" />
      <span className="txtd">What</span>
      <Select
        className="dropdown-categories-select"
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
          return selected[0];
        }}
      >
        {CATEGORIES.map((name: string) => (
          <MenuItem key={name} value={name} className="dropdown-categories">
            <ListItemText primary={name} className="item-categories" />
            <Checkbox className="checkbox-categories" checked={categoriesSelected.indexOf(name) > -1} />
          </MenuItem>
        ))}
      </Select>
      <button className="light" type="button" onClick={() => goToMapView()}>
        Search
      </button>
    </div>
  );
};
