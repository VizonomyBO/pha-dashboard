import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MultimediaInterface } from '../../@types';
import { PhaIndividual } from '../../@types/database';
import { setIndividualForm } from '../actions';

export const useIndividualFormState = () => useSelector(
  (rootState: { individualForm: PhaIndividual}) => rootState.individualForm
);
export const useIndividualFormDispatch = () => {
  const dispatch = useDispatch();
  const setIndivualFormMemoized = useCallback((type: string, value: string | MultimediaInterface[]) => {
    dispatch(setIndividualForm(type, value));
  }, [dispatch]);
  return {
    setIndividualForm: setIndivualFormMemoized,
  };
};
