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
  const [disable1, setDisable1] = useState(true);
  const [disableFormVisibility, setDisableFormVisibility] = useState(true);
  const [disableFormLocal, setDisableFormLocal] = useState(true);

  const [qualityState, setQualityState] = useState('');
  const [visibilityState, setVisibilityState] = useState('');
  const [localState, setLocalState] = useState('');
  const [produceAvailStore, setProduceAvailAStore] = useState('');
  const [produceAvailSeasonally, setProduceAvailSeasonally] = useState('');

  const { setOtherQuestions } = useMarketplaceDispatch();

  const loadAvailabilityFre = () => {
    if ((document.getElementById('fresh') as HTMLInputElement).checked) {
      setFresh(true);
      setDisable1(false);
    } else {
      setFresh(false);
      setDisable1(true);
    }
  };

  function loadAvailabilityFro() {
    setFrozen(!frozen);
  }

  function loadAvailabilityCa() {
    setCannet(!canned);
  }

  const loadAcceptable = () => {
    if ((document.getElementById('acceptable') as HTMLInputElement).checked) {
      setAcceptable(true);
      setUnAcceptable(false);
      setDisableFormVisibility(false);
      setQualityState('acceptable');
    } else {
      setAcceptable(false);
      if (!(document.getElementById('unacceptable') as HTMLInputElement).checked
        && !(document.getElementById('acceptable') as HTMLInputElement).checked) {
        setDisableFormVisibility(true);
      }
    }
  };

  const loadUnAcceptable = () => {
    if ((document.getElementById('unacceptable') as HTMLInputElement).checked) {
      setAcceptable(false);
      setDisableFormVisibility(false);
      setUnAcceptable(true);
      setQualityState('unacceptable');
    } else {
      setUnAcceptable(false);
      if (!(document.getElementById('unacceptable') as HTMLInputElement).checked
        && !(document.getElementById('acceptable') as HTMLInputElement).checked) {
        setDisableFormVisibility(true);
      }
    }
  };

  const loadVisibility = () => {
    if ((document.getElementById('visibility') as HTMLInputElement).checked) {
      setDisableFormLocal(false);
      setVisibility(true);
      setNoVisibility(false);
    } else {
      setNoVisibility(true);
      if (!(document.getElementById('novisibility') as HTMLInputElement).checked
        && !(document.getElementById('visibility') as HTMLInputElement).checked) {
        setDisableFormLocal(true);
      }
    }
    setVisibilityState('visibility');
  };

  function loadNoVisibility() {
    setVisibility(false);
    setNoVisibility(true);
    setVisibilityState('no visibility');
  }

  function loadLocalProduce() {
    setLocalProduce(true);
    setLocalNoProduce(false);
    setLocalState('local grow');
  }
  function loadLocalNoProduce() {
    setLocalProduce(false);
    setLocalNoProduce(true);
    setLocalState('no local grow');
  }

  const onchangeForm = () => {
    let st = '';
    if (fresh) {
      st = 'fresh, ';
    }
    if (frozen) {
      st += 'frozen, ';
    }
    if (canned) {
      st += 'canned';
    }
    setOtherQuestions({
      description: descriptionForm,
      availability: st,
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
            onChange={() => setDescription((document.getElementById('yth') as HTMLInputElement).value)}
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
            <input type="checkbox" id="fresh" onChange={loadAvailabilityFre} />
            <span className="checkmark" />
          </label>
          <label className="chkwrap">
            Frozen
            <input type="checkbox" onChange={loadAvailabilityFro} />
            <span className="checkmark" />
          </label>
          <label className="chkwrap">
            Canned
            <input type="checkbox" onChange={loadAvailabilityCa} />
            <span className="checkmark" />
          </label>
        </div>
      </div>
      {
        disable1 ? (
          null
        ) : (
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
                    id="acceptable"
                    checked={acceptable}
                    onChange={loadAcceptable}
                  />
                  <span className="checkmark" />
                </label>
                <label className="chkwrap">
                  Unacceptable (bruised, old looking, mushy, dry, overripe, dark sunken spots in Irregular
                  patches or cracked or broken surfaces, signs of shriveling, mold or excessive softening)
                  <input
                    type="checkbox"
                    id="unacceptable"
                    checked={unacceptable}
                    onChange={loadUnAcceptable}
                  />
                  <span className="checkmark" />
                </label>
              </div>
            </div>
          </div>
        )
      }
      {
        disableFormVisibility ? (
          null
        ) : (
          <div>
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
                    id="visibility"
                    checked={visibility}
                    onChange={loadVisibility}
                  />
                  <span className="checkmark" />
                </label>
                <label className="chkwrap">
                  No
                  <input
                    type="checkbox"
                    id="novisibility"
                    checked={novisibility}
                    onChange={loadNoVisibility}
                  />
                  <span className="checkmark" />
                </label>
              </div>
            </div>
          </div>
        )
      }
      {
        disableFormLocal ? (
          null
        ) : (
          <div>
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
                    onChange={loadLocalProduce}
                  />
                  <span className="checkmark" />
                </label>
                <label className="chkwrap">
                  No
                  <input
                    type="checkbox"
                    checked={localNoProduce}
                    onChange={loadLocalNoProduce}
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
            onChange={() => setProduceAvailAStore((document.getElementById('yth2') as HTMLInputElement).value)}
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
            onChange={() => setProduceAvailSeasonally((document.getElementById('yth3') as HTMLInputElement).value)}
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
