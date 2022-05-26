import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import classNames from 'classnames';
import { Result } from '@mapbox/mapbox-gl-geocoder';
import { useMarketplaceDispatch } from '../../store/hooks';
import {
  GEOCODER_ADDRESS,
  POINTS_OF_INTEREST,
  TYPE_BUSINESS
} from '../../constants';
import { useGeocoder } from '../../store/hooks/custom/useGeocoder';
import { findRegion } from '../../utils/findRegion';
import { getAddressFields } from '../../utils/getAddressFields';

const name = GEOCODER_ADDRESS;
export const DropdownAddress = ({ type }: { type: string }) => {
  const {
    setInputText,
    setInputTextHtml,
    geocoderDivRef,
    inputText,
    inputTextHtml,
    options,
    setGeocoderOptions,
    onChangeInput,
    position,
    keyDown
  } = useGeocoder(name, type);

  const { setBusinessDetails } = useMarketplaceDispatch();
  const trClassNames = (index: number) => (
    classNames({ 'tr-geocoder-active': position === index, 'tr-geocoder': position === index })
  );
  return (
    <>
      <div className="ainput">
        <input
          id={`${type}uploader`}
          ref={geocoderDivRef}
          className="input-address"
          type="text"
          value={inputTextHtml}
          onChange={onChangeInput}
          onKeyDown={keyDown}
        />
      </div>
      <div className="geocoder-block">
        {options && inputText && options.length > 0 && inputText.shouldSearch && (
          <ul className="ul-address">
            {inputText.shouldSearch
              && options.map((opt: Result, index: number) => {
                const { region } = findRegion(opt);
                return (
                  <li
                    key={`${opt.place_name}index${type}`}
                    className={trClassNames(index)}
                  >
                    <button
                      className="button-goecoder"
                      type="button"
                      onClick={() => {
                        setInputText({
                          text: opt.place_name,
                          shouldSearch: false,
                          center: opt.center,
                          bbox: opt?.bbox || [],
                          placetype: opt?.place_type || []
                        });
                        setInputTextHtml(opt.place_name);
                        setGeocoderOptions([]);
                        setBusinessDetails(TYPE_BUSINESS.LONGITUDE, opt.center[0]);
                        setBusinessDetails(TYPE_BUSINESS.LATITUDE, opt.center[1]);
                        setBusinessDetails(type, opt.place_name);
                        if (opt.place_type.includes(POINTS_OF_INTEREST)) {
                          const { zipcode, city, state } = getAddressFields(opt.place_name);
                          setBusinessDetails(TYPE_BUSINESS.CITY, city);
                          setBusinessDetails(TYPE_BUSINESS.STATE, state);
                          setBusinessDetails(TYPE_BUSINESS.ZIPCODE, zipcode);
                        } else {
                          setBusinessDetails(TYPE_BUSINESS.CITY, '');
                          setBusinessDetails(TYPE_BUSINESS.ZIPCODE, '');
                          setBusinessDetails(TYPE_BUSINESS.STATE, region);
                        }
                      }}
                    >
                      <label>
                        <span className="span-geocoder">
                          {opt.place_name}
                        </span>
                      </label>
                    </button>
                  </li>
                );
              })}
          </ul>
        )}
      </div>
    </>
  );
};
