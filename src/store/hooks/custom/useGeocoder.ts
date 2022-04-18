import { useEffect, useRef, useState } from 'react';
import { POINTS_OF_INTEREST, TYPE_BUSINESS } from '../../../constants';
import { GeocoderService } from '../../../services/geocoderService';
import { findRegion } from '../../../utils/findRegion';
import { getAddressFields } from '../../../utils/getAddressFields';
import { useGeocoderDispatch, useGeocoderState } from '../geocoderHook';
import { useMarketplaceDispatch } from '../marketplaceHook';

export const useGeocoder = (name: string, type: string) => {
  const geocoderDivRef = useRef<HTMLInputElement>(null);
  const { setInputText, setGeocoderOptions } = useGeocoderDispatch();
  const { setBusinessDetails } = useMarketplaceDispatch();
  const { inputText, options } = useGeocoderState() || {};
  const [position, setposition] = useState(0);
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
    setposition(0);
    setGeocoderOptions([]);
  }, [geocoder, inputText, setGeocoderOptions]);

  useEffect(() => {
    if (inputText.text) {
      setInputTextHtml(inputText.text);
    }
  }, [inputText]);

  const keyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
    setposition(position + 1);
    if (e.code === 'ArrowUp') {
      setposition(position === 0 ? position : position - 1);
    }
    if (e.code === 'ArrowDown') {
      setposition(options.length - 1 === position ? position : position + 1);
    }
    if (e.code === 'Enter') {
      const { region } = findRegion(options[position]);
      const { regionShortcode } = findRegion(options[position]);
      const addressText = regionShortcode === ''
        ? options[position].text : `${options[position].text}, ${regionShortcode}`;
      setInputText({
        text: options[position].place_name,
        shouldSearch: false,
        center: options[position].center,
        bbox: options[position].bbox || []
      });
      setInputTextHtml(region === '' ? options[position].text : `${options[position].text}, ${region}`);
      setGeocoderOptions([]);
      setBusinessDetails(TYPE_BUSINESS.LONGITUDE, options[position].center[0]);
      setBusinessDetails(TYPE_BUSINESS.LATITUDE, options[position].center[1]);
      setBusinessDetails(type, addressText);
      if (options[position].place_type.includes(POINTS_OF_INTEREST)) {
        const { zipcode, city, state } = getAddressFields(options[position].place_name);
        setBusinessDetails(TYPE_BUSINESS.CITY, city);
        setBusinessDetails(TYPE_BUSINESS.STATE, state);
        setBusinessDetails(TYPE_BUSINESS.ZIPCODE, zipcode);
      } else {
        setBusinessDetails(TYPE_BUSINESS.CITY, '');
        setBusinessDetails(TYPE_BUSINESS.ZIPCODE, '');
        setBusinessDetails(TYPE_BUSINESS.STATE, region);
      }
    }
  };

  return {
    setInputText,
    options,
    inputText,
    inputTextHtml,
    setInputTextHtml,
    geocoderDivRef,
    setGeocoderOptions,
    onChangeInput,
    position,
    keyDown
  };
};
