import React, { useEffect, useState } from 'react';

export const LeftForm2 = () => {
  console.log('LeftForm2');
  const [description, setDescription] = useState('');
  const [fresh, setFresh] = useState(false);
  const [frozen, setFrozen] = useState(false);
  const [canned, setCannet] = useState(false);
  const [acceptable, setAcceptable] = useState(false);
  const [unacceptable, setUnAcceptable] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [novisibility, setNoVisibility] = useState(false);
  const [localProduce, setLocalProduce] = useState(false);
  const [localNoProduce, setLocalNoProduce] = useState(false);
  const [itemsStore, setItemsStore] = useState('');
  const [itemsSeasonally, setItemsSeasonally] = useState('');
  const [disable1, setDisable1] = useState(true);
  const [disable2, setDisable2] = useState(true);
  const [disable3, setDisable3] = useState(true);

  function loadDescription(event: any) {
    setDescription(event.target.value);
  }

  function loadAvailabilityFre(event: any) {
    if (event.target.checked) {
      setFresh(true);
      setDisable1(false);
    } else {
      setFresh(false);
      setDisable1(true);
    }
  }

  function loadAvailabilityFro() {
    setFrozen(!frozen);
  }

  function loadAvailabilityCa() {
    setCannet(!canned);
  }

  function loadAcceptable() {
    setDisable2(false);
    setAcceptable(true);
    setUnAcceptable(false);
  }

  function loadUnAcceptable() {
    setDisable2(false);
    setAcceptable(false);
    setUnAcceptable(true);
  }

  function loadVisibility() {
    setDisable3(false);
    setVisibility(true);
    setNoVisibility(false);
  }

  function loadNoVisibility() {
    setDisable3(false);
    setVisibility(false);
    setNoVisibility(true);
  }

  function loadLocalProduce() {
    setLocalProduce(true);
    setLocalNoProduce(false);
  }
  function loadLocalNoProduce() {
    setLocalProduce(false);
    setLocalNoProduce(true);
  }

  function loadItemsStore(event: any) {
    setItemsStore(event.target.value);
  }

  function loadItemsSeasonally(event: any) {
    setItemsSeasonally(event.target.value);
  }

  useEffect(() => {
    console.log(fresh, description, acceptable, visibility, localProduce, localStorage, itemsStore, itemsSeasonally);
  }, []);

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
            onChange={loadDescription}
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
            <input type="checkbox" onChange={loadAvailabilityFre} />
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
        !disable1 ? (
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
                    onChange={loadAcceptable}
                  />
                  <span className="checkmark" />
                </label>
                <label className="chkwrap">
                  Unacceptable (bruised, old looking, mushy, dry, overripe, dark sunken spots in Irregular
                  patches or cracked or broken surfaces, signs of shriveling, mold or excessive softening)
                  <input
                    type="checkbox"
                    checked={unacceptable}
                    onChange={loadUnAcceptable}
                  />
                  <span className="checkmark" />
                </label>
              </div>
            </div>
          </div>
        ) : (
          null
        )
      }
      {
        disable2 ? (
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
                    checked={visibility}
                    onChange={loadVisibility}
                  />
                  <span className="checkmark" />
                </label>
                <label className="chkwrap">
                  No
                  <input
                    type="checkbox"
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
        disable3 ? (
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
            onChange={loadItemsStore}
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
            onChange={loadItemsSeasonally}
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
    </>
  );
};
