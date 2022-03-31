import { Dispatch } from 'redux';
import { MultimediaInterface } from '../../@types';
import * as TYPES from '../types';

export const setBusinessDetails = (type: string, value: string) => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.SET_BUSINESS_DETAILS,
    payload: type,
    value
  });
};

export const setOtherQuestons = (detail: string) => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.SET_OTHER_QUESTIONS,
    value: detail
  });
};

export const setAvailabilityOptions = (availabilityOptions: string[]) => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.SET_AVAILABILITY_OPTIONS,
    payload: availabilityOptions
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

export const setProduceAvailStore = (valueStore: string) => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.SET_PRODUCE_AVAIL_STORE,
    value: valueStore
  });
};

export const
  setProduceAvailSeasonally = (valueSeasonally: string) => (dispatch: Dispatch) => {
    dispatch({
      type: TYPES.SET_PRODUCE_AVAIL_SEASONALLY,
      value: valueSeasonally
    });
  };

export const setContactName = (valueContactName: string) => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.SET_CONTACT_NAME,
    value: valueContactName
  });
};

export const setContactEmail = (valueContactEmail: string) => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.SET_CONTACT_EMAIL,
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

export const setSelectCategoryOptions = (selectCategoryOptions: string[]) => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.SET_SELECT_CATEGORY_OPTIONS,
    payload: selectCategoryOptions
  });
};

export const resetBusiness = () => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.RESET_MARKETPLACE_BUSINESS,
  });
};

export const setBusinessFile = (type: string, value: MultimediaInterface[]) => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.BUSINESS_FILES,
    payload: type,
    value
  });
};
