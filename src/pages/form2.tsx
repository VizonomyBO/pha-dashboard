export const Form2 = () => {
  console.log('Form2');
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
                  <button className="light" type="button">Donate</button>
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
        <div className="formarea form2">
          <div className="header">
            <div className="backlink">
              <button className="light" type="button">
                <span className="icarrowleft">
                  <span className="txt">Back to Locations</span>
                </span>
              </button>
            </div>
            <h2 className="sectitle">Marketplace Request Form</h2>
            <p className="secdescription">Have a location listed by completing the form below</p>
            <div className="optiondetail">
              <div className="option">
                <label className="chkwrap">
                  Business Details
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </div>
              <div className="option active">
                <label className="chkwrap">
                  Other Questions
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </div>
              <div className="option">
                <label className="chkwrap">
                  Contact Details
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="left">
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
                  <textarea name="yth" id="yth" cols={30} rows={10} placeholder="Your text here..." />
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
                    vegetables you stock at this location? Acceptable (peak
                    condition, top quality, good color, fresh, firm, and clean)

                  </span>
                </div>
                <div className="ainput chk">
                  <label className="chkwrap">
                    Acceptable (peak condition, top quality, good color, fresh, firm, and clean)
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                  <label className="chkwrap">
                    Unacceptable (bruised, old looking, mushy, dry, overripe, dark sunken spots in Irregular
                    patches or cracked or broken surfaces, signs of shriveling, mold or excessive softening)
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
                    Do you stock locally grown produce (grown within 250 miles
                    radius)?

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
                  <textarea name="yth" id="yth2" cols={30} rows={10} placeholder="Your text here..." />
                </div>
              </div>
              <div className="item">
                <div className="title">
                  <label>Please list fresh produce items that are only available seasonally.</label>
                </div>
                <div className="ainput htxtarea">
                  <textarea name="yth" id="yth3" cols={30} rows={10} placeholder="Your text here..." />
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
            </div>
            <div className="right">
              <div className="sectiontitle">
                Select Category
              </div>
              <div className="panel">
                <div className="body">
                  <div className="card">
                    <div className="group">
                      <div className="option step">
                        <label>
                          Choose the categories that most accurately describes the retailer.
                        </label>
                      </div>
                      <div className="option">
                        <label className="chkwrap">
                          Supermarket/big box retailer
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                      </div>
                      <div className="option">
                        <label className="chkwrap">
                          Corner/convenience store
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                      </div>
                      <div className="option">
                        <label className="chkwrap">
                          Dollar stores
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                      </div>
                      <div className="option">
                        <label className="chkwrap">
                          Food pantry
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                      </div>
                      <div className="option">
                        <label className="chkwrap">
                          Distribution location
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                      </div>
                      <div className="option">
                        <label className="chkwrap">
                          Food co-op
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sectiontitle second">
                Select Accessibility
              </div>
              <div className="panel">
                <div className="body">
                  <div className="card">
                    <div className="group">
                      <div className="option">
                        <label className="chkwrap">
                          WIC Accepted
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                      </div>
                      <div className="option">
                        <label className="chkwrap">
                          SNAP Accepted
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="aaction">
            <button className="light" type="button">Proceed</button>
          </div>
        </div>

      </div>
    </div>
  );
};
