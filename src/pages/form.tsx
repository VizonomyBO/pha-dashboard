import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LeftForm1 } from '../components/LeftForm1';
import { LeftForm2 } from '../components/LeftForm2';
import { LeftForm3 } from '../components/LeftForm3';
import { FormHeader } from '../components/FormHeader';
import { RightForm } from '../components/RightForm';
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import {
  BUSINESS_DETAILS,
  CLASSES_BY_FORM,
  CONTACT_DETAILS,
  OTHER_QUESTIONS,
  PAGE_REDIRECT_TIME
} from '../constants';
import { FormTabType } from '../@types';
import { ModalRequestForm } from '../components/ModalRequestForm';
import { useMarketplaceState, useModalDispatch } from '../store/hooks';
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

export const Form = () => {
  const [activeTab, setActiveTab] = useState(BUSINESS_DETAILS as FormTabType);
  const [formClass, setFormClass] = useState(CLASSES_BY_FORM[activeTab]);
  const barBlueClass = classNames('barblue', { [CLASSES_BY_FORM[activeTab]]: true });
  const formAreaClass = classNames('formarea', { [formClass]: true });
  const navigate = useNavigate();
  const { setModal } = useModalDispatch();
  const {
    businessDetails,
    selectCategory,
    selectAccessibility,
    otherQuestions
  } = useMarketplaceState();
  useEffect(() => {
    setFormClass(CLASSES_BY_FORM[activeTab]);
  }, [activeTab]);
  const clickProceed = () => {
    switch (activeTab) {
      case BUSINESS_DETAILS:
        if (businessDetailsValidation(businessDetails)
        && selectCategoryValidation(selectCategory)
        && selectAccessibilityValidation(selectAccessibility)) {
          setModal({ type: true, open: true });
          if (setActiveTab) {
            setActiveTab(OTHER_QUESTIONS);
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
          setActiveTab(CONTACT_DETAILS as FormTabType);
        }
        if (otherQuestionsValidation(otherQuestions)
          && selectCategoryValidation(selectCategory)
          && selectAccessibilityValidation(selectAccessibility)) {
          setModal({ type: true, open: true });
          setActiveTab(CONTACT_DETAILS as FormTabType);
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
          setTimeout(() => {
            navigate('/home');
          }, PAGE_REDIRECT_TIME);
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
    <div className="container">
      <div className="bgwhite" />
      <figure className="bgnoise home" />
      <div className={barBlueClass} />
      <div className="pagecontainer">
        <Navbar />
        <Header />
        <div className={formAreaClass}>
          <FormHeader
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <div className="group">
            <div className="left">
              {activeTab === BUSINESS_DETAILS && (
                <LeftForm1 />
              )}
              {activeTab === OTHER_QUESTIONS && (
                <LeftForm2 />
              )}
              {activeTab === CONTACT_DETAILS && (
                <LeftForm3 />
              )}
              <div className="aaction">
                <button className="light" type="button" onClick={clickProceed}>
                  Proceed
                </button>
              </div>
            </div>
            <div className="right">
              <RightForm />
            </div>
          </div>
        </div>
      </div>
      <ModalRequestForm />
    </div>
  );
};
