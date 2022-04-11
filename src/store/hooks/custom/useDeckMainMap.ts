import { useCategoriesDispatch } from '../categoriesHook';

export const useDeckMainMap = () => {
  const { resetValues } = useCategoriesDispatch();
  return {
    resetValues
  };
};
