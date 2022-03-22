import { useSelector, useDispatch } from 'react-redux';
import { MarketplaceType } from '../../@types/marketplace';
import { resetBusiness, setBusinessDetails } from '../actions';

export const useMarketplaceState = () => useSelector(
  (rootState: {marketplace: MarketplaceType}) => rootState.marketplace
);
export const useMarketplaceDispatch = () => {
  const dispatch = useDispatch();
  return {
    setBusinessDetails: (businessDetails: MarketplaceType) => {
      dispatch(setBusinessDetails(businessDetails));
    },
    resetBusiness: () => {
      dispatch(resetBusiness());
    },
  };
};
