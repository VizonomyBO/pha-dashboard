import { useSelector, useDispatch } from 'react-redux';
import { MultimediaInterface } from '../../@types';
import { PhaIndividual } from '../../@types/database';
import { setIndividualForm } from '../actions';

export const useIndividualFormState = () => useSelector(
  (rootState: { individualForm: PhaIndividual}) => rootState.individualForm
);
export const useIndividualFormDispatch = () => {
  const dispatch = useDispatch();
  return {
    setIndividualForm: (type: string, value: string | MultimediaInterface[]) => {
      dispatch(setIndividualForm(type, value));
    },
  };
};
