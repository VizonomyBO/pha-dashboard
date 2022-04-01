export const Nsform4 = () => {
  console.log('Nsform4');
  return (
    <div className="container">
      <div className="bgwhite" />
      <figure className="bgnoise home" />
      <div className="barblue form2" />
      <header className="topmenu">
        <div className="spanel">
          <div className="logoarea">
            <div className="iclogo" />
          </div>
          <div className="alook">
            <div className="citysearch">
              <i className="icsearch" />
              <input type="text" placeholder="City or Zip Code" />
              <button type="button" className="light">
                Search
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="modaluserfeedbck">
        <div className="formpage">
          <div className="header">
            <div className="backlink">
              <button type="button" className="light">
                <span className="icclose" />
                <span className="txt">Close</span>
              </button>
            </div>
            <h2 className="sectitle">User Feedback Form</h2>
            <p className="secdescription">
              Have a location listed by completing the form below
            </p>
          </div>
          <div className="body">
            <div className="group">
              <div className="aleft">
                <div className="sectiontitle">Availability</div>
                <div className="item">
                  <div className="title grouped">
                    <span className="number">1.</span>
                    <span className="description">
                      What type of fruits and vegetables are stocked at this
                      location? Please select categories with three or more
                      items regularly stocked?
                    </span>
                  </div>
                  <div className="ainput chk">
                    <label className="chkwrap">
                      Fresh (only continue if checks this)
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                    <label className="chkwrap">
                      Frozen
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                    <label className="chkwrap">
                      Canned
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
                <div className="sectiontitle">Quality</div>
                <div className="item">
                  <div className="title grouped">
                    <span className="number">2.</span>
                    <span className="description">
                      How would you describe the quality of the fresh fruits
                      and vegetables at this location?
                    </span>
                  </div>
                  <div className="ainput chk">
                    <label className="chkwrap">
                      Acceptable (peak condition, top quality, good color,
                      fresh, firm, and clean)
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                    <label className="chkwrap">
                      Unacceptable (bruised, old looking, mushy, dry,
                      overripe, dark sunken spots in Irregular patches or
                      cracked or broken surfaces, signs of shriveling, mold or
                      excessive softening)
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
                <div className="sectiontitle">Visibility</div>
                <div className="item">
                  <div className="title grouped">
                    <span className="number">3.</span>
                    <span className="description">
                      Are the fresh fruits and vegetables visible from the
                      front of the store or before entering ?
                    </span>
                  </div>
                  <div className="ainput chk">
                    <label className="chkwrap">
                      Yes
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                    <label className="chkwrap">
                      No
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
                <div className="sectiontitle">Local</div>
                <div className="item">
                  <div className="title grouped">
                    <span className="number">4.</span>
                    <span className="description">
                      Were any of the fruits and vegetables labeled as
                      “locally grown”?
                    </span>
                  </div>
                  <div className="ainput chk">
                    <label className="chkwrap">
                      Yes
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                    <label className="chkwrap">
                      No
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
                <div className="sectiontitle">Meets Need</div>
                <div className="item">
                  <div className="title grouped">
                    <span className="number">5.</span>
                    <span className="description">
                      Did the retailer or market have all of the fruits and
                      vegetables you were looking for?
                    </span>
                  </div>
                  <div className="ainput chk">
                    <label className="chkwrap">
                      Yes
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                    <label className="chkwrap">
                      No
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
                <div className="item">
                  <div className="title">
                    <label>
                      If no, please list what fruits and vegetables you would
                      like this retailer to stock?
                    </label>
                  </div>
                  <div className="ainput htxtarea">
                    <textarea
                      name="yth"
                      id="yth2"
                      cols={30}
                      rows={10}
                      placeholder="Your text here..."
                    />
                  </div>
                </div>
                <div className="sectiontitle">Photo Upload</div>
                <div className="item">
                  <div className="title">
                    <label>
                      (Please upload a photo where produce is stocked at this
                      retailer)
                    </label>
                  </div>
                  <div className="ainput upload">
                    <div className="uploadarea">
                      <div>Drag and drop files here</div>
                      <div>or</div>
                      <div>Browse on your device.</div>
                    </div>
                  </div>
                  <div className="photolist">
                    <button type="button" className="light">
                      <span className="nameimg">image-1.png</span>
                      <span className="rmimg">x</span>
                    </button>
                    <button type="button" className="light">
                      <span className="nameimg">image-2.jpg</span>
                      <span className="rmimg">x</span>
                    </button>
                    <button type="button" className="light">
                      <span className="nameimg">image-3.png</span>
                      <span className="rmimg">x</span>
                    </button>
                    <button type="button" className="light">
                      <span className="nameimg">image-4.png</span>
                      <span className="rmimg">x</span>
                    </button>
                    <button type="button" className="light">
                      <span className="nameimg">image-5.png</span>
                      <span className="rmimg">x</span>
                    </button>
                    <button type="button" className="light">
                      <span className="nameimg">image-6.png</span>
                      <span className="rmimg">x</span>
                    </button>
                    <button type="button" className="light">
                      <span className="nameimg">image-7.tif</span>
                      <span className="rmimg">x</span>
                    </button>
                  </div>
                </div>
                <div className="sectiontitle">Contact</div>
                <div className="item">
                  <div className="title">
                    <label>Email</label>
                  </div>
                  <div className="ainput">
                    <input className="light" type="text" />
                  </div>
                </div>
                <div className="item">
                  <div className="title">
                    <label>Phone Number</label>
                  </div>
                  <div className="ainput">
                    <input className="light" type="text" />
                  </div>
                </div>
                <div className="item">
                  <div className="title">
                    <label>Zip Code</label>
                  </div>
                  <div className="ainput">
                    <input className="light" type="text" />
                  </div>
                </div>
                <div className="item">
                  <div className="ainput chk">
                    <label className="chkwrap">
                      Stay connected to your local retailers and your
                      community! I agree to allow PHA and its affiliates to
                      use my contact information for communication purposes.
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="aaction">
              <button type="button" className="light">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
