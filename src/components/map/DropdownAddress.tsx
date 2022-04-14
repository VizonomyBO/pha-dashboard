import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { Result } from '@mapbox/mapbox-gl-geocoder';
import { useMarketplaceDispatch } from '../../store/hooks';
import {
  GEOCODER_ADDRESS,
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
    onChangeInput
  } = useGeocoder(name);

  const { setBusinessDetails } = useMarketplaceDispatch();
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
        />
      </div>
      <div className="geocoder-block">
        {options && inputText && options.length > 0 && inputText.shouldSearch && (
          <ul className="ul-address">
            {inputText.shouldSearch
              && options.map((opt: Result) => {
                const { region, regionShortcode } = findRegion(opt);
                return (
                  <li key={`${opt.place_name}index${type}`} className="tr-geocoder">
                    <button
                      className="button-goecoder"
                      type="button"
                      onClick={() => {
                        console.log(opt);
                        setInputText({
                          text: opt.place_name,
                          shouldSearch: false,
                          center: opt.center,
                          bbox: opt?.bbox || []
                        });
                        setInputTextHtml(regionShortcode === '' ? opt.text : `${opt.text}, ${regionShortcode}`);
                        setGeocoderOptions([]);
                        setBusinessDetails(TYPE_BUSINESS.LONGITUDE, opt.center[0]);
                        setBusinessDetails(TYPE_BUSINESS.LONGITUDE, opt.center[1]);
                        setBusinessDetails(type, regionShortcode === '' ? opt.text : `${opt.text}, ${regionShortcode}`);
                        if (opt.place_type.includes('poi')) {
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
                          {regionShortcode === '' ? opt.text : `${opt.text}, ${regionShortcode}`}
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
