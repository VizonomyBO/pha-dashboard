import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import ClearIcon from '@mui/icons-material/Clear';
import classNames from 'classnames';
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
    onChangeInput,
    position,
    keyDown
  } = useGeocoder(name, type);
  const trClassNames = (index: number) => (
    classNames({ 'tr-geocoder-active': position === index, 'tr-geocoder': position === index })
  );
  const blockClassNames = classNames({ 'geocoder-block': type !== 'home', 'geocoder-block-home': type === 'home' });
  const tableClassNames = classNames({ 'table-geocoder': type !== 'home', 'table-geocoder-home': type === 'home' });
  return (
    <>
      <div className={type !== 'home' ? 'swhere' : 'swhere-home'}>
        {type !== 'home'
          && (
          <>
            <span className="icmappin" />
            <span className="txtd">Where</span>
          </>
          )}
        <input
          ref={geocoderDivRef}
          className="txtd text-input-home"
          type="text"
          value={inputTextHtml}
          onChange={onChangeInput}
          placeholder="City or Zip Code"
          onKeyDown={keyDown}
        />
        {inputTextHtml !== ''
          && (
          <ClearIcon
            style={{ width: '16px', height: '16px', color: '#7a7e80' }}
            onClick={() => {
              setInputText({
                text: '',
                shouldSearch: false,
                center: [],
                bbox: []
              });
              setInputTextHtml('');
            }}
          />
          )}
        {type !== 'home' && <span className="iccrosshair" />}
      </div>
      <div className={blockClassNames}>
        {options && options.length > 0 && inputText.shouldSearch && (
          <ul className={tableClassNames}>
            {inputText.shouldSearch
              && options.map((opt: Result, index: number) => {
                const { region } = findRegion(opt);
                return (
                  <li key={`${opt.place_name}index`} className={trClassNames(index)}>
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
