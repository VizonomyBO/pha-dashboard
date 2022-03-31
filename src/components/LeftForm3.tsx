import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMarketplaceDispatch } from '../store/hooks/marketplaceHook';
import { formConstants } from '../constants/form';
import { ModalRequestForm } from './ModalRequestForm';

export const LeftForm3 = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [clickProceed, setClickProceed] = useState(false);
  const navigate = useNavigate();
  const {
    setContactName, setContactEmail, setContactOwner, setContactPatron
  } = useMarketplaceDispatch();

  const setName = (e: React.FormEvent<HTMLInputElement>): void => {
    setContactName(e.currentTarget.value);
  };

  const setEmail = (e: React.FormEvent<HTMLInputElement>): void => {
    setContactEmail(e.currentTarget.value);
  };

  const setContactOwnerFunction = (e: React.FormEvent<HTMLInputElement>): void => {
    if (e.currentTarget.checked) {
      setContactOwner(formConstants.CONTACT_OWNER.YES);
    } else {
      setContactOwner(formConstants.CONTACT_OWNER.NO);
    }
  };

  const setContactPatronFunction = (e: React.FormEvent<HTMLInputElement>): void => {
    if (e.currentTarget.checked) {
      setContactPatron(formConstants.CONTACT_PATRON.YES);
    } else {
      setContactPatron(formConstants.CONTACT_PATRON.NO);
    }
  };

  useEffect(() => {
    setContactOwner(formConstants.CONTACT_OWNER.NO);
    setContactPatron(formConstants.CONTACT_PATRON.NO);
  }, [setContactOwner, setContactPatron]);

  useEffect(() => {
    if (clickProceed) {
      setTimeout(() => {
        navigate('/home');
      }, 3000);
      setVisibleModal(true);
    }
  }, [clickProceed]);

  return (
    <>
      <div className="item">
        <div className="title">
          <label>Your Name</label>
        </div>
        <div className="ainput">
          <input
            className="light"
            type="text"
            onChange={setName}
          />
        </div>
      </div>
      <div className="item">
        <div className="title">
          <label>Your Email</label>
        </div>
        <div className="ainput">
          <input
            className="light"
            type="text"
            onChange={setEmail}
          />
        </div>
      </div>
      <div className="item">
        <div className="title grouped" />
        <div className="ainput chk">
          <label className="chkwrap">
            I am the owner/manager of the business.
            <input
              type="checkbox"
              onChange={setContactOwnerFunction}
            />
            <span className="checkmark" />
          </label>
          <label className="chkwrap">
            I am patron of this business.
            <input
              type="checkbox"
              onChange={setContactPatronFunction}
            />
            <span className="checkmark" />
          </label>
        </div>
      </div>
      <div className="aaction">
        <button className="light" type="button" onClick={() => setClickProceed(true)}>
          Proceed
        </button>
      </div>
      <ModalRequestForm
        type={visibleModal}
        visible={visibleModal}
        setVisible={setVisibleModal}
      />
    </>
  );
};
