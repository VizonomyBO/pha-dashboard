import { useSelector, useDispatch } from 'react-redux';
import {
  BusinessDetailsInterface,
  MarketplaceInterface
} from '../../@types/redux';
import {
  setContactName, resetBusiness, setBusinessDetails,
  setOtherQuestons, setAvailability, setQuality, setVisibility,
  setLocal, setProduceAvailStore, setProduceAvailSeasonally, setContactPatron, setContactOwner
} from '../actions';

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
    setOtherQuestions: (otherQuestions: string, value: string) => {
      dispatch(setOtherQuestons(otherQuestions, value));
    },
    setAvailability: (availability: string[]) => {
      dispatch(setAvailability(availability));
    },
    setQuality: (quality: string) => {
      dispatch(setQuality(quality));
    },
    setVisibility: (visibility: string) => {
      dispatch(setVisibility(visibility));
    },
    setLocal: (local: string) => {
      dispatch(setLocal(local));
    },
    setProduceAvailStore: (produceAvailStore: string, value: string) => {
      dispatch(setProduceAvailStore(produceAvailStore, value));
    },
    setProduceAvailSeasonally: (produceAvailSeasonally: string, value: string) => {
      dispatch(setProduceAvailSeasonally(produceAvailSeasonally, value));
    },
    setContactName: (contactName: string, value: string) => {
      dispatch(setContactName(contactName, value));
    },
    setContactEmail: (contactEmail: string, value: string) => {
      dispatch(setContactName(contactEmail, value));
    },
    setContactOwner: (contactOwner: string) => {
      dispatch(setContactOwner(contactOwner));
    },
    setContactPatron: (contactPatron: string) => {
      dispatch(setContactPatron(contactPatron));
    },
  };
};
