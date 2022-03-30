import React, { useState } from 'react';
import { useMarketplaceDispatch, useMarketplaceState } from '../store/hooks/marketplaceHook';

export const LeftForm2 = () => {
  const [acceptable, setAcceptable] = useState(false);
  const [unacceptable, setUnAcceptable] = useState(false);
  const [visibilityCheck, setVisibilityCheck] = useState(false);
  const [novisibility, setNoVisibility] = useState(false);
  const [localProduce, setLocalProduce] = useState(false);
  const [localNoProduce, setLocalNoProduce] = useState(false);

  const {
    setOtherQuestions, setAvailability, setQuality,
    setVisibility, setLocal, setProduceAvailStore,
    setProduceAvailSeasonally
  } = useMarketplaceDispatch();
  const { otherQuestions } = useMarketplaceState();

  const onchangeForm = () => {
    console.log('');
  };

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
            onChange={(e: React.FormEvent<HTMLTextAreaElement>): void => {
              setOtherQuestions('description', e.currentTarget.value);
            }}
            value={otherQuestions.description}
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
              onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                if (e.currentTarget.checked) {
                  setAvailability([...otherQuestions.availability, 'Fresh']);
                } else {
                  setAvailability(
                    otherQuestions.availability.filter((data: string) => data !== 'Fresh')
                  );
                }
              }}
            />
            <span className="checkmark" />
          </label>
          <label className="chkwrap">
            Frozen
            <input
              type="checkbox"
              onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                if (e.currentTarget.checked) {
                  setAvailability([...otherQuestions.availability, 'Frozen']);
                } else {
                  setAvailability(
                    otherQuestions.availability.filter((data: string) => data !== 'Frozen')
                  );
                }
              }}
            />
            <span className="checkmark" />
          </label>
          <label className="chkwrap">
            Canned
            <input
              type="checkbox"
              onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                if (e.currentTarget.checked) {
                  setAvailability([...otherQuestions.availability, 'Canned']);
                } else {
                  setAvailability(
                    otherQuestions.availability.filter((data: string) => data !== 'Canned')
                  );
                }
              }}
            />
            <span className="checkmark" />
          </label>
        </div>
      </div>
      {
        otherQuestions.availability.find((element: string) => element === 'Fresh') && (
          <div>
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
                    type="checkbox"
                    checked={acceptable}
                    onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                      setAcceptable(e.currentTarget.checked);
                      setUnAcceptable(!e.currentTarget.checked);
                      if (e.currentTarget.checked) setQuality('Acceptable');
                      else setQuality('Unacceptable');
                    }}
                  />
                  <span className="checkmark" />
                </label>
                <label className="chkwrap">
                  Unacceptable (bruised, old looking, mushy, dry, overripe, dark sunken spots in Irregular
                  patches or cracked or broken surfaces, signs of shriveling, mold or excessive softening)
                  <input
                    type="checkbox"
                    checked={unacceptable}
                    onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                      setAcceptable(!e.currentTarget.checked);
                      setUnAcceptable(e.currentTarget.checked);
                      if (e.currentTarget.checked) setQuality('Unacceptable');
                      else setQuality('Acceptable');
                    }}
                    value={otherQuestions.quality}
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
                    type="checkbox"
                    checked={visibilityCheck}
                    onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                      setVisibilityCheck(e.currentTarget.checked);
                      setNoVisibility(!e.currentTarget.checked);
                      if (e.currentTarget.checked) setVisibility('Yes');
                      else setVisibility('No');
                    }}
                  />
                  <span className="checkmark" />
                </label>
                <label className="chkwrap">
                  No
                  <input
                    type="checkbox"
                    checked={novisibility}
                    onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                      setVisibilityCheck(!e.currentTarget.checked);
                      setNoVisibility(e.currentTarget.checked);
                      if (e.currentTarget.checked) setVisibility('No');
                      else setVisibility('Yes');
                    }}
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
                    type="checkbox"
                    checked={localProduce}
                    onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                      setLocalProduce(e.currentTarget.checked);
                      setLocalNoProduce(!e.currentTarget.checked);
                      if (e.currentTarget.checked) setLocal('yes');
                      else setLocal('No');
                    }}
                  />
                  <span className="checkmark" />
                </label>
                <label className="chkwrap">
                  No
                  <input
                    type="checkbox"
                    checked={localNoProduce}
                    onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                      setLocalProduce(!e.currentTarget.checked);
                      setLocalNoProduce(e.currentTarget.checked);
                      if (e.currentTarget.checked) setLocal('No');
                      else setLocal('Yes');
                    }}
                  />
                  <span className="checkmark" />
                </label>
              </div>
            </div>
          </div>
        )
      }
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
            onChange={(e: React.FormEvent<HTMLTextAreaElement>): void => {
              setProduceAvailStore('produce_avail_store', e.currentTarget.value);
            }}
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
            onChange={(e: React.FormEvent<HTMLTextAreaElement>): void => {
              setProduceAvailSeasonally('produce_avail_seasonally', e.currentTarget.value);
            }}
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
        <button className="light" type="button" onClick={() => onchangeForm()}>
          Proceed
        </button>
      </div>
    </>
  );
};
