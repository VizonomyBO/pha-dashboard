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

export const Form = () => {
  const [active, setActive] = useState(BUSINESS_DETAILS as string);
  const [formClass, setFormClass] = useState('form1');

  useEffect(() => {
    setFormClass(CLASSES_BY_FORM[active]);
  }, [active]);

  return (
    <div className="container">
      <div className="bgwhite" />
      <figure className="bgnoise home" />
      <div className={`barblue ${formClass}`} />
      <div className="pagecontainer">
        <Navbar />
        <Header />
        <div className={`formarea ${formClass}`}>
          <FormHeader
            active={active}
            setActive={setActive}
          />
          <div className="group">
            <div className="left">
              {active === BUSINESS_DETAILS && (
                <LeftForm1 />
              )}
              {active === OTHER_QUESTIONS && (
                <LeftForm2 />
              )}
              {active === CONTACT_DETAILS && (
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
