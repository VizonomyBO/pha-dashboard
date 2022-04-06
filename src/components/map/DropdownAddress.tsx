import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
// import { useEffect, useRef } from 'react';
// import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
// import { MAPBOX_KEY, TYPE_BUSINESS } from '../../constants';
// import { useMarketplaceDispatch } from '../../store/hooks';

export const DropdownAddress = ({ type }:{type: string}) => {
  console.log(type);
  // const { setBusinessDetails } = useMarketplaceDispatch();
  // const geocoderDivRef = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   const geocoder = new MapboxGeocoder({
  //     accessToken: MAPBOX_KEY,
  //     countries: 'US',
  //     marker: false,
  //   });
  //   if (geocoder) {
  //     geocoder.addTo(geocoderDivRef.current as HTMLElement);
  //     geocoder.on('result', (e) => {
  //       setBusinessDetails(type, e.result.text);
  //       if (type === TYPE_BUSINESS.ADDRESS_1) {
  //         setBusinessDetails(TYPE_BUSINESS.LONGITUDE, e.result.center[0]);
  //         setBusinessDetails(TYPE_BUSINESS.LATITUDE, e.result.center[1]);
  //         for (let i = 0; e.result.context[i] && i < e.result.context.length; i += 1) {
  //           if (e.result.context[i].id.includes('region.')) {
  //             setBusinessDetails(TYPE_BUSINESS.STATE, e.result.context[i].text);
  //           }
  //         }
  //       }
  //     });
  //   }
  // }, [setBusinessDetails, type]);
  return (
    <div className="ainput">
      homa
      {/* <div className="geocoderAdderss" ref={geocoderDivRef} id="geocoderAddress" /> */}
    </div>
  );
};
