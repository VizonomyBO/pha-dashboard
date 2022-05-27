import { useEffect, useRef, useState } from 'react';
import { useMarketplaceState } from '..';
import { POINTS_OF_INTEREST, TYPE_BUSINESS } from '../../../constants';
import { GeocoderService } from '../../../services/geocoderService';
import { findRegion } from '../../../utils/findRegion';
import { getAddressFields } from '../../../utils/getAddressFields';
import { useGeocoderDispatch, useGeocoderState } from '../geocoderHook';
import { useMarketplaceDispatch } from '../marketplaceHook';
import { webRequest } from '../../../utils/webRequest';
import { ENDPOINTS } from '../../../constants/url';
import { CompletelyIntentionalAny } from '../../../@types/database';

export const useGeocoder = (name: string, type: string) => {
  const geocoderDivRef = useRef<HTMLInputElement>(null);
  const { setInputText, setGeocoderOptions, setShouldZoom } = useGeocoderDispatch();
  const { businessDetails } = useMarketplaceState();
  const { setBusinessDetails } = useMarketplaceDispatch();
  const { inputText, options } = useGeocoderState() || {};
  const [position, setPosition] = useState(0);
  const [inputTextHtml, setInputTextHtml] = useState('');
  const geocoder = useRef<GeocoderService>(
    new GeocoderService(name, setGeocoderOptions, geocoderDivRef.current as HTMLElement)
  );
  const [userPosition, setUserPosition] = useState({ latitude: 0, longitud: 0 });
  const onChangeInput = (e: React.FormEvent<HTMLInputElement>): void => {
    setInputText({
      text: e.currentTarget.value,
      shouldSearch: true,
      center: [0, 0],
    });
    setInputTextHtml(e.currentTarget.value);
  };

  const getCurrentUserPosition = () => {
    navigator.geolocation.getCurrentPosition((positionNav) => {
      setUserPosition({ latitude: positionNav.coords.latitude, longitud: positionNav.coords.longitude });
    });
  };
  useEffect(() => {
    if (userPosition.latitude !== 0 && userPosition.longitud !== 0) {
      webRequest.get(ENDPOINTS.REVERSE_GEOCODING(userPosition.latitude, userPosition.longitud))
        .then((res) => res.json())
        .then((res: CompletelyIntentionalAny) => {
          if (res.features.length) {
            setInputText({
              text: res.features[0].place_name,
              shouldSearch: false,
              center: res.query
            });
          }
        })
        .catch((err) => console.error(err));
    }
  }, [userPosition, setInputText]);
  useEffect(() => {
    setInputTextHtml(businessDetails.address_1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    geocoder.current.geocoder.addTo(geocoderDivRef.current as HTMLElement);
    if (inputText && inputText.text) {
      geocoder.current.setGeocoderQuery(inputText.text);
    }
    setPosition(0);
    setGeocoderOptions([]);
  }, [geocoder, inputText, setGeocoderOptions]);

  useEffect(() => {
    if (inputText.text) {
      const positionOfComma = inputText.text.lastIndexOf(',');
      const valueToDisplay = positionOfComma !== -1 ? inputText.text.substr(0, positionOfComma) : inputText.text;
      setInputTextHtml(valueToDisplay);
    }
  }, [inputText]);

  const keyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'ArrowUp') {
      setPosition(position === 0 ? position : position - 1);
    }
    if (e.code === 'ArrowDown') {
      setPosition(options.length - 1 === position ? position : position + 1);
    }
    if (e.code === 'Enter') {
      const { region, regionShortcode } = findRegion(options[position]);
      const addressText = regionShortcode === ''
        ? options[position].text : `${options[position].text}, ${regionShortcode}`;
      setInputText({
        text: options[position].place_name,
        shouldSearch: false,
        center: options[position].center,
        bbox: options[position].bbox || [],
        placetype: options[position]?.place_type || []
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
      if (inputText.center[0] !== 0 && inputText.center[1] !== 0) {
        setShouldZoom(true);
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
    keyDown,
    getCurrentUserPosition,
    userCoordinates: userPosition
  };
};
