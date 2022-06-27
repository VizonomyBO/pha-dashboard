import { Result } from '@mapbox/mapbox-gl-geocoder';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CategoriesMobile } from '../components/CategoriesMobile';
import { DropdownCategories } from '../components/DropdownCategories';
import { DropdownCategoriesMobile } from '../components/DropdownCategoriesMobile';
import { DropdownGeocoder } from '../components/DropdownGeocoder';
import { useGeocoderDispatch, useGeocoderState } from '../store/hooks';
import { findRegion } from '../utils/findRegion';

export const Landing = () => {
  const { setInputText, setGeocoderOptions } = useGeocoderDispatch();
  const { inputText, options } = useGeocoderState() || {};
  const [openCategories, setOpenCategories] = useState(false);
  const POSTCODE = 'postcode';
  const getLabel = (region: string, isPostCode: boolean, opt: Result) => {
    if (isPostCode) {
      return `Zipcode: ${opt.text}`;
    }
    if (region !== '') {
      return `${opt.text}, ${region}`;
    }
    return opt.text;
  };
  return (
    <div className="container constainer-mobile">
      <div className="bg" />
      <div className="pagecontainer">
        <div className="navbar landing">
          <div className="nbleft">
            <a href="https://www.ahealthieramerica.org/" target="_blank" rel="noopener noreferrer">
              <div className="iclogowhite" />
            </a>
          </div>
          <div className="nbright">
            <div className="sn">
              <Link to="/form" style={{ textDecoration: 'none' }}>
                <div className="txtaction">Add A Listing</div>
              </Link>
              <a href="https://twitter.com/PHAnews" target="_blank" rel="noopener noreferrer">
                <button className="light" type="button">
                  <span className="ictww" />
                </button>
              </a>
              <a href="https://www.facebook.com/PHA" target="_blank" rel="noopener noreferrer">
                <button className="light" type="button">
                  <span className="icfbw" />
                </button>
              </a>
              <a href="https://www.youtube.com/user/aHealthierAmerica" target="_blank" rel="noopener noreferrer">
                <button className="light" type="button">
                  <span className="icytw" />
                </button>
              </a>
              <a href="https://www.instagram.com/PHAnews" target="_blank" rel="noopener noreferrer">
                <button className="light" type="button">
                  <span className="icigw" />
                </button>
              </a>
              <a
                href="https://www.linkedin.com/company/partnership-for-a-healthier-america/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="light" type="button">
                  <span className="icliw" />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="ldgaccesspoint">
          <h1>MISSISSIPPI DELTA GOOD FOOD MAP</h1>
          <p>
            Search over 100+ curated grocery stores, farmers markets, and other locations that have local, good food.
          </p>
        </div>
        <div className="ldgsearchstore">
          <div className="alook">
            <DropdownGeocoder type="landing" />
            <div className="space" />
            <DropdownCategories />
            <DropdownCategoriesMobile
              setOpenCategories={setOpenCategories}
            />
          </div>
        </div>
      </div>
      {options && options.length > 0 && inputText.shouldSearch && (
        <div className="arearesult">
          <div className="tab">
            <div className="space">
              <div className="line" />
            </div>
            <div className="title">
              Where
              <ClearIcon
                style={{ marginLeft: '76%', marginBottom: '-5px', opacity: '0.5' }}
                onClick={() => setGeocoderOptions([])}
              />
            </div>
          </div>
          <div className="searchresult">
            <ul className="ul-geocoder-mobile">
              {inputText.shouldSearch
                && options.map((opt: Result) => {
                  const { region } = findRegion(opt);
                  const isPostCode = opt?.place_type.includes(POSTCODE);
                  return (
                    <li key={`${opt.place_name}index`} className="tr-geocoder">
                      <button
                        className="button-goecoder"
                        type="button"
                        onClick={() => {
                          setInputText({
                            text: isPostCode ? opt.text : opt.place_name,
                            shouldSearch: false,
                            center: opt.center,
                            bbox: opt?.bbox || [],
                            placetype: opt?.place_type || []
                          });
                          setGeocoderOptions([]);
                        }}
                      >
                        <label>
                          <span className="span-geocoder">{getLabel(region, isPostCode, opt)}</span>
                        </label>
                      </button>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      )}
      {openCategories && (
        <CategoriesMobile
          setOpenCategories={setOpenCategories}
        />
      )}
    </div>
  );
};
