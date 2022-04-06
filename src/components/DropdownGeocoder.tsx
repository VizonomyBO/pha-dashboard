import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { useEffect, useState } from 'react';
import { useGeocoderDispatch, useGeocoderState } from '../store/hooks';
import { GeocoderService } from '../services/geocoderService';

const name = 'geocoder';
export const DropdownGeocoder = () => {
  const { setInputText, setGeocoderOptions } = useGeocoderDispatch();
  const { inputText, options } = useGeocoderState();
  const [geocoder, setGeocoder] = useState<GeocoderService>();
  useEffect(() => {
    setGeocoder(new GeocoderService(name, setGeocoderOptions));
  }, []);
  useEffect(() => {
    console.log(inputText, 'DOTTY..2', geocoder);
    if (inputText.shouldSearch) {
      console.log('DOTTY..8');
      geocoder?.setGeocoderInputText(inputText);
    }
    // else {
    //   if (inputText.text) {
    //     geocoder.setGeocoderQuery(inputText.text);
    //   }
    //   setGeocoderOptions([]);
    // }
  }, [inputText]);
  useEffect(() => {
    console.log(options, 'DOTTY..1');
  }, [options]);
  return (
    <>
      <div className="swhere">
        <span className="icmappin" />
        <span className="txtd">Where</span>
        {/* <div ref={geocoderDivRef} id="geocoder" /> */}
        <input
          className="txtd"
          type="text"
          value={inputText.text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const { value } = e.target;
            console.log(e.target.value, 'DOTTY..4', value);
            setInputText({
              text: e.target.value,
              shouldSearch: true
            });
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
        <table>
          <tr key="tr">
            {
              inputText.shouldSearch && options.map((opt: any, index: number) => {
                console.log(opt, index);
                return (
                  <td key={`${opt.place_name}index`}>
                    <button
                      type="button"
                      onClick={() => {
                        setInputText({
                          text: opt.place_name,
                          shouldSearch: false
                        });
                        setGeocoderOptions([]);
                      }}
                    >
                      <label>
                        <span>
                          <span>{opt.place_name}</span>
                        </span>
                      </label>
                    </button>
                  </td>
                );
              })
            }
          </tr>
        </table>
      </div>
    </>
  );
};
