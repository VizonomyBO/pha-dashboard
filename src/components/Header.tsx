import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { HeaderInterface } from '../@types';
import { DropdownGeocoder } from './DropdownGeocoder';
import { useCategoriesDispatch, useGeocoderDispatch, useGeocoderState } from '../store/hooks';

export const Header = ({ type, setOpenModal, setValueCheckbox }: HeaderInterface) => {
  const { setShouldZoom } = useGeocoderDispatch();
  const { setBbox, setMapViewFilter } = useCategoriesDispatch() || {};
  const { inputText } = useGeocoderState() || {};
  const {
    setCallFilters
  } = useCategoriesDispatch();
  return (
    <div className="searchoptionsarea">
      <div className="accesspoint colored">
        <h1>MISSISSIPPI DELTA GOOD FOOD MAP</h1>
        <p>
          Looking for a nearby grocery store, SNAP retailer, or food-coop? Search our access points using the map below.
        </p>
      </div>
      {type === 'home' && (
        <div className="searcharea colored">
          <div className="alook">
            <button className="accesstype" onClick={() => setOpenModal(true)} type="button">
              Select Access Type
              <KeyboardArrowDownIcon style={{ marginLeft: '40px' }} />
            </button>
            <div className="citysearch">
              <i className="icsearch" />
              <DropdownGeocoder type="home" />
              <button
                className="light"
                type="button"
                onClick={() => {
                  if (inputText && inputText.bbox) {
                    setBbox({
                      xmin: inputText.bbox[1],
                      xmax: inputText.bbox[0],
                      ymin: inputText.bbox[3],
                      ymax: inputText.bbox[2]
                    });
                  }
                  setMapViewFilter(true);
                  setShouldZoom(true);
                  setCallFilters(true);
                  if (setValueCheckbox) {
                    setValueCheckbox(true);
                  }
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
