import React, { useEffect, useState } from 'react';
import { ATTACHMENTS_SUB_TYPES, MAX_TEXT, TYPE_BUSINESS } from '../constants';
import { Attachment } from './Attachment';
import { useMarketplaceDispatch, useMarketplaceState } from '../store/hooks';
import { formConstants } from '../constants/form';
import { valitadionText } from '../utils/validation';

export const LeftForm2 = () => {
  const [showIsFreshOption, setShowIsFreshOption] = useState(false);
  const {
    setOtherQuestions, setAvailabilityOptions, setQuality,
    setVisibility, setLocal, setProduceAvailStore,
    setProduceAvailSeasonally
  } = useMarketplaceDispatch();
  const { otherQuestions } = useMarketplaceState();
  const setDescriptionFunction = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    const numbertext = valitadionText(e.currentTarget.value);
    if (numbertext.split(' ').length <= MAX_TEXT) {
      setOtherQuestions(numbertext);
    }
  };

  const setAvailabilityOptionsCheck = (constant: string, checked: boolean) => {
    if (checked) {
      setAvailabilityOptions([...otherQuestions.availabilityOptions, constant]);
    } else {
      setAvailabilityOptions(
        otherQuestions.availabilityOptions.filter((data: string) => data !== constant)
      );
    }
  };

  const setAvailibityFresh = (e: React.FormEvent<HTMLInputElement>): void => {
    setAvailabilityOptionsCheck(formConstants.AVAILABILITY.FRESH, e.currentTarget.checked);
  };

  const setAvailabilityFrozen = (e: React.FormEvent<HTMLInputElement>): void => {
    setAvailabilityOptionsCheck(formConstants.AVAILABILITY.FROZEN, e.currentTarget.checked);
  };

  const setAvailabilityCanned = (e: React.FormEvent<HTMLInputElement>): void => {
    setAvailabilityOptionsCheck(formConstants.AVAILABILITY.CANNED, e.currentTarget.checked);
  };

  const setQualityFunction = (e: React.FormEvent<HTMLInputElement>): void => {
    setQuality(e.currentTarget.value);
  };

  const setVisibilityFunction = (e: React.FormEvent<HTMLInputElement>): void => {
    setVisibility(e.currentTarget.value);
  };

  const setLocalFunction = (e: React.FormEvent<HTMLInputElement>): void => {
    setLocal(e.currentTarget.value);
  };

  const setProduceAvailStoreFunction = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    const numbertext = valitadionText(e.currentTarget.value);
    if (numbertext.split(' ').length <= MAX_TEXT) {
      setProduceAvailStore(numbertext);
    }
  };

  const setProduceAvailSeasonallyFunction = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    const numbertext = valitadionText(e.currentTarget.value);
    if (numbertext.split(' ').length <= MAX_TEXT) {
      setProduceAvailSeasonally(numbertext);
    }
  };

  useEffect(() => {
    setShowIsFreshOption(otherQuestions.availabilityOptions.includes(formConstants.AVAILABILITY.FRESH));
  }, [otherQuestions.availabilityOptions]);

  return (
    <>
      <div className="sectiontitle">
        Description
        <sup>*</sup>
      </div>
      <div className="item">
        <div className="title">
          <label>
            Connect with your local community! Please provide a brief description of your establishment and
            its history in less than 450 words.
          </label>
        </div>
        <div className="ainput htxtarea">
          <textarea
            name="yth"
            id="yth"
            cols={30}
            rows={10}
            placeholder="Your text here..."
            value={otherQuestions.description}
            onChange={setDescriptionFunction}
          />
        </div>
      </div>
      <div className="sectiontitle">
        Availability
        <sup>*</sup>
      </div>
      <div className="item">
        <div className="title grouped">
          <span className="number">1.</span>
          <span className="description">
            What type of fruits and vegetables are stocked at this location?
            Please select categories with three or more items regularly stocked?
          </span>
        </div>
        <div className="ainput chk">
          <label className="chkwrap">
            Fresh
            <input
              type="checkbox"
              checked={otherQuestions.availabilityOptions.includes(formConstants.AVAILABILITY.FRESH)}
              onChange={setAvailibityFresh}
            />
            <span className="checkmark ckeckmark-form" />
          </label>
          <label className="chkwrap">
            Frozen
            <input
              type="checkbox"
              checked={otherQuestions.availabilityOptions.includes(formConstants.AVAILABILITY.FROZEN)}
              onChange={setAvailabilityFrozen}
            />
            <span className="checkmark ckeckmark-form" />
          </label>
          <label className="chkwrap">
            Canned
            <input
              type="checkbox"
              checked={otherQuestions.availabilityOptions.includes(formConstants.AVAILABILITY.CANNED)}
              onChange={setAvailabilityCanned}
            />
            <span className="checkmark ckeckmark-form" />
          </label>
        </div>
      </div>
      {showIsFreshOption && (
        <>
          <div className="sectiontitle">
            Quality
            <sup>*</sup>
          </div>
          <div className="item">
            <div className="title grouped">
              <span className="number">2.</span>
              <span className="description">
                How would you describe the quality of the fresh fruits and
                vegetables you stock at this location? Acceptable (peak
                condition, top quality, good color, fresh, firm, and clean)

              </span>
            </div>
            <div className="ainput chk">
              <label className="chkwrap">
                Acceptable (peak condition, top quality, good color, fresh, firm, and clean)
                <input
                  type="radio"
                  value={formConstants.QUALITY.ACCEPTABLE}
                  checked={otherQuestions.quality === formConstants.QUALITY.ACCEPTABLE}
                  onChange={setQualityFunction}
                />
                <span className="checkmark ckeckmark-form" />
              </label>
              <label className="chkwrap">
                Unacceptable (bruised, old looking, mushy, dry, overripe, dark sunken spots in Irregular
                patches or cracked or broken surfaces, signs of shriveling, mold or excessive softening)
                <input
                  type="radio"
                  value={formConstants.QUALITY.UNACCEPTABLE}
                  checked={otherQuestions.quality === formConstants.QUALITY.UNACCEPTABLE}
                  onChange={setQualityFunction}
                />
                <span className="checkmark ckeckmark-form" />
              </label>
            </div>
          </div>
          <div className="sectiontitle">
            Visibility
            <sup>*</sup>
          </div>
          <div className="item">
            <div className="title grouped">
              <span className="number">3.</span>
              <span className="description">
                Are the fresh fruits and vegetables visible from the front of the
                store or before entering ?

              </span>
            </div>
            <div className="ainput chk">
              <label className="chkwrap">
                Yes
                <input
                  type="radio"
                  value={formConstants.VISIBILITY.YES}
                  checked={otherQuestions.visibility === formConstants.VISIBILITY.YES}
                  onChange={setVisibilityFunction}
                />
                <span className="checkmark ckeckmark-form" />
              </label>
              <label className="chkwrap">
                No
                <input
                  type="radio"
                  value={formConstants.VISIBILITY.NO}
                  checked={otherQuestions.visibility === formConstants.VISIBILITY.NO}
                  onChange={setVisibilityFunction}
                />
                <span className="checkmark ckeckmark-form" />
              </label>
            </div>
          </div>
          <div className="sectiontitle">
            Local
            <sup>*</sup>
          </div>
          <div className="item">
            <div className="title grouped">
              <span className="number">4.</span>
              <span className="description">
                Do you stock locally grown produce (grown within 250 miles
                radius)?

              </span>
            </div>
            <div className="ainput chk">
              <label className="chkwrap">
                Yes
                <input
                  type="radio"
                  value={formConstants.LOCAL.YES}
                  checked={otherQuestions.local === formConstants.LOCAL.YES}
                  onChange={setLocalFunction}
                />
                <span className="checkmark ckeckmark-form" />
              </label>
              <label className="chkwrap">
                No
                <input
                  type="radio"
                  value={formConstants.LOCAL.NO}
                  checked={otherQuestions.local === formConstants.LOCAL.NO}
                  onChange={setLocalFunction}
                />
                <span className="checkmark ckeckmark-form" />
              </label>
            </div>
          </div>
        </>
      )}
      <div className="sectiontitle">
        Optional Information
      </div>
      <div className="item">
        <div className="title">
          <label>
            Please list fresh produce items (fruits, vegetables, legumes) that are available in your store
            year round?
          </label>
        </div>
        <div className="ainput htxtarea">
          <textarea
            name="yth2"
            id="yth2"
            cols={30}
            rows={10}
            value={otherQuestions.produce_avail_store}
            placeholder="Your text here..."
            onChange={setProduceAvailStoreFunction}
          />
        </div>
      </div>
      <div className="item">
        <div className="title">
          <label>Please list fresh produce items that are only available seasonally.</label>
        </div>
        <div className="ainput htxtarea">
          <textarea
            name="yth3"
            id="yth3"
            cols={30}
            rows={10}
            placeholder="Your text here..."
            value={otherQuestions.produce_avail_seasonally}
            onChange={setProduceAvailSeasonallyFunction}
          />
        </div>
      </div>
      <div className="sectiontitle">
        Upload Pictures
      </div>
      <div className="item">
        <div className="title">
          <label>Do you have any high quality photos of this business to share?</label>
        </div>
        <Attachment
          type={TYPE_BUSINESS.BUSINESS}
          subType={ATTACHMENTS_SUB_TYPES.IMAGES}
        />
      </div>
      <div className="item">
        <div className="title">
          <label>Connect with the Community! Please upload a picture of the store owner or manager. </label>
        </div>
        <Attachment
          type={TYPE_BUSINESS.OWNER}
          subType={ATTACHMENTS_SUB_TYPES.OWNER_IMAGES}
        />
      </div>
    </>
  );
};
