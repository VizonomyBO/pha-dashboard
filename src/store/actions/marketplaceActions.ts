import { Dispatch } from 'redux';
import { BusinessDetailsInterface } from '../../@types/redux';
import * as TYPES from '../types';

export const setBusinessDetails = (businessDetails: BusinessDetailsInterface) => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.SET_BUSINESS_DETAILS,
    payload: businessDetails
  });
};

export const setOtherQuestons = (otherQuestions: string, detail: string) => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.SET_OTHER_QUESTIONS,
    typeOtherQuestions: otherQuestions,
    value: detail
  });
};

export const setAvailability = (availability: string[]) => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.SET_AVAILABILITY,
    payload: availability
  });
};

export const setQuality = (quality: string) => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.SET_QUALITY,
    payload: quality,
  });
};

export const setVisibility = (visibility: string) => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.SET_VISIBILITY,
    payload: visibility,
  });
};

export const setLocal = (local: string) => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.SET_LOCAL,
    payload: local,
  });
};

export const setProduceAvailStore = (produceAvailStore: string, valueStore: string) => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.SET_PRODUCE_AVAIL_STORE,
    typeOtherQuestions: produceAvailStore,
    value: valueStore
  });
};

export const
  setProduceAvailSeasonally = (produceAvailSeasonally: string, valueSeasonally: string) => (dispatch: Dispatch) => {
    dispatch({
      type: TYPES.SET_PRODUCE_AVAIL_SEASONALLY,
      typeOtherQuestions: produceAvailSeasonally,
      value: valueSeasonally
    });
  };

export const setContactName = (contactName: string, valueContactName: string) => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.SET_CONTACT_NAME,
    typeContactName: contactName,
    value: valueContactName
  });
};

export const setContactEmail = (contactEmail: string, valueContactEmail: string) => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.SET_CONTACT_EMAIL,
    typeContactName: contactEmail,
    value: valueContactEmail
  });
};

export const setContactOwner = (contactOwner: string) => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.SET_CONTACT_OWNER,
    payload: contactOwner,
  });
};

export const setContactPatron = (contactPatron: string) => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.SET_CONTACT_PATRON,
    payload: contactPatron
  });
};

export const resetBusiness = () => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.RESET_MARKETPLACE_BUSINESS,
  });
};
