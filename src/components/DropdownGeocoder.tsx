import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { Result } from '@mapbox/mapbox-gl-geocoder';
import { useEffect, useRef, useState } from 'react';
import { useGeocoderDispatch, useGeocoderState } from '../store/hooks';
import { GeocoderService } from '../services/geocoderService';
import { GEOCODER, REGION, REGION_GEOCODER } from '../constants';

const name = GEOCODER;
export const DropdownGeocoder = ({ type }: { type: string }) => {
  const geocoderDivRef = useRef<HTMLInputElement>(null);
  const { setInputText, setGeocoderOptions } = useGeocoderDispatch();
  const { inputText, options } = useGeocoderState() || {};
  const [selected, setSelectedValue] = useState();
  const [inputTextHtml, setInputTextHtml] = useState('');
  const geocoder = useRef<GeocoderService>(
    new GeocoderService(name, setGeocoderOptions, geocoderDivRef.current as HTMLElement, setSelectedValue)
  );
  useEffect(() => {
    console.log('this is selected', selected);
  }, [selected]);
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
          onChange={inputTextFunction}
          placeholder="City or Zip Code"
        />
        {type !== 'home' && <span className="iccrosshair" />}
      </div>
      <div className={type !== 'home' ? 'geocoder-block' : 'geocoder-block-home'}>
        {options && options.length > 0 && inputText.shouldSearch && (
          <ul className={type !== 'home' ? 'table-geocoder' : 'table-geocoder-home'}>
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
