import { useSelector, useDispatch } from 'react-redux';
import { BusinessDetailsInterface, MarketplaceInterface } from '../../@types/redux';
import { resetBusiness, setBusinessDetails } from '../actions';

export const useMarketplaceState = () => useSelector(
  (rootState: {marketplace: MarketplaceInterface}) => rootState.marketplace
);
export const useMarketplaceDispatch = () => {
  const dispatch = useDispatch();
  return {
    setBusinessDetails: (businessDetails: BusinessDetailsInterface) => {
      dispatch(setBusinessDetails(businessDetails));
    },
    resetBusiness: () => {
      dispatch(resetBusiness());
    },
  };
};
