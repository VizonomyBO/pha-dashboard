import { useSelector, useDispatch } from 'react-redux';
import { BusinessDetailsInterface, MarketplaceInterface, OtherQuestionsInterface } from '../../@types/redux';
import { resetBusiness, setBusinessDetails, setOtherQuestons } from '../actions';

export const useMarketplaceState = () => useSelector(
  (rootState: { marketplace: MarketplaceInterface }) => rootState.marketplace
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
    setOtherQuestions: (otherQuestions: OtherQuestionsInterface) => {
      dispatch(setOtherQuestons(otherQuestions));
    }
  };
};
