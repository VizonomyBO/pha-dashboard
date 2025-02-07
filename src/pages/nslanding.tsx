export const Nslanding = () => {
  console.log('Nslanding');
  return (
    <div className="container">
      <div className="bg" />
      <div className="pagecontainer">
        <div className="navbar landing">
          <div className="nbleft">
            <div className="iclogowhite" />
          </div>
          <div className="nbright">
            <div className="sn">
              <div className="txtaction">Add A Listing</div>
              <button type="button" className="light">
                <span className="ictww" />
              </button>
              <button type="button" className="light">
                <span className="icfbw" />
              </button>
              <button type="button" className="light">
                <span className="icytw" />
              </button>
              <button type="button" className="light">
                <span className="icigw" />
              </button>
              <button type="button" className="light">
                <span className="icliw" />
              </button>
            </div>
          </div>
        </div>
        <div className="ldgaccesspoint">
          <h1>FOOD ACCESS POINTS NEAR YOU</h1>
          <p>
            Search over +200 curated restaurants, farms, markets and other fresh source
            of local, sustainable food.
          </p>
        </div>
        <div className="ldgsearchstore">
          <div className="alook">
            <div className="swhere">
              <span className="icmappin" />
              <span className="txtd">Where</span>
              <input type="text" placeholder="City or Zip Code" />
              <span className="iccrosshair" />
            </div>
            <div className="space" />
            <div className="citysearch">
              <i className="icsearch" />
              <span className="txtd">What</span>
              <input type="text" placeholder="Select Category" />
              <button type="button" className="light">Search</button>
            </div>
            <div className="smcitysearch">
              <i className="icsearch" />
              <span className="txtd">What</span>
              <input type="text" placeholder="Select Category" />
              <button type="button" className="light">Search</button>
            </div>
          </div>
        </div>
      </div>
      <div className="arearesult close">
        <div className="tab">
          {/* <div className="space">
            <div className="line" />
          </div> */}
          {/* <div className="title">All Retailer</div> */}
        </div>
        <div className="searchresult">
          <ul>
            <li>result 1</li>
            <li>result 2</li>
            <li>result 3</li>
            <li>result 4</li>
            <li>result 5</li>
            <li>result 6</li>
            <li>result 7</li>
            <li>result 8</li>
            <li>result 9</li>
            <li>result 10</li>
            <li>result 11</li>
            <li>result 12</li>
            <li>result 13</li>
            <li>result 14</li>
            <li>result 15</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
