import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { useEffect } from 'react';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { MAPBOX_KEY } from '../constants';

export const DropdownGeocoder = () => {
  console.log('geocoder');
  useEffect(() => {
    const geocoder = new MapboxGeocoder({
      accessToken: MAPBOX_KEY,
      countries: 'US',
      marker: false
    });
    console.log('Geocoder', geocoder);
    if (geocoder) {
      geocoder.addTo('#geocoder');
      const results = document.getElementById('result');
      geocoder.on('result', (e) => {
        console.log('E', e);
        if (results) {
          results.innerText = JSON.stringify(e.result, null, 2);
        }
      });
      geocoder.on('clear', () => {
        if (results) {
          results.innerText = '';
        }
      });
    }
  }, []);
  return (
    <div className="swhere">
      <span className="icmappin" />
      <span className="txtd">Where</span>
      {/* <input ref={inputEl} type="text" name="searcherLanding" id="geocoder" placeholder="City or Zip Code" /> */}
      <div id="geocoder" />
      <span className="iccrosshair" />
    </div>
  );
};
