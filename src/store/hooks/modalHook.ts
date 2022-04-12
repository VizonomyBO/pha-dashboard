import { useSelector, useDispatch } from 'react-redux';
import { ModalInderface } from '../../@types/redux';
import { setModal } from '../actions';

export const useModalState = () => useSelector(
  (rootState: {modal: ModalInderface}) => rootState.modal
);

export const useModalDispatch = () => {
  const dispatch = useDispatch();
  return {
    setModal: (chart: ModalInderface) => {
      dispatch(setModal(chart));
    }
  };
};
