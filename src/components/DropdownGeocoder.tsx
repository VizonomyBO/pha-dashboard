import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { Result } from '@mapbox/mapbox-gl-geocoder';
import { useEffect, useRef, useState } from 'react';
import { useGeocoderDispatch, useGeocoderState } from '../store/hooks';
import { GeocoderService } from '../services/geocoderService';

const name = 'geocoder';
export const DropdownGeocoder = () => {
  const geocoderDivRef = useRef<HTMLInputElement>(null);
  const { setInputText, setGeocoderOptions } = useGeocoderDispatch();
  const { inputText, options } = useGeocoderState();
  const [inputTextHtm, setInputTextHtml] = useState('');
  const [geocoder, setGeocoder] = useState<GeocoderService>();
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
  return (
    <>
      <div className="swhere">
        <span className="icmappin" />
        <span className="txtd">Where</span>
        {/* <div ref={geocoderDivRef} id="geocoder" /> */}
        <input
          ref={geocoderDivRef}
          className="txtd"
          type="text"
          value={inputTextHtm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInputText({
              text: e.target.value,
              shouldSearch: true
            });
            setInputTextHtml(e.target.value);
          }}
          placeholder="City or Zip Code"
        />
        <span className="iccrosshair" />
      </div>
      <div
        style={{
          display: 'block',
          position: 'absolute',
          maxWidth: 313
        }}
      >
        {inputText.shouldSearch && (
          <ul className="tableGeocoder">
            {
              inputText.shouldSearch && options.map((opt: Result) => {
                let region = '';
                if (opt.context) {
                  for (let i = 0; opt.context && i < opt.context.length; i += 1) {
                    if (opt.context[i].id.includes('region')) {
                      region = opt.context[i].short_code.replace('US-', '');
                    }
                  }
                }
                return (
                  <li key={`${opt.place_name}index`} className="trGeocoder">
                    <button
                      className="buttonGoecoder"
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
                        <span className="spanGeocoder">{region === '' ? opt.text : `${opt.text}, ${region}`}</span>
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
