import { Dispatch } from 'redux';
import { BusinessDetailsInterface, ContactDetailsInterface, OtherQuestionsInterface } from '../../@types/redux';
import * as TYPES from '../types';

export const setBusinessDetails = (businessDetails: BusinessDetailsInterface) => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.SET_BUSINESS_DETAILS,
    payload: businessDetails
  });
};

export const setOtherQuestons = (otherQuestions: OtherQuestionsInterface) => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.SET_OTHER_QUESTIONS,
    payload: otherQuestions
  });
};

export const setContactDetails = (contactDetails: ContactDetailsInterface) => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.SET_CONTACT_DETAILS,
    payload: contactDetails
  });
};

export const resetBusiness = () => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.RESET_MARKETPLACE_BUSINESS,
  });
};
