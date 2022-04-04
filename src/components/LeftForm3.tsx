import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMarketplaceDispatch, useMarketplaceState } from '../store/hooks/marketplaceHook';
import { formConstants } from '../constants/form';
import { ModalRequestForm } from './ModalRequestForm';
import { selectAccessibilityValidation, selectCategoryValidation } from '../utils/validation';
import { PAGE_REDIRECT_TIME } from '../constants';

export const LeftForm3 = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [typeModal, setTypeModal] = useState(false);
  const navigate = useNavigate();
  const {
    setContactName, setContactEmail, setContactOwner, setContactPatron
  } = useMarketplaceDispatch();

  const { selectCategory, selectAccessibility } = useMarketplaceState();

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

  const clickProceed = () => {
    if (selectCategoryValidation(selectCategory)
      && selectAccessibilityValidation(selectAccessibility)) {
      setTypeModal(true);
      setVisibleModal(true);
      setTimeout(() => {
        navigate('/home');
      }, PAGE_REDIRECT_TIME);
    } else {
      setTypeModal(false);
      setVisibleModal(true);
    }
  };

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
        <button className="light" type="button" onClick={clickProceed}>
          Proceed
        </button>
      </div>
      <ModalRequestForm
        type={typeModal}
        visible={visibleModal}
        setVisible={setVisibleModal}
      />
    </>
  );
};
