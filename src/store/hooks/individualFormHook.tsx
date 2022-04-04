import { useSelector, useDispatch } from 'react-redux';
import { MultimediaInterface } from '../../@types';
import { IndividualFormInterface } from '../../@types/redux';
import { setIndividualForm } from '../actions';

export const useIndividualFormState = () => useSelector(
  (rootState: { individualForm: IndividualFormInterface }) => rootState.individualForm
);
export const useIndividualFormDispatch = () => {
  const dispatch = useDispatch();
  return {
    setIndividualForm: (type: string, value: string | string[] | MultimediaInterface[]) => {
      dispatch(setIndividualForm(type, value));
    },
  };
};
