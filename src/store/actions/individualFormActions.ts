import { MultimediaInterface } from '../../@types';
import * as TYPES from '../types';

export const setIndividualForm = (
  type: string,
  value: string | string[] | MultimediaInterface[]
) => ({
  type: TYPES.SET_INDIVIDUAL_FORM,
  payload: type,
  value
});
