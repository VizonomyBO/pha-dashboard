import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
  HOME,
  OTHER_QUESTIONS,
  PAGE_REDIRECT_TIME,
  DASHBOARD
} from '../constants';
import { FormTabType } from '../@types';
import { ModalRequestForm } from '../components/ModalRequestForm';
import { useMarketplaceState, useModalDispatch } from '../store/hooks';
import { Formvalidation } from '../utils/validation';
import { ENDPOINTS } from '../constants/url';
import { webRequest } from '../utils/webRequest';

export const Form = () => {
  const [activeTab, setActiveTab] = useState(BUSINESS_DETAILS as FormTabType);
  const [formClass, setFormClass] = useState(CLASSES_BY_FORM[activeTab]);
  const [dataphaRetailer, setDdataphaRetailer] = useState();
  const barBlueClass = classNames('barblue', { [CLASSES_BY_FORM[activeTab]]: true });
  const formAreaClass = classNames('formarea', { [formClass]: true });
  const { setModal } = useModalDispatch();
  const navigate = useNavigate();
  const {
    businessDetails,
    selectCategory,
    selectAccessibility,
    otherQuestions
  } = useMarketplaceState();
  const location = useLocation();
  const id = location.state;

  useEffect(() => {
    if (id && id !== DASHBOARD) {
      webRequest.get(ENDPOINTS.PROFILE(String(id))).then((resp) => resp.json())
        .then((resp) => setDdataphaRetailer(resp.data)).catch((err) => console.error(err));
    }
  }, [id]);

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
        <div className={formAreaClass}>
          <FormHeader
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <div className="group">
            <div className="left">
              {activeTab === BUSINESS_DETAILS && (
                <LeftForm1 dataphaRetailer={dataphaRetailer} />
              )}
              {activeTab === OTHER_QUESTIONS && (
                <LeftForm2 dataphaRetailer={dataphaRetailer} />
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
