import React from 'react';
import { useMarketplaceDispatch, useMarketplaceState } from '../store/hooks/marketplaceHook';
import { formConstants } from '../constants/form';

export const LeftForm3 = () => {
  const {
    setContactName, setContactEmail, setContactOwner, setContactPatron
  } = useMarketplaceDispatch();
  const {
    contactDetails: {
      contact_name,
      contact_email,
      contact_owner,
      contact_patron
    }
  } = useMarketplaceState();

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

  return (
    <>
      <div className="item">
        <div className="title grouped" />
        <div className="ainput chk">
          <label className="chkwrap">
            I am the owner/manager of the business.
            <input
              type="checkbox"
              value={contact_owner}
              checked={contact_owner === formConstants.CONTACT_OWNER.YES}
              onChange={setContactOwnerFunction}
            />
            <span className="checkmark ckeckmark-form" />
          </label>
          <label className="chkwrap">
            I am patron of this business.
            <input
              type="checkbox"
              checked={contact_patron === formConstants.CONTACT_PATRON.YES}
              value={contact_patron}
              onChange={setContactPatronFunction}
            />
            <span className="checkmark ckeckmark-form" />
          </label>
        </div>
      </div>
      {contact_owner === formConstants.CONTACT_OWNER.YES && (
        <div className="item">
          <div className="title">
            <label>Your Name</label>
          </div>
          <div className="ainput">
            <input
              className="light"
              type="text"
              value={contact_name}
              onChange={setName}
            />
          </div>
        </div>
      )}
      <div className="item">
        <div className="title">
          <label>Your Email</label>
        </div>
        <div className="ainput">
          <input
            className="light"
            type="text"
            value={contact_email}
            onChange={setEmail}
          />
        </div>
      </div>
    </>
  );
};
