import { useSelector, useDispatch } from 'react-redux';
import {
  MarketplaceInterface
} from '../../@types/redux';
import {
  setContactName, setBusinessDetails,
  setOtherQuestons, setAvailability, setQuality, setVisibility,
  setLocal, setProduceAvailStore, setProduceAvailSeasonally, setContactPatron, setContactOwner, setContactEmail
} from '../actions';

export const useMarketplaceState = () => useSelector(
  (rootState: { marketplace: MarketplaceInterface }) => rootState.marketplace
);
export const useMarketplaceDispatch = () => {
  const dispatch = useDispatch();
  return {
    setBusinessDetails: (type: string, value: string) => {
      dispatch(setBusinessDetails(type, value));
    },
    setOtherQuestions: (value: string) => {
      dispatch(setOtherQuestons(value));
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
    setProduceAvailStore: (value: string) => {
      dispatch(setProduceAvailStore(value));
    },
    setProduceAvailSeasonally: (value: string) => {
      dispatch(setProduceAvailSeasonally(value));
    },
    setContactName: (value: string) => {
      dispatch(setContactName(value));
    },
    setContactEmail: (value: string) => {
      dispatch(setContactEmail(value));
    },
    setContactOwner: (contactOwner: string) => {
      dispatch(setContactOwner(contactOwner));
    },
    setContactPatron: (contactPatron: string) => {
      dispatch(setContactPatron(contactPatron));
    },
  };
};
