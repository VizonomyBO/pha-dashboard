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
  setFriClose,
  setFriOpen,
  setInstagram,
  setMonClose,
  setMonOpen,
  setName,
  setPhone,
  setSatClose,
  setSatOpen,
  setState,
  setSunClose,
  setSunOpen,
  setThursClose,
  setThursOpen,
  setTuesClose,
  setTuesOpen,
  setTwitter,
  setWebsite,
  setWedClose,
  setWedOpen,
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
    setSunOpen: (name: string) => {
      dispatch(setSunOpen(name));
    },
    setSunClose: (name: string) => {
      dispatch(setSunClose(name));
    },
    setMonOpen: (name: string) => {
      dispatch(setMonOpen(name));
    },
    setMonClose: (name: string) => {
      dispatch(setMonClose(name));
    },
    setTuesOpen: (name: string) => {
      dispatch(setTuesOpen(name));
    },
    setTuesClose: (name: string) => {
      dispatch(setTuesClose(name));
    },
    setWedOpen: (name: string) => {
      dispatch(setWedOpen(name));
    },
    setWedClose: (name: string) => {
      dispatch(setWedClose(name));
    },
    setThursOpen: (name: string) => {
      dispatch(setThursOpen(name));
    },
    setThursClose: (name: string) => {
      dispatch(setThursClose(name));
    },
    setFriOpen: (name: string) => {
      dispatch(setFriOpen(name));
    },
    setFriClose: (name: string) => {
      dispatch(setFriClose(name));
    },
    setSatOpen: (name: string) => {
      dispatch(setSatOpen(name));
    },
    setSatClose: (name: string) => {
      dispatch(setSatClose(name));
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
