import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { Result } from '@mapbox/mapbox-gl-geocoder';
import { useEffect, useRef, useState } from 'react';
import { useGeocoderDispatch, useGeocoderState } from '../store/hooks';
import { GeocoderService } from '../services/geocoderService';
import { GEOCODER_MOBILE, REGION, REGION_GEOCODER } from '../constants';

const name = GEOCODER_MOBILE;
export const DropdownGeocoderMobile = () => {
  const geocoderDivRef = useRef<HTMLInputElement>(null);
  const { setInputText, setGeocoderOptions } = useGeocoderDispatch();
  const { inputText, options } = useGeocoderState() || {};
  const [inputTextHtml, setInputTextHtml] = useState('');
  const geocoder = useRef<GeocoderService>(
    new GeocoderService(name, setGeocoderOptions, geocoderDivRef.current as HTMLElement)
  );
  useEffect(() => {
    geocoder.current.geocoder.addTo(geocoderDivRef.current as HTMLElement);
    if (inputText && inputText.text) {
      geocoder.current.setGeocoderQuery(inputText.text);
    }
    setGeocoderOptions([]);
  }, [geocoder, inputText, setGeocoderOptions]);
  const inputTextFunction = (e: React.FormEvent<HTMLInputElement>): void => {
    setInputText({
      text: e.currentTarget.value,
      shouldSearch: true
    });
    setInputTextHtml(e.currentTarget.value);
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
            onChange={inputTextFunction}
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
                let region = '';
                if (opt.context) {
                  for (let i = 0; opt.context && i < opt.context.length; i += 1) {
                    if (opt.context[i].id.includes(REGION)) {
                      region = opt.context[i].short_code.replace(REGION_GEOCODER, '');
                    }
                  }
                }
                return (
                  <li key={`${opt.place_name}index`} className="tr-geocoder">
                    <button
                      className="button-goecoder"
                      type="button"
                      onClick={() => {
                        setInputText({
                          text: opt.place_name,
                          shouldSearch: false
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
