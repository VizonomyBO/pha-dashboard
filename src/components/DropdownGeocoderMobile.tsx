import { Result } from '@mapbox/mapbox-gl-geocoder';
import { GEOCODER_MOBILE } from '../constants';
import { useGeocoder } from '../store/hooks/custom/useGeocoder';
import { findRegion } from '../utils/findRegion';

const name = GEOCODER_MOBILE;
export const DropdownGeocoderMobile = () => {
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

  return (
    <>
      <div className="alook">
        <div className="citysearch">
          <i className="icsearch" />
          <input
            ref={geocoderDivRef}
            className="txtd"
            type="text"
            value={inputTextHtml}
            onChange={onChangeInput}
            placeholder="City or Zip Code"
          />
          <button type="button" className="light">Search</button>
        </div>
      </div>
      <div className="geocoder-block">
        {options && options.length > 0 && inputText.shouldSearch && (
          <ul className="table-geocoder-mobile">
            {inputText.shouldSearch
              && options.map((opt: Result) => {
                let { region } = findRegion(opt);
                region = region === '' ? opt.text : `${opt.text}, ${region}`;
                return (
                  <li key={`${opt.place_name}index`} className="tr-geocoder">
                    <button
                      className="button-goecoder"
                      type="button"
                      onClick={() => {
                        setInputText({
                          text: opt.place_name,
                          shouldSearch: false,
                          center: opt.center,
                          bbox: opt?.bbox || []
                        });
                        setInputTextHtml(region);
                        setGeocoderOptions([]);
                      }}
                    >
                      <label>
                        <span className="span-geocoder">{region}</span>
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
