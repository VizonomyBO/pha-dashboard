// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import { DropdowInterface } from '../@types';
import { useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

export const DropdownCategories = () => {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250
      }
    }
  };
  const categories = [
    'Corner/convenience store',
    'Distribution location',
    'Dollar stores',
    'Farmers markets',
    'Food pantry',
    'Food co-op',
    'Grocery Store',
    'General Store',
    'Supermarket/big box retailer'
  ];
  const [categoriesSelected, setCategoriesSelected] = useState<string[]>([]);
  const handleChange = (event: SelectChangeEvent<typeof categoriesSelected>) => {
    const {
      target: { value }
    } = event;
    setCategoriesSelected(typeof value === 'string' ? value.split(',') : value);
  };
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
          console.log('SE,', selected);
          if (selected.length === 0) {
            return <em>Select Category</em>;
          }
          if (selected.length > 1) {
            return 'Multiple retailer types…';
          }
          return selected[0];
        }}
        MenuProps={MenuProps}
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
