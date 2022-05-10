/* eslint-disable jsx-a11y/no-static-element-interactions */
import { DEFAULT_DROPDOWN_OPTION, TYPE_BUSINESS } from '../constants';
import { DropdownBusiness } from './DropdownBusiness';
import { useMarketplaceDispatch, useMarketplaceState } from '../store/hooks/marketplaceHook';
import { DropdownAddress } from './map/DropdownAddress';
import { isEmpty } from '../utils/validation';

const selectScheduleDropdownValue = (defaultOption: string) => (option: string) => {
  const response = option && option.length ? option : defaultOption;
  return response;
};

const openSchedule = selectScheduleDropdownValue(DEFAULT_DROPDOWN_OPTION.OPEN);
const closeSchedule = selectScheduleDropdownValue(DEFAULT_DROPDOWN_OPTION.CLOSE);

export const LeftForm1 = () => {
  const { setBusinessDetails } = useMarketplaceDispatch();
  const { businessDetails } = useMarketplaceState();
  const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.validity.valid) {
      setBusinessDetails(TYPE_BUSINESS.PHONE, e.target.value);
    }
  };
  return (
    <>
      <div className="sectiontitle">
        Business Listing
      </div>
      <div className="item">
        <div className="title">
          <label>
            Business Name
            <sup>*</sup>
          </label>
        </div>
        <div className="ainput">
          <input
            className="light"
            type="text"
            onChange={
              (e: React.ChangeEvent<HTMLInputElement>) => setBusinessDetails(TYPE_BUSINESS.NAME, e.target.value)
            }
            value={businessDetails && businessDetails.name}
          />
        </div>
      </div>
      <div className="item">
        <div className="title">
          <label>
            Address Line 1
            <sup>*</sup>
          </label>
        </div>
        <div className="dropdownAddress">
          <DropdownAddress
            type={TYPE_BUSINESS.ADDRESS_1}
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
            onChange={
              (e: React.ChangeEvent<HTMLInputElement>) => setBusinessDetails(TYPE_BUSINESS.ADDRESS_2, e.target.value)
            }
            value={businessDetails && businessDetails.address_2}
          />
        </div>
      </div>
      <div className="item">
        <div className="title">
          <label>
            Phone Number
            <sup>*</sup>
          </label>
        </div>
        <div className="ainput">
          <input
            className="light"
            type="text"
            pattern="[0-9]*"
            maxLength={10}
            onChange={
              (e: React.ChangeEvent<HTMLInputElement>) => handlePhoneNumber(e)
            }
            value={businessDetails && businessDetails.phone}
          />
        </div>
      </div>
      <div className="item">
        <div className="title">
          <label>
            City
            <sup>*</sup>
          </label>
        </div>
        <div className="ainput">
          <input
            className="light"
            type="text"
            onChange={
              (e: React.ChangeEvent<HTMLInputElement>) => setBusinessDetails(TYPE_BUSINESS.CITY, e.target.value)
            }
            value={businessDetails && businessDetails.city}
          />
        </div>
      </div>
      <div className="twoc">
        <div className="item">
          <div className="title">
            <label>
              State
              <sup>*</sup>
            </label>
          </div>
          <DropdownBusiness
            initialState={DEFAULT_DROPDOWN_OPTION.STATES}
            type={TYPE_BUSINESS.STATE}
          />
        </div>
        <div className="item">
          <div className="title">
            <label>
              Zip / Postal Code
              <sup>*</sup>
            </label>
          </div>
          <div className="ainput2">
            <input
              className="light"
              type="text"
              onChange={
                (e: React.ChangeEvent<HTMLInputElement>) => setBusinessDetails(TYPE_BUSINESS.ZIPCODE, e.target.value)
              }
              value={businessDetails && businessDetails.zipcode}
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
              initialState={openSchedule(businessDetails.sun_open)}
              type={TYPE_BUSINESS.SUN_OPEN}
            />
          </div>
        </div>
        <div className="item">
          <div className="ainput2">
            <DropdownBusiness
              initialState={closeSchedule(businessDetails.sun_close)}
              type={TYPE_BUSINESS.SUN_CLOSE}
            />
          </div>
          {(isEmpty(businessDetails.sun_open) || isEmpty(businessDetails.sun_close)) && (
            <span
              className="ic-circle-clear"
              onClick={() => {
                setBusinessDetails(TYPE_BUSINESS.SUN_OPEN, '');
                setBusinessDetails(TYPE_BUSINESS.SUN_CLOSE, '');
              }}
            />
          )}
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
              initialState={openSchedule(businessDetails.mon_open)}
              type={TYPE_BUSINESS.MON_OPEN}
            />
          </div>
        </div>
        <div className="item">
          <div className="ainput2">
            <DropdownBusiness
              initialState={closeSchedule(businessDetails.mon_close)}
              type={TYPE_BUSINESS.MON_CLOSE}
            />
          </div>
          {(isEmpty(businessDetails.mon_open) || isEmpty(businessDetails.mon_close)) && (
            <span
              className="ic-circle-clear"
              onClick={() => {
                setBusinessDetails(TYPE_BUSINESS.MON_OPEN, '');
                setBusinessDetails(TYPE_BUSINESS.MON_CLOSE, '');
              }}
            />
          )}
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
              initialState={openSchedule(businessDetails.tues_open)}
              type={TYPE_BUSINESS.TUES_OPEN}
            />
          </div>
        </div>
        <div className="item">
          <div className="ainput2">
            <DropdownBusiness
              initialState={closeSchedule(businessDetails.tues_close)}
              type={TYPE_BUSINESS.TUES_CLOSE}
            />
          </div>
          {(isEmpty(businessDetails.tues_open) || isEmpty(businessDetails.tues_close)) && (
            <span
              className="ic-circle-clear"
              onClick={() => {
                setBusinessDetails(TYPE_BUSINESS.TUES_OPEN, '');
                setBusinessDetails(TYPE_BUSINESS.TUES_CLOSE, '');
              }}
            />
          )}
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
              initialState={openSchedule(businessDetails.wed_open)}
              type={TYPE_BUSINESS.WED_OPEN}
            />
          </div>
        </div>
        <div className="item">
          <div className="ainput2">
            <DropdownBusiness
              initialState={closeSchedule(businessDetails.wed_close)}
              type={TYPE_BUSINESS.WED_CLOSE}
            />
          </div>
          {(isEmpty(businessDetails.wed_open) || isEmpty(businessDetails.wed_close)) && (
            <span
              className="ic-circle-clear"
              onClick={() => {
                setBusinessDetails(TYPE_BUSINESS.WED_OPEN, '');
                setBusinessDetails(TYPE_BUSINESS.WED_CLOSE, '');
              }}
            />
          )}
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
              initialState={openSchedule(businessDetails.thurs_open)}
              type={TYPE_BUSINESS.THURS_OPEN}
            />
          </div>
        </div>
        <div className="item">
          <div className="ainput2">
            <DropdownBusiness
              initialState={closeSchedule(businessDetails.thurs_close)}
              type={TYPE_BUSINESS.THURS_CLOSE}
            />
          </div>
          {(isEmpty(businessDetails.thurs_open) || isEmpty(businessDetails.thurs_close)) && (
            <span
              className="ic-circle-clear"
              onClick={() => {
                setBusinessDetails(TYPE_BUSINESS.THURS_OPEN, '');
                setBusinessDetails(TYPE_BUSINESS.THURS_CLOSE, '');
              }}
            />
          )}
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
              initialState={openSchedule(businessDetails.fri_open)}
              type={TYPE_BUSINESS.FRI_OPEN}
            />
          </div>
        </div>
        <div className="item">
          <div className="ainput2">
            <DropdownBusiness
              initialState={closeSchedule(businessDetails.fri_close)}
              type={TYPE_BUSINESS.FRI_CLOSE}
            />
          </div>
          {(isEmpty(businessDetails.fri_open) || isEmpty(businessDetails.fri_close)) && (
            <span
              className="ic-circle-clear"
              onClick={() => {
                setBusinessDetails(TYPE_BUSINESS.FRI_OPEN, '');
                setBusinessDetails(TYPE_BUSINESS.FRI_CLOSE, '');
              }}
            />
          )}
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
              initialState={openSchedule(businessDetails.sat_open)}
              type={TYPE_BUSINESS.SAT_OPEN}
            />
          </div>
        </div>
        <div className="item">
          <div className="ainput2">
            <DropdownBusiness
              initialState={closeSchedule(businessDetails.sat_close)}
              type={TYPE_BUSINESS.SAT_CLOSE}
            />
          </div>
          {(isEmpty(businessDetails.sat_open) || isEmpty(businessDetails.sat_close)) && (
            <span
              className="ic-circle-clear"
              onClick={() => {
                setBusinessDetails(TYPE_BUSINESS.SAT_OPEN, '');
                setBusinessDetails(TYPE_BUSINESS.SAT_CLOSE, '');
              }}
            />
          )}
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
            onChange={
              (e: React.ChangeEvent<HTMLInputElement>) => setBusinessDetails(TYPE_BUSINESS.WEBSITE, e.target.value)
            }
            value={businessDetails && businessDetails.website}
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
            onChange={
              (e: React.ChangeEvent<HTMLInputElement>) => setBusinessDetails(TYPE_BUSINESS.FACEBOOK, e.target.value)
            }
            value={businessDetails && businessDetails.facebook}
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
            onChange={
              (e: React.ChangeEvent<HTMLInputElement>) => setBusinessDetails(TYPE_BUSINESS.TWITTER, e.target.value)
            }
            value={businessDetails && businessDetails.twitter}
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
            onChange={
              (e: React.ChangeEvent<HTMLInputElement>) => setBusinessDetails(TYPE_BUSINESS.EMAIL, e.target.value)
            }
            value={businessDetails && businessDetails.email}
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
            onChange={
              (e: React.ChangeEvent<HTMLInputElement>) => setBusinessDetails(TYPE_BUSINESS.INSTAGRAM, e.target.value)
            }
            value={businessDetails && businessDetails.instagram}
          />
        </div>
      </div>
    </>
  );
};
