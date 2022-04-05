import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { useEffect, useRef } from 'react';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { MAPBOX_KEY } from '../constants';

export const DropdownGeocoder = () => {
  const geocoderDivRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const geocoder = new MapboxGeocoder({
      accessToken: MAPBOX_KEY,
      countries: 'US',
      marker: false
    });
    if (geocoder) {
      geocoder.addTo(geocoderDivRef.current as HTMLElement);
    }
  }, []);
  return (
    <div className="swhere">
      <span className="icmappin" />
      <span className="txtd">Where</span>
      <div ref={geocoderDivRef} id="geocoder" />
      <span className="iccrosshair" />
    </div>
  );
};
