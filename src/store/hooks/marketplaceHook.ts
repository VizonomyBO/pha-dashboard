import { useSelector, useDispatch } from 'react-redux';
import { resetMarketplace, setBusinessDetails } from '../actions';
import { initialMarketplace } from '../reducers/marketplaceReducers';

export const useMarketplaceState = () => useSelector(
  (rootState: {marketplace: typeof initialMarketplace}) => rootState.marketplace
);
export const useMarketplaceDispatch = () => {
  const dispatch = useDispatch();
  return {
    setBusinessDetails: (businessDetails: typeof initialMarketplace.businessDetails) => {
      dispatch(setBusinessDetails(businessDetails));
    },
    resetMarketplace: () => {
      dispatch(resetMarketplace());
    },
  };
};
