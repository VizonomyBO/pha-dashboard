import { useState } from 'react';
import { useMarketplaceDispatch } from '../store/hooks/marketplaceHook';

export const LeftForm3 = () => {
  console.log('LeftForm3');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [owner, setOwner] = useState('');
  const [patron, setPatron] = useState('');
  const { setContactDetails } = useMarketplaceDispatch();
  const onchangeForm = () => {
    setContactDetails({
      contact_name: name,
      contact_email: email,
      contact_owner: owner,
      contact_patron: patron
    });
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
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => {
                if (e.target.checked) setOwner('yes');
                else setOwner('No');
              }}
            />
            <span className="checkmark" />
          </label>
          <label className="chkwrap">
            I am patron of this business.
            <input
              type="checkbox"
              onChange={(e) => {
                if (e.target.checked) setPatron('yes');
                else setPatron('No');
              }}
            />
            <span className="checkmark" />
          </label>
        </div>
      </div>
      <div className="aaction">
        <button className="light" type="button" onClick={() => onchangeForm()}>
          Proceed
        </button>
      </div>
    </>
  );
};
