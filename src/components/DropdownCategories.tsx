import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { useDropdownCategories } from '../store/hooks/custom/useDropdownCategories';
import { categories } from '../constants/categories';

export const DropdownCategories = () => {
  const {
    categoriesSelected,
    handleChange
  } = useDropdownCategories();
  return (
    <div className="citysearch">
      <i className="icsearch" />
      <span className="txtd">What</span>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        displayEmpty
        value={categoriesSelected}
        onChange={handleChange}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <em>Select Category</em>;
          }
          if (selected.length > 1) {
            return 'Multiple retailer types…';
          }
          return selected[0];
        }}
      >
        {categories.map((name) => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={categoriesSelected.indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
      <button className="light" type="button">
        Search
      </button>
    </div>
  );
};
