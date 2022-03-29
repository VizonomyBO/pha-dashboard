import { useEffect, useState } from 'react';
import { DEFAULT_DROPDOWN_OPTION, TYPE_DRODOWN_BUSINESS } from '../constants';
import { DropdownBusiness } from './DropdownBusiness';
import { useMarketplaceDispatch, useMarketplaceState } from '../store/hooks/marketplaceHook';
import { isEmpty } from '../utils/isEmpty';

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
    setFormComplete(isEmpty(businessDetails.name) && isEmpty(businessDetails.phone)
    && isEmpty(businessDetails.address_1) && isEmpty(businessDetails.city) && isEmpty(businessDetails.state)
    && isEmpty(businessDetails.zipcode));
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress1(e.target.value)}
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress2(e.target.value)}
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}
            value={businessDetails.city}
          />
        </div>
      </div>
      <div className="twoc">
        <div className="item">
          <div className="title">
            <label>State</label>
          </div>
          <DropdownBusiness
            initialState={DEFAULT_DROPDOWN_OPTION.STATES}
            type={TYPE_DRODOWN_BUSINESS.STATE}
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setZipcode(e.target.value)}
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
          <div className="ainput2">
            <DropdownBusiness
              initialState={DEFAULT_DROPDOWN_OPTION.OPEN}
              type={TYPE_DRODOWN_BUSINESS.SUN_OPEN}
            />
          </div>
        </div>
        <div className="item">
          <div className="ainput2">
            <DropdownBusiness
              initialState={DEFAULT_DROPDOWN_OPTION.CLOSE}
              type={TYPE_DRODOWN_BUSINESS.SUN_CLOSE}
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
          <div className="ainput2">
            <DropdownBusiness
              initialState={DEFAULT_DROPDOWN_OPTION.OPEN}
              type={TYPE_DRODOWN_BUSINESS.MON_OPEN}
            />
          </div>
        </div>
        <div className="item">
          <div className="ainput2">
            <DropdownBusiness
              initialState={DEFAULT_DROPDOWN_OPTION.CLOSE}
              type={TYPE_DRODOWN_BUSINESS.MON_CLOSE}
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
          <div className="ainput2">
            <DropdownBusiness
              initialState={DEFAULT_DROPDOWN_OPTION.OPEN}
              type={TYPE_DRODOWN_BUSINESS.TUES_OPEN}
            />
          </div>
        </div>
        <div className="item">
          <div className="ainput2">
            <DropdownBusiness
              initialState={DEFAULT_DROPDOWN_OPTION.CLOSE}
              type={TYPE_DRODOWN_BUSINESS.TUES_CLOSE}
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
          <div className="ainput2">
            <DropdownBusiness
              initialState={DEFAULT_DROPDOWN_OPTION.OPEN}
              type={TYPE_DRODOWN_BUSINESS.WED_OPEN}
            />
          </div>
        </div>
        <div className="item">
          <div className="ainput2">
            <DropdownBusiness
              initialState={DEFAULT_DROPDOWN_OPTION.CLOSE}
              type={TYPE_DRODOWN_BUSINESS.WED_CLOSE}
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
          <div className="ainput2">
            <DropdownBusiness
              initialState={DEFAULT_DROPDOWN_OPTION.OPEN}
              type={TYPE_DRODOWN_BUSINESS.THURS_OPEN}
            />
          </div>
        </div>
        <div className="item">
          <div className="ainput2">
            <DropdownBusiness
              initialState={DEFAULT_DROPDOWN_OPTION.CLOSE}
              type={TYPE_DRODOWN_BUSINESS.THURS_CLOSE}
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
          <div className="ainput2">
            <DropdownBusiness
              initialState={DEFAULT_DROPDOWN_OPTION.OPEN}
              type={TYPE_DRODOWN_BUSINESS.FRI_OPEN}
            />
          </div>
        </div>
        <div className="item">
          <div className="ainput2">
            <DropdownBusiness
              initialState={DEFAULT_DROPDOWN_OPTION.CLOSE}
              type={TYPE_DRODOWN_BUSINESS.FRI_CLOSE}
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
          <div className="ainput2">
            <DropdownBusiness
              initialState={DEFAULT_DROPDOWN_OPTION.OPEN}
              type={TYPE_DRODOWN_BUSINESS.SAT_OPEN}
            />
          </div>
        </div>
        <div className="item">
          <div className="ainput2">
            <DropdownBusiness
              initialState={DEFAULT_DROPDOWN_OPTION.CLOSE}
              type={TYPE_DRODOWN_BUSINESS.SAT_CLOSE}
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWebsite(e.target.value)}
            value={businessDetails.website}
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFacebook(e.target.value)}
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTwitter(e.target.value)}
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInstagram(e.target.value)}
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
