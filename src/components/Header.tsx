import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { HeaderInterface } from '../@types';
import { DropdownGeocoder } from './DropdownGeocoder';

export const Header = ({ type, setOpenModal }: HeaderInterface) => (
  <div className="searchoptionsarea form1">
    <div className="accesspoint colored">
      <h1>GOOD FOOD MAP</h1>
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
            <button className="light" type="button">
              Search
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
);
