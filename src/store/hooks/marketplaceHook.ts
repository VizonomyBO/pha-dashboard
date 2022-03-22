import { useSelector, useDispatch } from 'react-redux';
import { classBusinessDetails } from '../../classes/form';
import { resetMarketplace, setBusinessDetails } from '../actions';
import { Marketplace } from '../reducers/marketplaceReducers';

export const useMarketplaceState = () => useSelector((rootState: {marketplace: Marketplace}) => rootState.marketplace);

export const useMarketplaceDispatch = () => {
  const dispatch = useDispatch();
  return {
    setBusinessDetails: (businessDetails: classBusinessDetails) => {
      dispatch(setBusinessDetails(businessDetails));
    },
    resetMarketplace: () => {
      dispatch(resetMarketplace());
    },
  };
};
