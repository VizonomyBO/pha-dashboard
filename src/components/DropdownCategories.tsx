import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { useDropdownCategories } from '../store/hooks/custom/useDropdownCategories';
import { useCategoriesDispatch, useGeocoderDispatch, useGeocoderState } from '../store/hooks';
import { CATEGORIES } from '../constants/categories';
import { FilterType } from '../@types';

export const DropdownCategories = () => {
  const { categoriesSelected, handleChange, goToMapView } = useDropdownCategories();
  const { setShouldZoom } = useGeocoderDispatch();
  const { setBbox } = useCategoriesDispatch() || {};
  const { inputText } = useGeocoderState() || {};
  return (
    <div className="citysearch">
      <i className="icsearch" />
      <span className="txtd">What</span>
      <Select
        className="dropdown-categories-select"
        multiple
        displayEmpty
        value={categoriesSelected || []}
        onChange={handleChange}
        renderValue={(selected: string[] | undefined) => {
          if (selected) {
            if (selected.length === 0) {
              return <em>Select Category</em>;
            }
            if (selected.length > 1) {
              return 'Multiple retailer types…';
            }
            return CATEGORIES.find((elem: FilterType) => elem.attrib === selected[0])?.name;
          }
          return <em>Select Category</em>;
        }}
      >
        {CATEGORIES.map((category: FilterType) => (
          <MenuItem key={category.name} value={category.attrib} className="dropdown-categories">
            <ListItemText primary={category.name} className="item-categories" />
            <Checkbox
              checked={
              categoriesSelected && categoriesSelected.indexOf(category.attrib) > -1
              }
              className="checkbox-categories"
            />
          </MenuItem>
        ))}
      </Select>
      <button
        className="light"
        type="button"
        onClick={() => {
          goToMapView();
          if (inputText && inputText.bbox) {
            setBbox({
              xmin: inputText.bbox[1],
              xmax: inputText.bbox[0],
              ymin: inputText.bbox[3],
              ymax: inputText.bbox[2]
            });
            setTimeout(() => {
              setShouldZoom(true);
            }, 200);
          }
        }}
      >
        Search
      </button>
    </div>
  );
};
