import { useEffect, useRef, useState } from 'react';
import { GeocoderService } from '../../../services/geocoderService';
import { useGeocoderDispatch, useGeocoderState } from '../geocoderHook';

export const useGeocoder = (name: string) => {
  const geocoderDivRef = useRef<HTMLInputElement>(null);
  const { setInputText, setGeocoderOptions } = useGeocoderDispatch();
  const { inputText, options } = useGeocoderState() || {};
  const [inputTextHtml, setInputTextHtml] = useState('');
  const geocoder = useRef<GeocoderService>(
    new GeocoderService(name, setGeocoderOptions, geocoderDivRef.current as HTMLElement)
  );

  const onChangeInput = (e: React.FormEvent<HTMLInputElement>): void => {
    setInputText({
      text: e.currentTarget.value,
      shouldSearch: true,
      center: [0, 0]
    });
    setInputTextHtml(e.currentTarget.value);
  };

  useEffect(() => {
    geocoder.current.geocoder.addTo(geocoderDivRef.current as HTMLElement);
    if (inputText && inputText.text) {
      geocoder.current.setGeocoderQuery(inputText.text);
    }
    setGeocoderOptions([]);
  }, [geocoder, inputText, setGeocoderOptions]);

  useEffect(() => {
    if (inputText.text) {
      const positionOfComma = inputText.text.lastIndexOf(',');
      const valueToDisplay = positionOfComma !== -1 ? inputText.text.substr(0, positionOfComma) : inputText.text;
      setInputTextHtml(valueToDisplay);
    }
  }, [inputText]);

  return {
    setInputText,
    options,
    inputText,
    inputTextHtml,
    setInputTextHtml,
    geocoderDivRef,
    setGeocoderOptions,
    onChangeInput
  };
};
