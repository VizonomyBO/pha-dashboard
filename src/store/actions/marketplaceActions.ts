import { Dispatch } from 'redux';
import { BusinessDetailsInterface } from '../../@types/redux';
import * as TYPES from '../types';

export const setBusinessDetails = (businessDetails: BusinessDetailsInterface) => (dispatch : Dispatch) => {
  dispatch({
    type: TYPES.SET_BUSINESS_DETAILS,
    payload: businessDetails,
  });
};

export const resetBusiness = () => (dispatch : Dispatch) => {
  dispatch({
    type: TYPES.RESET_MARKETPLACE_BUSINESS,
  });
};

export const setName = (name: string) => (dispatch : Dispatch) => {
  dispatch({
    payload: name,
    type: TYPES.SET_NAME,
  });
};

export const setAddress1 = (address1: string) => (dispatch : Dispatch) => {
  dispatch({
    type: TYPES.SET_ADDRESS_1,
    payload: address1,
  });
};

export const setAddress2 = (address2: string) => (dispatch : Dispatch) => {
  dispatch({
    type: TYPES.SET_ADDRESS_2,
    payload: address2,
  });
};

export const setPhone = (phone: string) => (dispatch : Dispatch) => {
  dispatch({
    type: TYPES.SET_PHONE,
    payload: phone,
  });
};

export const setCity = (city: string) => (dispatch : Dispatch) => {
  dispatch({
    type: TYPES.SET_CITY,
    payload: city,
  });
};

export const setState = (state: string) => (dispatch : Dispatch) => {
  dispatch({
    type: TYPES.SET_STATE,
    payload: state,
  });
};

export const setZipcode = (zipcode: string) => (dispatch : Dispatch) => {
  dispatch({
    type: TYPES.SET_ZIPCODE,
    payload: zipcode,
  });
};

export const setSchedule = (day: string, hours: string) => (dispatch : Dispatch) => {
  dispatch({
    type: TYPES.SET_SCHEDULE,
    payload: day,
    value: hours
  });
};

export const setWebsite = (website: string) => (dispatch : Dispatch) => {
  dispatch({
    type: TYPES.SET_WEBSITE,
    payload: website,
  });
};

export const setFacebook = (facebook: string) => (dispatch : Dispatch) => {
  dispatch({
    type: TYPES.SET_FACEBOOK,
    payload: facebook,
  });
};

export const setTwitter = (twitter: string) => (dispatch : Dispatch) => {
  dispatch({
    type: TYPES.SET_TWITTER,
    payload: twitter,
  });
};

export const setEmail = (email: string) => (dispatch : Dispatch) => {
  dispatch({
    type: TYPES.SET_EMAIL,
    payload: email,
  });
};

export const setInstagram = (instagram: string) => (dispatch : Dispatch) => {
  dispatch({
    type: TYPES.SET_INSTAGRAM,
    payload: instagram,
  });
};
