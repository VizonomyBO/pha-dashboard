import { useSelector, useDispatch } from 'react-redux';
import { MultimediaInterface } from '../../@types';
import { MarketplaceInterface } from '../../@types/redux';
import { setBusinessDetails, setBusinessFile } from '../actions';

export const useMarketplaceState = () => useSelector(
  (rootState: {marketplace: MarketplaceInterface}) => rootState.marketplace
);
export const useMarketplaceDispatch = () => {
  const dispatch = useDispatch();
  return {
    setBusinessDetails: (type:string, value: string) => {
      dispatch(setBusinessDetails(type, value));
    },
    setBusinessFile: (type:string, value: MultimediaInterface[]) => {
      dispatch(setBusinessFile(type, value));
    },
  };
};
