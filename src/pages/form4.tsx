export const Form4 = () => {
  console.log('Form4');
  return (
    <div className="container">
      <div className="bgwhite" />
      <figure className="bgnoise home" />
      <div className="barblue form2" />
      <div className="pagecontainer">
        <div className="navbararea">
          <div className="navbar">
            <div className="nbleft">
              <div className="iclogo" />
            </div>
            <div className="nbright">
              <div className="sn">
                <button className="light" type="button">
                  <span className="ictw" />
                </button>
                <button className="light" type="button">
                  <span className="icfb" />
                </button>
                <button className="light" type="button">
                  <span className="icyt" />
                </button>
                <button className="light" type="button">
                  <span className="icig" />
                </button>
                <button className="light" type="button">
                  <span className="icli" />
                </button>
              </div>
              <div className="navigation">
                <nav className="menu">
                  <ol>
                    <li><a href="#0">About Us</a></li>
                    <li className="options">
                      <a href="#0">Work & Impact</a>
                      <ol className="submenu">
                        <li><a href="#0">Option 1</a></li>
                        <li><a href="#0">Option 2</a></li>
                      </ol>
                    </li>
                    <li className="options hlight">
                      <a href="#0">Blog & Resources</a>
                      <ol className="submenu">
                        <li><a href="#0">Option 1</a></li>
                        <li><a href="#0">Option 2</a></li>
                        <li><a href="#0">Option 2</a></li>
                        <li><a href="#0">Option 2</a></li>
                        <li><a href="#0">Option 2</a></li>
                      </ol>
                    </li>
                  </ol>
                </nav>
                <div className="donate">
                  <button className="light" type="button">
                    Donate
                  </button>
                </div>
                <div className="search">
                  <input type="text" placeholder="Search" name="search" />
                  <button type="submit">
                    <i className="icsearch" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="searchoptionsarea form2">
          <div className="accesspoint colored">
            <h1>FOOD ACCESS POINTS NEAR YOU</h1>
            <p>
              Looking for a nearby grocery store, SNAP retailer, or food-coop?
              Search our access points using the map below.
            </p>
          </div>
        </div>
        <div className="modaluserfeedbck">
          <div className="formpage">
            <div className="header">
              <div className="backlink">
                <button className="light" type="button">
                  <span className="icclose" />
                  <span className="txt">Close</span>
                </button>
              </div>
              <h2 className="sectitle">User Feedback Form</h2>
              <p className="secdescription">Have a location listed by completing the form below</p>
            </div>
            <div className="body">
              <div className="group">
                <div className="aleft">
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
                  <div className="sectiontitle">
                    Quality
                  </div>
                  <div className="item">
                    <div className="title grouped">
                      <span className="number">2.</span>
                      <span className="description">
                        How would you describe the quality of the fresh fruits and
                        vegetables at this location?
                        {' '}

                      </span>
                    </div>
                    <div className="ainput chk">
                      <label className="chkwrap">
                        Acceptable (peak condition, top quality, good color, fresh, firm, and clean)
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                      <label className="chkwrap">
                        Unacceptable (bruised, old looking, mushy, dry,
                        overripe, dark sunken spots in Irregular patches or cracked or broken surfaces,
                        signs of shriveling, mold or excessive softening)
                        <input type="checkbox" />
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
                  <div className="sectiontitle">
                    Local
                  </div>
                  <div className="item">
                    <div className="title grouped">
                      <span className="number">4.</span>
                      <span className="description">
                        Were any of the fruits and vegetables labeled as “locally
                        grown”?

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
                  <div className="sectiontitle">
                    Meets Need
                  </div>
                  <div className="item">
                    <div className="title grouped">
                      <span className="number">5.</span>
                      <span className="description">
                        Did the retailer or market have all of the fruits and vegetables
                        you were looking for?

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
                        If no, please list what fruits and vegetables you would like this retailer to stock?
                      </label>
                    </div>
                    <div className="ainput htxtarea">
                      <textarea name="yth" id="yth2" cols={30} rows={10} placeholder="Your text here..." />
                    </div>
                  </div>
                  <div className="sectiontitle">
                    Photo Upload
                  </div>
                  <div className="item">
                    <div className="title">
                      <label>(Please upload a photo where produce is stocked at this retailer)</label>
                    </div>
                    <div className="ainput upload">
                      <div className="uploadarea">
                        <div>Drag and drop files here</div>
                        <div>or</div>
                        <div>Browse on your device.</div>
                      </div>
                    </div>
                  </div>
                  <div className="sectiontitle">
                    Contact
                  </div>
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
                        Stay connected to your local retailers and your community!
                        I agree to allow PHA and its affiliates to use my contact information for communication
                        purposes.
                        <input type="checkbox" />
                        <span className="checkmark" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aaction">
                <button className="light" type="button">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
