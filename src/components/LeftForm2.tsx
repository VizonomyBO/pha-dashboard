import React, { useState } from 'react';
import { useMarketplaceDispatch } from '../store/hooks/marketplaceHook';

export const LeftForm2 = () => {
  const [descriptionForm, setDescription] = useState('');
  const [fresh, setFresh] = useState(false);
  const [frozen, setFrozen] = useState(false);
  const [canned, setCannet] = useState(false);
  const [acceptable, setAcceptable] = useState(false);
  const [unacceptable, setUnAcceptable] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [novisibility, setNoVisibility] = useState(false);
  const [localProduce, setLocalProduce] = useState(false);
  const [localNoProduce, setLocalNoProduce] = useState(false);
  const [disableForm, setDisableForm] = useState(true);

  const [qualityState, setQualityState] = useState('');
  const [visibilityState, setVisibilityState] = useState('');
  const [localState, setLocalState] = useState('');
  const [produceAvailStore, setProduceAvailAStore] = useState('');
  const [produceAvailSeasonally, setProduceAvailSeasonally] = useState('');

  const { setOtherQuestions } = useMarketplaceDispatch();

  const onchangeForm = () => {
    const tempData = [''];
    let i = 0;
    if (fresh) {
      tempData[i] = 'fresh, ';
      i += 1;
    }
    if (frozen) {
      tempData[i] = 'frozen, ';
      i += 1;
    }
    if (canned) {
      tempData[i] = 'canned';
      i += 1;
    }
    setOtherQuestions({
      description: descriptionForm,
      availability: tempData,
      quality: qualityState,
      visibility: visibilityState,
      local: localState,
      produce_avail_store: produceAvailStore,
      produce_avail_seasonally: produceAvailSeasonally
    });
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
            onChange={(e) => setDescription(e.target.value)}
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
              onChange={(e) => {
                if (e.target.checked) {
                  setFresh(true);
                  setDisableForm(false);
                } else {
                  setFresh(false);
                  setDisableForm(true);
                }
              }}
            />
            <span className="checkmark" />
          </label>
          <label className="chkwrap">
            Frozen
            <input
              type="checkbox"
              onChange={(e) => {
                setFrozen(e.target.checked);
              }}
            />
            <span className="checkmark" />
          </label>
          <label className="chkwrap">
            Canned
            <input
              type="checkbox"
              onChange={(e) => setCannet(e.target.checked)}
            />
            <span className="checkmark" />
          </label>
        </div>
      </div>
      {
        !disableForm && (
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
                    onChange={(e) => {
                      if (e.target.checked) {
                        setAcceptable(true);
                        setUnAcceptable(false);
                        setQualityState('acceptable');
                      } else setAcceptable(false);
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
                    onChange={(e) => {
                      if (e.target.checked) {
                        setAcceptable(false);
                        setUnAcceptable(true);
                        setQualityState('unacceptable');
                      } else setUnAcceptable(false);
                    }}
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
                    checked={visibility}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setVisibility(true);
                        setNoVisibility(false);
                        setVisibilityState('visibility');
                      } else setVisibility(false);
                    }}
                  />
                  <span className="checkmark" />
                </label>
                <label className="chkwrap">
                  No
                  <input
                    type="checkbox"
                    checked={novisibility}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setVisibility(false);
                        setNoVisibility(true);
                        setVisibilityState('no visibility');
                      } else setNoVisibility(false);
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
                    onChange={(e) => {
                      if (e.target.checked) {
                        setLocalProduce(true);
                        setLocalNoProduce(false);
                        setLocalState('local grow');
                      } else setLocalProduce(false);
                    }}
                  />
                  <span className="checkmark" />
                </label>
                <label className="chkwrap">
                  No
                  <input
                    type="checkbox"
                    checked={localNoProduce}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setLocalProduce(false);
                        setLocalNoProduce(true);
                        setLocalState('no local grow');
                      } else setLocalNoProduce(false);
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
            onChange={(e) => setProduceAvailAStore(e.target.value)}
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
            onChange={(e) => setProduceAvailSeasonally(e.target.value)}
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
