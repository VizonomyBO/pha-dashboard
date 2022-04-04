import {
  BusinessDetailsInterface,
  OtherQuestionsInterface,
  selectAccessibilityInterface,
  selectCategoryInterface
} from '../@types/redux';
import { MARKED_ELEMENT, MARKED_FRESH } from '../constants';

export const isEmpty = (field: string) => !!field;

export const isLiteralYes = (field: string) => field === MARKED_ELEMENT;

export const businessDetailsValidation = (businessDetails: BusinessDetailsInterface) => {
  if (isEmpty(businessDetails.name) && isEmpty(businessDetails.phone)
  && isEmpty(businessDetails.address_1) && isEmpty(businessDetails.city) && isEmpty(businessDetails.state)
  && isEmpty(businessDetails.zipcode)) {
    return true;
  }
  return false;
};

export const selectCategoryValidation = (selectCategory: selectCategoryInterface) => {
  if (isLiteralYes(selectCategory.supermarket)
  || isLiteralYes(selectCategory.corner_store) || isLiteralYes(selectCategory.dollar_stores)
  || isLiteralYes(selectCategory.food_pantry) || isLiteralYes(selectCategory.distribution)
  || isLiteralYes(selectCategory.food_co_op)) {
    return true;
  }
  return false;
};

export const selectAccessibilityValidation = (selectAccessibility: selectAccessibilityInterface) => {
  if (isLiteralYes(selectAccessibility.wic_accepted)
  || isLiteralYes(selectAccessibility.snap_accepted)) {
    return true;
  }
  return false;
};

export const otherQuestionsValidationFresh = (otherQuestions: OtherQuestionsInterface) => {
  if (isEmpty(otherQuestions.description) && otherQuestions.availabilityOptions.length > 0
  && isEmpty(otherQuestions.quality) && isEmpty(otherQuestions.visibility) && isEmpty(otherQuestions.local)
  && otherQuestions.availabilityOptions.filter((data: string) => data === MARKED_FRESH)) {
    return true;
  }
  return false;
};

export const otherQuestionsValidation = (otherQuestions: OtherQuestionsInterface) => {
  if ((isEmpty(otherQuestions.description) && otherQuestions.availabilityOptions.length > 0
  && otherQuestions.availabilityOptions.filter((data: string) => data === MARKED_FRESH) !== undefined)) {
    return true;
  }
  return false;
};

export const otherQuestionsEmty = (otherQuestions: OtherQuestionsInterface) => {
  if (!isEmpty(otherQuestions.description) || otherQuestions.availabilityOptions === []
  || !isEmpty(otherQuestions.quality) || !isEmpty(otherQuestions.visibility) || !isEmpty(otherQuestions.local)) {
    return true;
  }
  return false;
};

export const selectCategoryEmty = (selectCategory: selectCategoryInterface) => {
  if (!isLiteralYes(selectCategory.supermarket)
  && !isLiteralYes(selectCategory.corner_store) && !isLiteralYes(selectCategory.dollar_stores)
  && !isLiteralYes(selectCategory.food_pantry) && !isLiteralYes(selectCategory.distribution)
  && !isLiteralYes(selectCategory.food_co_op)) {
    return true;
  }
  return false;
};

export const selectAccessibilityEmty = (selectAccessibility: selectAccessibilityInterface) => {
  if (!isLiteralYes(selectAccessibility.wic_accepted)
  && !isLiteralYes(selectAccessibility.snap_accepted)) {
    return true;
  }
  return false;
};
