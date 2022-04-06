import { HeaderInterface } from '../@types';

export const Header = ({ type, setOpenModal }: HeaderInterface) => (
  <div className="searchoptionsarea form1">
    <div className="accesspoint colored">
      <h1>GOOD FOOD MAP</h1>
      <p>
        Looking for a nearby grocery store, SNAP retailer, or food-coop?
        Search our access points using the map below.
      </p>
    </div>
    {type === 'home' && (
      <div className="searcharea colored">
        <div className="alook">
          <button className="accesstype" onClick={() => setOpenModal(true)} type="button">
            Select Access Type
          </button>
          <div className="citysearch">
            <i className="icsearch" />
            <input type="text" name="" id="" placeholder="City or Zip Code" />
            <button className="light" type="button">
              Search
            </button>

          </div>
        </div>
      </div>
    ) }
  </div>
);
