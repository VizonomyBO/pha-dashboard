import { useSelector, useDispatch } from 'react-redux';
import { resetMarketplace, setBusinessDetails } from '../actions';

export const useMarketplaceState = () => useSelector((rootState: {marketplace: any}) => rootState.marketplace);

export const useMarketplaceDispatch = () => {
  const dispatch = useDispatch();
  return {
    setBusinessDetails: (businessDetails: any) => {
      dispatch(setBusinessDetails(businessDetails));
    },
    resetMarketplace: () => {
      dispatch(resetMarketplace());
    },
  };
};
