import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';

export const Form1 = () => {
  console.log('Form1');
  return (
    <div className="container">
      <div className="bgwhite" />
      <figure className="bgnoise home" />
      <div className="barblue form1" />
      <div className="pagecontainer">
        <Navbar />
        <Header />
        <div className="formarea form1">
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
              <div className="option active">
                <label className="chkwrap">
                  Business Details
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </div>
              <div className="option">
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
                Business Listing
              </div>
              <div className="item">
                <div className="title">
                  <label>Address Line 1</label>
                </div>
                <div className="ainput">
                  <input className="light" type="text" />
                </div>
              </div>
              <div className="item">
                <div className="title">
                  <label>Address Line 2</label>
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
                  <label>City</label>
                </div>
                <div className="ainput">
                  <input className="light" type="text" />
                </div>
              </div>
              <div className="twoc">
                <div className="item">
                  <div className="title">
                    <label>State</label>
                  </div>
                  <div className="ainput2">
                    <input className="light" type="text" />
                  </div>
                </div>
                <div className="item">
                  <div className="title">
                    <label>Zip / Postal Code</label>
                  </div>
                  <div className="ainput2">
                    <input className="light" type="text" />
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
                  <div className="title">
                    <label />
                  </div>
                  <div className="ainput2">
                    <input className="light" type="text" />
                  </div>
                </div>
                <div className="item">
                  <div className="title">
                    <label />
                  </div>
                  <div className="ainput2">
                    <input className="light" type="text" />
                  </div>
                </div>
              </div>
              <div className="threec">
                <div className="item">
                  <div className="title">
                    <label>Mon:</label>
                  </div>
                </div>
                <div className="item">
                  <div className="title">
                    <label />
                  </div>
                  <div className="ainput2">
                    <input className="light" type="text" />
                  </div>
                </div>
                <div className="item">
                  <div className="title">
                    <label />
                  </div>
                  <div className="ainput2">
                    <input className="light" type="text" />
                  </div>
                </div>
              </div>
              <div className="threec">
                <div className="item">
                  <div className="title">
                    <label>Tue:</label>
                  </div>
                </div>
                <div className="item">
                  <div className="title">
                    <label />
                  </div>
                  <div className="ainput2">
                    <input className="light" type="text" />
                  </div>
                </div>
                <div className="item">
                  <div className="title">
                    <label />
                  </div>
                  <div className="ainput2">
                    <input className="light" type="text" />
                  </div>
                </div>
              </div>
              <div className="threec">
                <div className="item">
                  <div className="title">
                    <label>Wed:</label>
                  </div>
                </div>
                <div className="item">
                  <div className="title">
                    <label />
                  </div>
                  <div className="ainput2">
                    <input className="light" type="text" />
                  </div>
                </div>
                <div className="item">
                  <div className="title">
                    <label />
                  </div>
                  <div className="ainput2">
                    <input className="light" type="text" />
                  </div>
                </div>
              </div>
              <div className="threec">
                <div className="item">
                  <div className="title">
                    <label>Thu:</label>
                  </div>
                </div>
                <div className="item">
                  <div className="title">
                    <label />
                  </div>
                  <div className="ainput2">
                    <input className="light" type="text" />
                  </div>
                </div>
                <div className="item">
                  <div className="title">
                    <label />
                  </div>
                  <div className="ainput2">
                    <input className="light" type="text" />
                  </div>
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
                  <input className="light" type="text" />
                </div>
              </div>
              <div className="item">
                <div className="title">
                  <label>Facebook Page</label>
                </div>
                <div className="ainput">
                  <input className="light" type="text" />
                </div>
              </div>
              <div className="item">
                <div className="title">
                  <label>Twitter Page</label>
                </div>
                <div className="ainput">
                  <input className="light" type="text" />
                </div>
              </div>
              <div className="item">
                <div className="title">
                  <label>Email</label>
                </div>
                <div className="ainput">
                  <input className="light" type="text" />
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
