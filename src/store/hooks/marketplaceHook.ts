import { useSelector, useDispatch } from 'react-redux';
import { MultimediaInterface } from '../../@types';
import { MarketplaceInterface } from '../../@types/redux';
import {
  setContactName, setBusinessDetails, setBusinessFile,
  setOtherQuestons, setAvailabilityOptions, setQuality, setVisibility,
  setLocal, setProduceAvailStore, setProduceAvailSeasonally, setContactPatron, setContactOwner,
  setSnapAccepted, setWicAccepted, setContactEmail, setSelectCategoryCorner,
  setSelectCategoryDistribution, setSelectCategoryDollar,
  setSelectCategoryFoodCoOp, setSelectCategoryFoodPantry, setSelectCategorySupermarket, setSelectCategory
} from '../actions';

export const useMarketplaceState = () => useSelector(
  (rootState: { marketplace: MarketplaceInterface }) => rootState.marketplace
);
export const useMarketplaceDispatch = () => {
  const dispatch = useDispatch();
  return {
    setBusinessDetails: (type: string, value: string | number) => {
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
    setSelectCategory: (type: string, selectCategory: string) => {
      dispatch(setSelectCategory(type, selectCategory));
    },
    setSelectCategorySupermarket: (selectCategory: string) => {
      dispatch(setSelectCategorySupermarket(selectCategory));
    },
    setSelectCategoryCorner: (selectCategory: string) => {
      dispatch(setSelectCategoryCorner(selectCategory));
    },
    setSelectCategoryDollar: (selectCategory: string) => {
      dispatch(setSelectCategoryDollar(selectCategory));
    },
    setSelectCategoryFoodPantry: (selectCategory: string) => {
      dispatch(setSelectCategoryFoodPantry(selectCategory));
    },
    setSelectCategoryDistribution: (selectCategory: string) => {
      dispatch(setSelectCategoryDistribution(selectCategory));
    },
    setSelectCategoryFoodCoOp: (selectCategory: string) => {
      dispatch(setSelectCategoryFoodCoOp(selectCategory));
    },
    setWicAccepted: (wicAccepted: string) => {
      dispatch(setWicAccepted(wicAccepted));
    },
    setSnapAccepted: (wicAccepted: string) => {
      dispatch(setSnapAccepted(wicAccepted));
    },
  };
};
