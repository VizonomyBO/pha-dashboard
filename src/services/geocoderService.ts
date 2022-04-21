import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { InputTextInterface } from '../@types/database';
import { MAPBOX_KEY, MISSISSIPPI_BBOX } from '../constants';

export class GeocoderService {
  t;

  geocoder;

  setGeocoderOptions;

  constructor(
    id: string,
    setGeocoderOptions: (options: []) => void,
    elem: HTMLElement
  ) {
    this.setGeocoderOptions = setGeocoderOptions;
    this.t = 4000;
    this.geocoder = new MapboxGeocoder({
      accessToken: MAPBOX_KEY,
      countries: 'US',
      bbox: MISSISSIPPI_BBOX,
      marker: false
    });
    if (elem) {
      this.geocoder.addTo(elem);
    }
    this.geocoder.on('results', (response) => {
      setGeocoderOptions(response.features);
    });
    this.geocoder.on('error', (error) => {
      console.log('error', error);
    });
  }

  setGeocoderInputText(inputText: InputTextInterface) {
    if (this.geocoder != null && inputText.text != null) {
      this.geocoder.setInput(inputText.text);
    }
  }

  setGeocoderQuery(query: string) {
    if (this.geocoder != null) {
      this.geocoder.query(query);
    }
  }
}
