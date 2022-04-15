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
import { useTabDispatch, useTabState } from '../store/hooks/tabHook';
import { webRequest } from '../utils/webRequest';
import { ENDPOINTS } from '../constants/url';
import { getPhaRetailerBody } from '../utils/getPhaRetailerBody';

export const Form = () => {
  const { activeTab } = useTabState();
  const { setActiveTab } = useTabDispatch();
  const [, setFormClass] = useState(CLASSES_BY_FORM[activeTab]);
  const barBlueClass = classNames('barblue', { [CLASSES_BY_FORM[activeTab]]: true });
  const { setModal } = useModalDispatch();
  const navigate = useNavigate();
  const {
    businessDetails,
    selectCategory,
    selectAccessibility,
    otherQuestions,
    contactDetails,
    files
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
    if (!estate.type) {
      setModal({ type: estate.type, open: true });
    }
    if (value === HOME) {
      const headers = webRequest.generateMultipartHeader();
      const bodyGen = getPhaRetailerBody();
      // eslint-disable-next-line max-len
      const body = bodyGen(businessDetails)(contactDetails)(otherQuestions)(selectCategory)(selectAccessibility)(files)()();
      const formData = new FormData();
      formData.append('json', JSON.stringify(body.json));
      body.images.forEach((image: Blob) => {
        formData.append('images', image);
      });
      body.ownerimages.forEach((image: Blob) => {
        formData.append('ownerimages', image);
      });
      webRequest.postMultipart(
        ENDPOINTS.PHA_RETAILERS(),
        formData,
        headers
      ).then((res) => res.json()).then((res) => {
        if (res.success) {
          setModal({ type: estate.type, open: estate.open });
          setTimeout(() => {
            navigate('/home');
          }, PAGE_REDIRECT_TIME);
        }
      });
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
          clickProceed={clickProceed}
        />
      </div>
      <ModalRequestForm />
    </div>
  );
};
