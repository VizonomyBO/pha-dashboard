import { Dispatch } from 'redux';
import { BusinessDetailsInterface, OtherQuestionsInterface } from '../../@types/redux';
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

export const resetBusiness = () => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.RESET_MARKETPLACE_BUSINESS,
  });
};
