import { useEffect, useState } from 'react';
import { NAME_DROPDOWN, TYPE_DROPDOWN } from '../constants';
import { DropdownSelect } from './DropdownSelect';
import { useMarketplaceDispatch, useMarketplaceState } from '../store/hooks/marketplaceHook';

export const LeftForm1 = () => {
  const {
    setName,
    setAddress1,
    setAddress2,
    setCity,
    setPhone,
    setZipcode,
    setEmail,
    setFacebook,
    setInstagram,
    setTwitter,
    setWebsite
  } = useMarketplaceDispatch();
  const { businessDetails } = useMarketplaceState();
  const [formComplete, setFormComplete] = useState(false);
  useEffect(() => {
    if (businessDetails.name !== '' && businessDetails.address_1 !== '' && businessDetails.phone !== ''
    && businessDetails.city !== '' && businessDetails.state && businessDetails.zipcode) {
      setFormComplete(true);
    } else {
      setFormComplete(false);
    }
  }, [businessDetails]);
  return (
    <>
      <div className="sectiontitle">
        Business Listing
      </div>
      <div className="item">
        <div className="title">
          <label>Business Name</label>
        </div>
        <div className="ainput">
          <input
            className="light"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={businessDetails.name}
          />
        </div>
      </div>
      <div className="item">
        <div className="title">
          <label>Address Line 1</label>
        </div>
        <div className="ainput">
          <input
            className="light"
            type="text"
            onChange={(e) => setAddress1(e.target.value)}
            value={businessDetails.address_1}
          />
        </div>
      </div>
      <div className="item">
        <div className="title">
          <label>Address Line 2</label>
        </div>
        <div className="ainput">
          <input
            className="light"
            type="text"
            onChange={(e) => setAddress2(e.target.value)}
            value={businessDetails.address_2}
          />
        </div>
      </div>
      <div className="item">
        <div className="title">
          <label>Phone Number</label>
        </div>
        <div className="ainput">
          <input
            className="light"
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            value={businessDetails.phone}
          />
        </div>
      </div>
      <div className="item">
        <div className="title">
          <label>City</label>
        </div>
        <div className="ainput">
          <input
            className="light"
            type="text"
            onChange={(e) => setCity(e.target.value)}
            value={businessDetails.city}
          />
        </div>
      </div>
      <div className="twoc">
        <div className="item">
          <div className="title">
            <label>State</label>
          </div>
          <DropdownSelect
            initialState={NAME_DROPDOWN.STATES}
            type={TYPE_DROPDOWN.STATE}
          />
        </div>
        <div className="item">
          <div className="title">
            <label>Zip / Postal Code</label>
          </div>
          <div className="ainput2">
            <input
              className="light"
              type="text"
              onChange={(e) => setZipcode(e.target.value)}
              value={businessDetails.zipcode}
            />
          </div>
        </div>
      </div>
      <div className="sectiontitle second">
        Hours:
      </div>
      <div className="threec">
        <div className="item">
          <div className="title">
            <label>Sun:</label>
          </div>
        </div>
        <div className="item">
          <div className="title">
            <label />
          </div>
          <div className="ainput2">
            <DropdownSelect
              initialState={NAME_DROPDOWN.OPEN}
              type={TYPE_DROPDOWN.SUN_OPEN}
            />
          </div>
        </div>
        <div className="item">
          <div className="title">
            <label />
          </div>
          <div className="ainput2">
            <DropdownSelect
              initialState={NAME_DROPDOWN.CLOSE}
              type={TYPE_DROPDOWN.SUN_CLOSE}
            />
          </div>
        </div>
      </div>
      <div className="threec">
        <div className="item">
          <div className="title">
            <label>Mon:</label>
          </div>
        </div>
        <div className="item">
          <div className="title">
            <label />
          </div>
          <div className="ainput2">
            <DropdownSelect
              initialState={NAME_DROPDOWN.OPEN}
              type={TYPE_DROPDOWN.MON_OPEN}
            />
          </div>
        </div>
        <div className="item">
          <div className="title">
            <label />
          </div>
          <div className="ainput2">
            <DropdownSelect
              initialState={NAME_DROPDOWN.CLOSE}
              type={TYPE_DROPDOWN.MON_CLOSE}
            />
          </div>
        </div>
      </div>
      <div className="threec">
        <div className="item">
          <div className="title">
            <label>Tue:</label>
          </div>
        </div>
        <div className="item">
          <div className="title">
            <label />
          </div>
          <div className="ainput2">
            <DropdownSelect
              initialState={NAME_DROPDOWN.OPEN}
              type={TYPE_DROPDOWN.TUE_OPEN}
            />
          </div>
        </div>
        <div className="item">
          <div className="title">
            <label />
          </div>
          <div className="ainput2">
            <DropdownSelect
              initialState={NAME_DROPDOWN.CLOSE}
              type={TYPE_DROPDOWN.TUE_CLOSE}
            />
          </div>
        </div>
      </div>
      <div className="threec">
        <div className="item">
          <div className="title">
            <label>Wed:</label>
          </div>
        </div>
        <div className="item">
          <div className="title">
            <label />
          </div>
          <div className="ainput2">
            <DropdownSelect
              initialState={NAME_DROPDOWN.OPEN}
              type={TYPE_DROPDOWN.WED_OPEN}
            />
          </div>
        </div>
        <div className="item">
          <div className="title">
            <label />
          </div>
          <div className="ainput2">
            <DropdownSelect
              initialState={NAME_DROPDOWN.CLOSE}
              type={TYPE_DROPDOWN.WED_CLOSE}
            />
          </div>
        </div>
      </div>
      <div className="threec">
        <div className="item">
          <div className="title">
            <label>Thu:</label>
          </div>
        </div>
        <div className="item">
          <div className="title">
            <label />
          </div>
          <div className="ainput2">
            <DropdownSelect
              initialState={NAME_DROPDOWN.OPEN}
              type={TYPE_DROPDOWN.THU_OPEN}
            />
          </div>
        </div>
        <div className="item">
          <div className="title">
            <label />
          </div>
          <div className="ainput2">
            <DropdownSelect
              initialState={NAME_DROPDOWN.CLOSE}
              type={TYPE_DROPDOWN.THU_CLOSE}
            />
          </div>
        </div>
      </div>
      <div className="threec">
        <div className="item">
          <div className="title">
            <label>Fri:</label>
          </div>
        </div>
        <div className="item">
          <div className="title">
            <label />
          </div>
          <div className="ainput2">
            <DropdownSelect
              initialState={NAME_DROPDOWN.OPEN}
              type={TYPE_DROPDOWN.FRI_OPEN}
            />
          </div>
        </div>
        <div className="item">
          <div className="title">
            <label />
          </div>
          <div className="ainput2">
            <DropdownSelect
              initialState={NAME_DROPDOWN.CLOSE}
              type={TYPE_DROPDOWN.FRI_CLOSE}
            />
          </div>
        </div>
      </div>
      <div className="threec">
        <div className="item">
          <div className="title">
            <label>Sat:</label>
          </div>
        </div>
        <div className="item">
          <div className="title">
            <label />
          </div>
          <div className="ainput2">
            <DropdownSelect
              initialState={NAME_DROPDOWN.OPEN}
              type={TYPE_DROPDOWN.SAT_OPEN}
            />
          </div>
        </div>
        <div className="item">
          <div className="title">
            <label />
          </div>
          <div className="ainput2">
            <DropdownSelect
              initialState={NAME_DROPDOWN.CLOSE}
              type={TYPE_DROPDOWN.SAT_CLOSE}
            />
          </div>
        </div>
      </div>
      <div className="sectiontitle second">
        Social Media Info
      </div>
      <div className="item">
        <div className="title">
          <label>Website</label>
        </div>
        <div className="ainput">
          <input
            className="light"
            type="text"
            onChange={(e) => setWebsite(e.target.value)}
            value={businessDetails.address_1}
          />
        </div>
      </div>
      <div className="item">
        <div className="title">
          <label>Facebook Page</label>
        </div>
        <div className="ainput">
          <input
            className="light"
            type="text"
            onChange={(e) => setFacebook(e.target.value)}
            value={businessDetails.facebook}
          />
        </div>
      </div>
      <div className="item">
        <div className="title">
          <label>Twitter Page</label>
        </div>
        <div className="ainput">
          <input
            className="light"
            type="text"
            onChange={(e) => setTwitter(e.target.value)}
            value={businessDetails.twitter}
          />
        </div>
      </div>
      <div className="item">
        <div className="title">
          <label>Email</label>
        </div>
        <div className="ainput">
          <input
            className="light"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={businessDetails.email}
          />
        </div>
      </div>
      <div className="item">
        <div className="title">
          <label>Instagram Page</label>
        </div>
        <div className="ainput">
          <input
            className="light"
            type="text"
            onChange={(e) => setInstagram(e.target.value)}
            value={businessDetails.instagram}
          />
        </div>
      </div>
      <div className="aaction">
        <button className="light" type="button" disabled={!formComplete}>
          Proceed
        </button>
      </div>
    </>
  );
};
