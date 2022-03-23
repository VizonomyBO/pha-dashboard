import { useEffect } from 'react';
// import { useMarketplaceDispatch } from '../store/hooks/marketplaceHook';

export const LeftForm1 = () => {
  console.log('LeftForm1');
  // const { resetMarketplace } = useMarketplaceDispatch();
  // useEffect(() => {
  //   resetMarketplace();
  // }, []);
  useEffect(() => {
    //   resetMarketplace();
    console.log('LeftForm1');
  }, []);
  return (
    <>
      <div className="sectiontitle">
        Business Listing
      </div>
      <div className="item">
        <div className="title">
          <label>Business Name</label>
        </div>
        <div className="ainput">
          <input className="light" type="text" />
        </div>
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
      <div className="aaction">
        <button className="light" type="button">
          Proceed
        </button>
      </div>
    </>
  );
};
