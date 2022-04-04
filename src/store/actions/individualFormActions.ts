import { Dispatch } from 'redux';
import { MultimediaInterface } from '../../@types';
import * as TYPES from '../types';

export const setIndividualForm = (
  type: string,
  value: string | string[] | MultimediaInterface[]
) => (dispatch: Dispatch) => {
  dispatch({
    type: TYPES.SET_INDIVIDUAL_FORM,
    payload: type,
    value
  });
};
