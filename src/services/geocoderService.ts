import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { InputTextInterface } from '../@types/database';
import { MAPBOX_KEY } from '../constants';

export class GeocoderService {
  t;

  geocoder;

  setGeocoderOptions;

  constructor(id: string, setGeocoderOptions: (options: []) => void, elem: HTMLElement) {
    this.setGeocoderOptions = setGeocoderOptions;
    this.t = 4000;
    this.geocoder = new MapboxGeocoder({
      accessToken: MAPBOX_KEY,
      countries: 'US',
      marker: false,
    });
    this.geocoder.addTo(elem);
    this.geocoder.on('results', (response) => {
      console.log('response', response);
      setGeocoderOptions(response.features);
    });
    this.geocoder.on('error', (error) => {
      console.log('error', error);
    });
  }

  setGeocoderInputText(inputText: InputTextInterface) {
    console.log(inputText, 'Dotty..7');
    if (this.geocoder != null && inputText.text != null) {
      this.geocoder.setInput(inputText.text);
    }
  }

  setGeocoderQuery(query:any) {
    if (this.geocoder != null) {
      this.geocoder.query(query);
    }
  }
}
