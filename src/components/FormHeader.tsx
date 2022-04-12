import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { FormHeaderInterface, FormTabType } from '../@types';
import {
  businessDetailsValidation,
  otherQuestionsEmty,
  otherQuestionsValidation,
  otherQuestionsValidationFresh,
  selectAccessibilityEmty,
  selectAccessibilityValidation,
  selectCategoryEmty,
  selectCategoryValidation
} from '../utils/validation';
import { BUSINESS_DETAILS, CONTACT_DETAILS, OTHER_QUESTIONS } from '../constants';
import { useMarketplaceState, useModalDispatch } from '../store/hooks';

export const FormHeader = ({ activeTab, setActiveTab }: FormHeaderInterface) => {
  const {
    businessDetails,
    selectCategory,
    selectAccessibility,
    otherQuestions
  } = useMarketplaceState();
  const { setModal } = useModalDispatch();
  const businessClass = classNames('option', { active: activeTab === BUSINESS_DETAILS });
  const otherClass = classNames('option', { active: activeTab === OTHER_QUESTIONS });
  const contactClass = classNames('option', { active: activeTab === CONTACT_DETAILS });
  const validationForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (activeTab) {
      case BUSINESS_DETAILS:
        if (businessDetailsValidation(businessDetails)
        && selectCategoryValidation(selectCategory)
        && selectAccessibilityValidation(selectAccessibility)) {
          setModal({ type: true, open: true });
          if (setActiveTab) {
            setActiveTab(event.target.value as FormTabType);
          }
        } else {
          setModal({ type: false, open: true });
        }
        break;
      case OTHER_QUESTIONS:
        if (otherQuestionsValidationFresh(otherQuestions)
        && selectCategoryValidation(selectCategory)
        && selectAccessibilityValidation(selectAccessibility)) {
          setModal({ type: true, open: true });
          setActiveTab(event.target.value as FormTabType);
        }
        if (otherQuestionsValidation(otherQuestions)
          && selectCategoryValidation(selectCategory)
          && selectAccessibilityValidation(selectAccessibility)) {
          setModal({ type: true, open: true });
          setActiveTab(event.target.value as FormTabType);
        }
        if (otherQuestionsEmty(otherQuestions)
          || selectCategoryEmty(selectCategory)
          || selectAccessibilityEmty(selectAccessibility)) {
          setModal({ type: false, open: true });
        }
        break;
      case CONTACT_DETAILS:
        if (selectCategoryValidation(selectCategory)
          && selectAccessibilityValidation(selectAccessibility)) {
          setModal({ type: true, open: true });
          setActiveTab(event.target.value as FormTabType);
        } else {
          setModal({ type: false, open: true });
        }
        break;
      default:
        setActiveTab(activeTab as FormTabType);
        break;
    }
  };
  return (
    <div className="header">
      <div className="backlink">
        <Link to="/home">
          <button className="light" type="button">
            <span className="icarrowleft">
              <span className="txt">Back to Locations</span>
            </span>
          </button>
        </Link>
      </div>
      <h2 className="sectitle">Marketplace Request Form</h2>
      <p className="secdescription">Have a location listed by completing the form below</p>
      <div
        className="optiondetail"
        onChange={validationForm}
      >
        <div className={businessClass}>
          <label className="chkwrap">
            Business Details
            <input
              type="radio"
              value={BUSINESS_DETAILS}
              name="option"
            />
            <span className="checkmark" />
          </label>
        </div>
        <div className={otherClass}>
          <label className="chkwrap">
            Other Questions
            <input
              type="radio"
              value={OTHER_QUESTIONS}
              name="option"
            />
            <span className="checkmark" />
          </label>
        </div>
        <div className={contactClass}>
          <label className="chkwrap">
            Contact Details
            <input
              type="radio"
              value={CONTACT_DETAILS}
              name="option"
            />
            <span className="checkmark" />
          </label>
        </div>
      </div>
    </div>
  );
};
