import { useSelector, useDispatch } from 'react-redux';
import { MarketplaceInterface } from '../../@types/redux';
import { setBusinessDetails } from '../actions';

export const useMarketplaceState = () => useSelector(
  (rootState: {marketplace: MarketplaceInterface}) => rootState.marketplace
);
export const useMarketplaceDispatch = () => {
  const dispatch = useDispatch();
  return {
    setBusinessDetails: (type:string, value: string) => {
      dispatch(setBusinessDetails(type, value));
    },
  };
};
