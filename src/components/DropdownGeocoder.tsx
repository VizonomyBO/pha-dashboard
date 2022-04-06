import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
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
              inputText.shouldSearch && options.map((opt: any) => {
                let region = '';
                if (opt.context) {
                  opt.context.forEach((element: any) => {
                    if (element.id.includes('region')) {
                      region = element.short_code.replace('US-', '');
                    }
                  });
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
