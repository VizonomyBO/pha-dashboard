import { Result } from '@mapbox/mapbox-gl-geocoder';
import { GEOCODER_MOBILE } from '../constants';
import { useGeocoder } from '../store/hooks/custom/useGeocoder';
import { findRegion } from '../utils/findRegion';
import { useCategoriesDispatch, useGeocoderDispatch } from '../store/hooks';

const name = GEOCODER_MOBILE;
export const DropdownGeocoderMobile = () => {
  const POSTCODE = 'postcode';
  const {
    setInputText,
    setInputTextHtml,
    geocoderDivRef,
    inputText,
    inputTextHtml,
    options,
    setGeocoderOptions,
    onChangeInput,
    onChangeInputRemove,
    keyDown
  } = useGeocoder(name, 'none');
  const { setShouldZoom } = useGeocoderDispatch();
  const { setBbox, setMapViewFilter } = useCategoriesDispatch() || {};
  const {
    setCallFilters
  } = useCategoriesDispatch();
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
            onKeyDown={keyDown}
          />
          <button
            type="button"
            className="light"
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
              onChangeInputRemove();
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="geocoder-block">
        {options && options.length > 0 && inputText.shouldSearch && (
          <ul className="table-geocoder-mobile">
            {inputText.shouldSearch
              && options.map((opt: Result) => {
                let { region } = findRegion(opt);
                const isPostCode = opt?.place_type.includes(POSTCODE);
                region = getLabel(region, isPostCode, opt);
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
                        setInputTextHtml(region === '' ? opt.text : `${opt.text}, ${region}`);
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
