import { useSelector, useDispatch } from 'react-redux';
import { BusinessDetailsInterface, MarketplaceInterface } from '../../@types/redux';
import {
  resetBusiness,
  setAddress1,
  setAddress2,
  setBusinessDetails,
  setCity,
  setEmail,
  setFacebook,
  setInstagram,
  setName,
  setPhone,
  setSchedule,
  setState,
  setTwitter,
  setWebsite,
  setZipcode
} from '../actions';

export const useMarketplaceState = () => useSelector(
  (rootState: {marketplace: MarketplaceInterface}) => rootState.marketplace
);
export const useMarketplaceDispatch = () => {
  const dispatch = useDispatch();
  return {
    setBusinessDetails: (businessDetails: BusinessDetailsInterface) => {
      dispatch(setBusinessDetails(businessDetails));
    },
    resetBusiness: () => {
      dispatch(resetBusiness());
    },
    setName: (name: string) => {
      dispatch(setName(name));
    },
    setAddress1: (name: string) => {
      dispatch(setAddress1(name));
    },
    setAddress2: (name: string) => {
      dispatch(setAddress2(name));
    },
    setPhone: (name: string) => {
      dispatch(setPhone(name));
    },
    setCity: (name: string) => {
      dispatch(setCity(name));
    },
    setState: (name: string) => {
      dispatch(setState(name));
    },
    setZipcode: (name: string) => {
      dispatch(setZipcode(name));
    },
    setSchedule: (day: string, hours: string) => {
      dispatch(setSchedule(day, hours));
    },
    setWebsite: (name: string) => {
      dispatch(setWebsite(name));
    },
    setFacebook: (name: string) => {
      dispatch(setFacebook(name));
    },
    setTwitter: (name: string) => {
      dispatch(setTwitter(name));
    },
    setEmail: (name: string) => {
      dispatch(setEmail(name));
    },
    setInstagram: (name: string) => {
      dispatch(setInstagram(name));
    },
  };
};
