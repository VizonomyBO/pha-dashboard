import classNames from 'classnames';
import { useEffect, useState } from 'react';
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
  OTHER_QUESTIONS
} from '../constants';
import { FormTabType } from '../@types';

export const Form = () => {
  const [activeTab, setActiveTab] = useState(BUSINESS_DETAILS as FormTabType);
  const [formClass, setFormClass] = useState('form1');
  const barBlueClass = classNames('barblue', { [CLASSES_BY_FORM[activeTab]]: true });
  const formAreaClass = classNames('formarea', { [formClass]: true });

  useEffect(() => {
    setFormClass(CLASSES_BY_FORM[activeTab]);
  }, [activeTab]);

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
            </div>
            <div className="right">
              <RightForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
