import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import {
  BUSINESS_DETAILS,
  CLASSES_BY_FORM,
  CONTACT_DETAILS,
  HOME,
  OTHER_QUESTIONS,
  PAGE_REDIRECT_TIME
} from '../constants';
import { FormTabType } from '../@types';
import { ModalRequestForm } from '../components/ModalRequestForm';
import { useMarketplaceState, useModalDispatch } from '../store/hooks';
import { Formvalidation } from '../utils/validation';
import { FormArea } from '../components/FormArea';

export const Form = () => {
  const [activeTab, setActiveTab] = useState(BUSINESS_DETAILS as FormTabType);
  const [, setFormClass] = useState(CLASSES_BY_FORM[activeTab]);
  const barBlueClass = classNames('barblue', { [CLASSES_BY_FORM[activeTab]]: true });
  const { setModal } = useModalDispatch();
  const navigate = useNavigate();
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
    let value = BUSINESS_DETAILS;
    switch (activeTab) {
      case BUSINESS_DETAILS:
        value = OTHER_QUESTIONS;
        break;
      case OTHER_QUESTIONS:
        value = CONTACT_DETAILS;
        break;
      case CONTACT_DETAILS:
        value = HOME;
        break;
      default:
        break;
    }
    const estate = Formvalidation(
      value,
      activeTab,
      businessDetails,
      selectCategory,
      selectAccessibility,
      otherQuestions
    );
    setModal({ type: estate.type, open: estate.open });
    if (value === HOME) {
      setTimeout(() => {
        navigate('/home');
      }, PAGE_REDIRECT_TIME);
    } else {
      setActiveTab(estate.value as FormTabType);
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
        <FormArea
          isModal={false}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          clickProceed={clickProceed}
        />
      </div>
      <ModalRequestForm />
    </div>
  );
};
