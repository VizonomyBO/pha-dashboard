import { useSelector, useDispatch } from 'react-redux';
import { MultimediaInterface } from '../../@types';
import { MarketplaceInterface } from '../../@types/redux';
import {
  setContactName, setBusinessDetails, setBusinessFile,
  setOtherQuestons, setAvailabilityOptions, setQuality, setVisibility,
  setLocal, setProduceAvailStore, setProduceAvailSeasonally, setContactPatron, setContactOwner,
  setContactEmail, setSelectCategoryOptions
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
    setBusinessFile: (type: string, value: MultimediaInterface[]) => {
      dispatch(setBusinessFile(type, value));
    },
    setOtherQuestions: (value: string) => {
      dispatch(setOtherQuestons(value));
    },
    setAvailabilityOptions: (availabilityOptions: string[]) => {
      dispatch(setAvailabilityOptions(availabilityOptions));
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
    setSelectCategoryOptions: (selectCategory: string[]) => {
      dispatch(setSelectCategoryOptions(selectCategory));
    },
  };
};
