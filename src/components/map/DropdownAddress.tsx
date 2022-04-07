import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { Result } from '@mapbox/mapbox-gl-geocoder';
import { useEffect, useRef, useState } from 'react';
import { useGeocoderDispatch, useGeocoderState, useMarketplaceDispatch } from '../../store/hooks';
import { GeocoderService } from '../../services/geocoderService';
import { REGION, REGION_GEOCODER, TYPE_BUSINESS } from '../../constants';

const name = 'geocoder';
export const DropdownAddress = ({ type } : {type:string}) => {
  const geocoderDivRef = useRef<HTMLInputElement>(null);
  const { setInputText, setGeocoderOptions } = useGeocoderDispatch();
  const { inputText, options } = useGeocoderState();
  const [inputTextHtml, setInputTextHtml] = useState('');
  const [geocoder, setGeocoder] = useState<GeocoderService>();
  const { setBusinessDetails } = useMarketplaceDispatch();
  useEffect(() => {
    setGeocoder(new GeocoderService(name, setGeocoderOptions, geocoderDivRef.current as HTMLElement));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (inputText.shouldSearch) {
      geocoder?.setGeocoderInputText(inputText);
    } else {
      if (inputText.text) {
        geocoder?.setGeocoderQuery(inputText.text);
      }
      setGeocoderOptions([]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputText]);
  const inputTextFunction = (e: React.FormEvent<HTMLInputElement>): void => {
    setInputText({
      text: e.currentTarget.value,
      shouldSearch: true
    });
    setInputTextHtml(e.currentTarget.value);
  };
  return (
    <>
      <div className="ainput">
        <input
          id={`${type}uploader`}
          ref={geocoderDivRef}
          className="input-address"
          type="text"
          value={inputTextHtml}
          onChange={inputTextFunction}
        />
      </div>
      <div className="geocoder-block">
        {options.length > 0 && inputText.shouldSearch && (
          <ul className="ul-address">
            {
              inputText.shouldSearch && options.map((opt: Result) => {
                let region = '';
                let regionShortcode = '';
                if (opt.context) {
                  for (let i = 0; opt.context && i < opt.context.length; i += 1) {
                    if (opt.context[i].id.includes(REGION)) {
                      regionShortcode = opt.context[i].short_code.replace(REGION_GEOCODER, '');
                      region = opt.context[i].text;
                    }
                  }
                }
                return (
                  <li key={`${opt.place_name}index${type}`} className="tr-geocoder">
                    <button
                      className="button-goecoder"
                      type="button"
                      onClick={() => {
                        setInputText({
                          text: opt.place_name,
                          shouldSearch: false
                        });
                        setInputTextHtml(regionShortcode === '' ? opt.text : `${opt.text}, ${regionShortcode}`);
                        setGeocoderOptions([]);
                        setBusinessDetails(TYPE_BUSINESS.STATE, region);
                        setBusinessDetails(TYPE_BUSINESS.LONGITUDE, opt.center[0]);
                        setBusinessDetails(TYPE_BUSINESS.LONGITUDE, opt.center[1]);
                        setBusinessDetails(type, regionShortcode === '' ? opt.text : `${opt.text}, ${regionShortcode}`);
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
              })
            }
          </ul>
        )}
      </div>
    </>
  );
};
