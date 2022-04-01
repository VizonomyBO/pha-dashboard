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

export const setSelectCategorySupermarket = (selectCategorySupermarket: string) => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.SET_SELECT_CATEGORY_SUPERMARKET,
    payload: selectCategorySupermarket
  });
};

export const setSelectCategoryCorner = (selectCategoryCorner: string) => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.SET_SELECT_CATEGORY_CORNER,
    payload: selectCategoryCorner
  });
};

export const setSelectCategoryDollar = (selectCategoryDollar: string) => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.SET_SELECT_CATEGORY_DOLLAR,
    payload: selectCategoryDollar
  });
};

export const setSelectCategoryFoodPantry = (selectCategoryFoodPantry: string) => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.SET_SELECT_CATEGORY_FOOD_PANTRY,
    payload: selectCategoryFoodPantry
  });
};

export const setSelectCategoryDistribution = (selectCategoryDistribution: string) => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.SET_SELECT_CATEGORY_DISTRIBUTION,
    payload: selectCategoryDistribution
  });
};

export const setSelectCategoryFoodCoOp = (selectCategoryFoodCoOp: string) => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.SET_SELECT_CATEGORY_FOOD_CO_OP,
    payload: selectCategoryFoodCoOp
  });
};

export const setWicAccepted = (wicAccepted: string) => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.SET_SELECT_WIC_ACCEPTED,
    payload: wicAccepted
  });
};

export const setSnapAccepted = (snapAccepted: string) => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.SET_SELECT_SNAP_ACCEPTED,
    payload: snapAccepted
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
