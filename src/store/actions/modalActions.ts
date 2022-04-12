import { ModalInderface } from '../../@types/redux';
import * as TYPES from '../types';

export const setModal = (modal: ModalInderface) => ({
  type: TYPES.SET_MODAL_OPEN,
  payload: modal
});
