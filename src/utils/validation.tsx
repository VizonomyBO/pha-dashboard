import {
  BusinessDetailsInterface,
  OtherQuestionsInterface,
  selectAccessibilityInterface,
  selectCategoryInterface
} from '../@types/redux';
import {
  BUSINESS_DETAILS,
  CONTACT_DETAILS,
  HOME,
  MARKED_ELEMENT,
  MARKED_FRESH,
  OTHER_QUESTIONS
} from '../constants';

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

export const Formvalidation = (
  value: string,
  activeTab: string,
  businessDetails: BusinessDetailsInterface,
  selectCategory: selectCategoryInterface,
  selectAccessibility: selectAccessibilityInterface,
  otherQuestions: OtherQuestionsInterface
) => {
  let returnValue = activeTab;
  let typeModal = false;
  let openModal = false;
  switch (activeTab) {
    case BUSINESS_DETAILS:
      if (businessDetailsValidation(businessDetails)
      && selectCategoryValidation(selectCategory)
      && selectAccessibilityValidation(selectAccessibility)) {
        typeModal = true;
        openModal = true;
        returnValue = value;
      } else {
        typeModal = false;
        openModal = true;
      }
      break;
    case OTHER_QUESTIONS:
      if (otherQuestionsValidationFresh(otherQuestions)
      && selectCategoryValidation(selectCategory)
      && selectAccessibilityValidation(selectAccessibility)) {
        typeModal = true;
        openModal = true;
        returnValue = value;
        break;
      }
      if (otherQuestionsValidation(otherQuestions)
        && selectCategoryValidation(selectCategory)
        && selectAccessibilityValidation(selectAccessibility)) {
        typeModal = true;
        openModal = true;
        returnValue = value;
        break;
      }
      if (otherQuestionsEmty(otherQuestions)
        || selectCategoryEmty(selectCategory)
        || selectAccessibilityEmty(selectAccessibility)) {
        typeModal = false;
        openModal = true;
      }
      break;
    case CONTACT_DETAILS:
      if (selectCategoryValidation(selectCategory)
        && selectAccessibilityValidation(selectAccessibility)) {
        typeModal = true;
        openModal = true;
        if (value !== HOME) {
          returnValue = value;
        }
      } else {
        typeModal = false;
        openModal = true;
      }
      break;
    default:
      break;
  }
  return ({ type: typeModal, open: openModal, value: returnValue });
};
