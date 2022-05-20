import { PhaIndividualValidation, validationText } from '../@types';
import {
  BusinessDetailsInterface,
  OtherQuestionsInterface,
  SelectAccessibilityInterface,
  SelectCategoryInterface
} from '../@types/redux';
import {
  BUSINESS_DETAILS,
  CONTACT_DETAILS,
  HOME,
  MARKED_ELEMENT,
  MARKED_FRESH,
  MAX_TEXT,
  OTHER_QUESTIONS
} from '../constants';

export const isEmpty = (field: string | undefined) => !!field;

export const isLiteralYes = (field: string) => field === MARKED_ELEMENT;

export const businessDetailsValidation = (businessDetails: BusinessDetailsInterface) => {
  if (isEmpty(businessDetails.name) && isEmpty(businessDetails.phone)
  && isEmpty(businessDetails.address_1) && isEmpty(businessDetails.city) && isEmpty(businessDetails.state)
  && isEmpty(businessDetails.zipcode)) {
    return true;
  }
  return false;
};

export const selectCategoryValidation = (selectCategory: SelectCategoryInterface) => {
  if (isLiteralYes(selectCategory.supermarket)
  || isLiteralYes(selectCategory.corner_store) || isLiteralYes(selectCategory.dollar_stores)
  || isLiteralYes(selectCategory.food_pantry) || isLiteralYes(selectCategory.distribution)
  || isLiteralYes(selectCategory.food_co_op)) {
    return true;
  }
  return false;
};

export const selectAccessibilityValidation = (selectAccessibility: SelectAccessibilityInterface) => {
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

export const selectCategoryEmty = (selectCategory: SelectCategoryInterface) => {
  if (!isLiteralYes(selectCategory.supermarket)
  && !isLiteralYes(selectCategory.corner_store) && !isLiteralYes(selectCategory.dollar_stores)
  && !isLiteralYes(selectCategory.food_pantry) && !isLiteralYes(selectCategory.distribution)
  && !isLiteralYes(selectCategory.food_co_op)) {
    return true;
  }
  return false;
};

export const selectAccessibilityEmty = (selectAccessibility: SelectAccessibilityInterface) => {
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
  selectCategory: SelectCategoryInterface,
  otherQuestions: OtherQuestionsInterface
) => {
  let returnValue = activeTab;
  let typeModal = false;
  let openModal = false;
  switch (activeTab) {
    case BUSINESS_DETAILS:
      if (businessDetailsValidation(businessDetails)
      && selectCategoryValidation(selectCategory)) {
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
      && selectCategoryValidation(selectCategory)) {
        typeModal = true;
        openModal = true;
        returnValue = value;
        break;
      }
      if (otherQuestionsValidation(otherQuestions)
        && selectCategoryValidation(selectCategory)) {
        typeModal = true;
        openModal = true;
        returnValue = value;
        break;
      }
      if (otherQuestionsEmty(otherQuestions)
        || selectCategoryEmty(selectCategory)) {
        typeModal = false;
        openModal = true;
      }
      if (activeTab === OTHER_QUESTIONS && value === BUSINESS_DETAILS) {
        returnValue = value;
      }
      break;
    case CONTACT_DETAILS:
      if (selectCategoryValidation(selectCategory)) {
        typeModal = true;
        openModal = true;
        if (value !== HOME) {
          returnValue = value;
        }
      } else {
        typeModal = false;
        openModal = true;
      }
      if (activeTab === CONTACT_DETAILS && (value === BUSINESS_DETAILS || value === OTHER_QUESTIONS)) {
        returnValue = value;
      }
      break;
    default:
      break;
  }
  return ({ type: typeModal, open: openModal, value: returnValue });
};

export const deleteBreakLines = ({ value }: validationText) => (
  value.replace(/(\r\n|\n|\r)/gm, ' ')
);

export const ValidationDeleteBreakLines = (text: string, setText: (value: string) => void) => {
  const numbertext = deleteBreakLines({ value: text });
  if (numbertext.split(' ').length <= MAX_TEXT) {
    setText(numbertext);
  }
};

export const validationIndividualForm = ({
  availability
}: PhaIndividualValidation) => (
  (isEmpty(availability))
);
