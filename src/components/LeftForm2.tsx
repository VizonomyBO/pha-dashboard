import React, { useEffect, useState } from 'react';
import { useMarketplaceDispatch, useMarketplaceState } from '../store/hooks';
import { formConstants } from '../constants/form';

export const LeftForm2 = () => {
  const [showIsFreshOption, setShowIsFreshOption] = useState(false);
  const {
    setOtherQuestions, setAvailabilityOptions, setQuality,
    setVisibility, setLocal, setProduceAvailStore,
    setProduceAvailSeasonally
  } = useMarketplaceDispatch();
  const { otherQuestions } = useMarketplaceState();

  const setAvailabilityOptionsCheck = (constant: string, checked: boolean) => {
    console.log(constant, checked);
  };

  const setDescriptionFunction = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    setOtherQuestions(e.currentTarget.value);
  };

  const setAvailibityFresh = (e: React.FormEvent<HTMLInputElement>): void => {
    setAvailabilityOptionsCheck(formConstants.AVAILABILITY.FRESH, e.currentTarget.checked);
    if (e.currentTarget.checked) {
      setAvailabilityOptions([...otherQuestions.availabilityOptions, formConstants.AVAILABILITY.FRESH]);
    } else {
      setAvailabilityOptions(
        otherQuestions.availabilityOptions.filter((data: string) => data !== formConstants.AVAILABILITY.FRESH)
      );
    }
  };

  const setAvailabilityFrozen = (e: React.FormEvent<HTMLInputElement>): void => {
    if (e.currentTarget.checked) {
      setAvailabilityOptions([...otherQuestions.availabilityOptions, formConstants.AVAILABILITY.FROZEN]);
    } else {
      setAvailabilityOptions(
        otherQuestions.availabilityOptions.filter((data: string) => data !== formConstants.AVAILABILITY.FROZEN)
      );
    }
  };

  const setAvailabilityCanned = (e: React.FormEvent<HTMLInputElement>): void => {
    if (e.currentTarget.checked) {
      setAvailabilityOptions([...otherQuestions.availabilityOptions, formConstants.AVAILABILITY.CANNED]);
    } else {
      setAvailabilityOptions(
        otherQuestions.availabilityOptions.filter((data: string) => data !== formConstants.AVAILABILITY.CANNED)
      );
    }
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
    setProduceAvailStore(e.currentTarget.value);
  };

  const setProduceAvailSeasonallyFunction = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    setProduceAvailSeasonally(e.currentTarget.value);
  };

  useEffect(() => {
    setShowIsFreshOption(otherQuestions.availabilityOptions.includes(formConstants.AVAILABILITY.FRESH));
  }, [otherQuestions.availabilityOptions]);

  return (
    <>
      <div className="sectiontitle">
        Description
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
            onChange={setDescriptionFunction}
          />
        </div>
      </div>
      <div className="sectiontitle">
        Availability
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
              onChange={setAvailibityFresh}
            />
            <span className="checkmark" />
          </label>
          <label className="chkwrap">
            Frozen
            <input
              type="checkbox"
              onChange={setAvailabilityFrozen}
            />
            <span className="checkmark" />
          </label>
          <label className="chkwrap">
            Canned
            <input
              type="checkbox"
              onChange={setAvailabilityCanned}
            />
            <span className="checkmark" />
          </label>
        </div>
      </div>
      {showIsFreshOption && (
        <>
          <div className="sectiontitle">
            Quality
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
                <span className="checkmark" />
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
                <span className="checkmark" />
              </label>
            </div>
          </div>
          <div className="sectiontitle">
            Visibility
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
                <span className="checkmark" />
              </label>
              <label className="chkwrap">
                No
                <input
                  type="radio"
                  value={formConstants.VISIBILITY.NO}
                  checked={otherQuestions.visibility === formConstants.VISIBILITY.NO}
                  onChange={setVisibilityFunction}
                />
                <span className="checkmark" />
              </label>
            </div>
          </div>
          <div className="sectiontitle">
            Local
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
                <span className="checkmark" />
              </label>
              <label className="chkwrap">
                No
                <input
                  type="radio"
                  value={formConstants.LOCAL.NO}
                  checked={otherQuestions.local === formConstants.LOCAL.NO}
                  onChange={setLocalFunction}
                />
                <span className="checkmark" />
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
            name="yth"
            id="yth2"
            cols={30}
            rows={10}
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
            name="yth"
            id="yth3"
            cols={30}
            rows={10}
            placeholder="Your text here..."
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
        <div className="ainput upload">
          <div className="uploadarea">
            <div>Drag and drop files here</div>
            <div>or</div>
            <div>Browse on your device.</div>
          </div>
        </div>
      </div>
      <div className="aaction">
        <button className="light" type="button">
          Proceed
        </button>
      </div>
    </>
  );
};
