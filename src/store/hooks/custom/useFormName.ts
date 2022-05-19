import { useParams } from 'react-router-dom';
import { TYPE_BUSINESS } from '../../../constants';
import { useMarketplaceDispatch } from '../marketplaceHook';

export const useFormName = () => {
  const { name } = useParams();
  const { setBusinessDetails } = useMarketplaceDispatch();

  const addName = () => {
    setBusinessDetails(TYPE_BUSINESS.NAME, name || '');
  };

  return { addName };
};
