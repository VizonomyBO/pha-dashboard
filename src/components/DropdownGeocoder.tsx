import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { Result } from '@mapbox/mapbox-gl-geocoder';
import { GEOCODER } from '../constants';
import { useGeocoder } from '../store/hooks/custom/useGeocoder';
import { findRegion } from '../utils/findRegion';

const name = GEOCODER;
export const DropdownGeocoder = ({ type }: { type: string }) => {
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
      <div className={type !== 'home' ? 'swhere' : 'swhere-home'}>
        {type !== 'home' && (
          <>
            <span className="icmappin" />
            <span className="txtd">Where</span>
          </>
        )}

        <input
          ref={geocoderDivRef}
          className="txtd"
          type="text"
          value={inputTextHtml}
          onChange={onChangeInput}
          placeholder="City or Zip Code"
        />
        {type !== 'home' && <span className="iccrosshair" />}
      </div>
      <div className={type !== 'home' ? 'geocoder-block' : 'geocoder-block-home'}>
        {options && options.length > 0 && inputText.shouldSearch && (
          <ul className={type !== 'home' ? 'table-geocoder' : 'table-geocoder-home'}>
            {inputText.shouldSearch
              && options.map((opt: Result) => {
                const { region } = findRegion(opt);
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
                        setInputTextHtml(region === '' ? opt.text : `${opt.text}, ${region}`);
                        setGeocoderOptions([]);
                      }}
                    >
                      <label>
                        <span className="span-geocoder">{region === '' ? opt.text : `${opt.text}, ${region}`}</span>
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
