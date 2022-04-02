export const Nshome = () => {
  console.log('Nshome');
  return (
    <div className="container">
      <div className="bgwhite" />
      <figure className="bgnoise home" />
      <div className="barblue home" id="barblue" />
      <header className="topmenu">
        <div className="spanel">
          <div className="logoarea">
            <div className="iclogo" />
          </div>
          <div className="alook">
            <div className="citysearch">
              <i className="icsearch" />
              <input type="text" placeholder="City or Zip Code" />
              <button type="button" className="light">Search</button>
            </div>
          </div>
        </div>
      </header>
      <div className="modalretailer close">
        <div className="panel">
          <div className="head">
            <label>
              Choose the categories that most accurately describes the retailer.
            </label>
          </div>
          <div className="body">
            <div className="card">
              <div className="tcatecory">
                <label>Select Category</label>
              </div>
              <div className="group">
                <div className="option">
                  <label className="chkwrap">
                    Corner/convenience store
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
                    Dollar stores
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>
                <div className="option">
                  <label className="chkwrap">
                    Farmers markets
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
                    Food co-op
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>
                <div className="option">
                  <label className="chkwrap">
                    Grocery Store
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>
                <div className="option">
                  <label className="chkwrap">
                    General Store
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>
                <div className="option">
                  <label className="chkwrap">
                    Supermarket/big box retailer
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="tcatecory">
                <label>Select Awarded Badges</label>
              </div>
              <div className="group">
                <div className="option">
                  <label className="chkwrap">
                    Fresh Produce
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>
                <div className="option">
                  <label className="chkwrap">
                    Quality
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>
                <div className="option">
                  <label className="chkwrap">
                    Local
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>
                <div className="option">
                  <label className="chkwrap">
                    Visibility
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>
                <div className="option">
                  <label className="chkwrap">
                    Superstar
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="tcatecory">
                <label>Select Data Sources</label>
              </div>
              <div className="group">
                <div className="option">
                  <label className="chkwrap">
                    Submitted By Users
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>
                <div className="option">
                  <label className="chkwrap">
                    OpenStreetMap
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>
                <div className="option">
                  <label className="chkwrap">
                    USDA Food Markets
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
              <div className="tcatecory">
                <label>&nbsp;</label>
              </div>
              <div className="tcatecory">
                <label>Select Accessibility</label>
              </div>
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
          <div className="foot">
            <button type="button" className="light">Apply</button>
          </div>
        </div>
      </div>
      <div className="pagecontainer">
        <div className="navbararea">
          <div className="navbar">
            <div className="nbleft">
              <div className="iclogo" />
            </div>
            <div className="nbright">
              <div className="sn">
                <button type="button" className="light">
                  <span className="ictw" />
                </button>
                <button type="button" className="light">
                  <span className="icfb" />
                </button>
                <button type="button" className="light">
                  <span className="icyt" />
                </button>
                <button type="button" className="light">
                  <span className="icig" />
                </button>
                <button type="button" className="light">
                  <span className="icli" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="searchoptionsarea">
          <div className="accesspoint colored">
            <h1>FOOD ACCESS POINTS NEAR YOU</h1>
            <p>
              Search over +200 curated restaurants, farms, markets and other fresh
              source of local, sustainable food.
            </p>
          </div>
          <div className="searcharea colored">
            <div className="alook">
              <div className="accesstype">Select Access Type</div>
              <div className="citysearch">
                <i className="icsearch" />
                <input type="text" placeholder="City or Zip Code" />
                <button type="button" className="light">Search</button>
              </div>
            </div>
          </div>
        </div>
        <div className="location">
          <div className="locfound">
            <div className="description">
              <div className="desc1">50 Locations Found</div>
              <div className="desc2">
                Don’t see a food pantry or retailer? We can help! Submit a request
                form, and we’ll add the location.
              </div>
              <div className="optaddchk">
                <div className="desc3">Add A Listing</div>
                <div className="option">
                  <label className="chkwrap">
                    Filter by map view
                    <input type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
            </div>
            <div className="space">
              <span className="line" />
            </div>
            <div className="listloc">
              <div className="listingarea">
                <div className="item">
                  <div className="statemk">
                    <div className="cardmk">
                      <div className="icmkred dimensions" />
                      <div className="desc red">Food Co-op</div>
                    </div>
                  </div>
                  <div className="descres">
                    <div className="namemark">JABBO’S COMPACT MARKET</div>
                    <div className="address">
                      923 Ohio Ave, Clarksdale, MS 38614
                    </div>
                    <div className="distance">
                      <div className="miles">1.2 Miles</div>
                      <div className="kind">WIC-Accepted</div>
                    </div>
                  </div>
                  <div className="arrow">
                    <button type="button" className="light">
                      <div className="icarrowright" />
                    </button>
                  </div>
                </div>
                <div className="item">
                  <div className="statemk">
                    <div className="cardmk">
                      <div className="icmkgreen dimensions" />
                      <div className="desc green">Food Co-op</div>
                    </div>
                  </div>
                  <div className="descres">
                    <div className="namemark">JABBO’S COMPACT MARKET</div>
                    <div className="address">
                      923 Ohio Ave, Clarksdale, MS 38614
                    </div>
                    <div className="distance">
                      <div className="miles">1.2 Miles</div>
                      <div className="kind">WIC-Accepted</div>
                    </div>
                  </div>
                  <div className="arrow">
                    <button type="button" className="light">
                      <div className="icarrowright" />
                    </button>
                  </div>
                </div>
                <div className="item">
                  <div className="statemk">
                    <div className="cardmk">
                      <div className="icmkgreen dimensions" />
                      <div className="desc green">Food Co-op</div>
                    </div>
                  </div>
                  <div className="descres">
                    <div className="namemark">JABBO’S COMPACT MARKET</div>
                    <div className="address">
                      923 Ohio Ave, Clarksdale, MS 38614
                    </div>
                    <div className="distance">
                      <div className="miles">1.2 Miles</div>
                      <div className="kind">WIC-Accepted</div>
                    </div>
                  </div>
                  <div className="arrow">
                    <button type="button" className="light">
                      <div className="icarrowright" />
                    </button>
                  </div>
                </div>
                <div className="item">
                  <div className="statemk">
                    <div className="cardmk">
                      <div className="icmkblue dimensions" />
                      <div className="desc blue">Food Co-op</div>
                    </div>
                  </div>
                  <div className="descres">
                    <div className="namemark">JABBO’S COMPACT MARKET</div>
                    <div className="address">
                      923 Ohio Ave, Clarksdale, MS 38614
                    </div>
                    <div className="distance">
                      <div className="miles">1.2 Miles</div>
                      <div className="kind">WIC-Accepted</div>
                    </div>
                  </div>
                  <div className="arrow">
                    <button type="button" className="light">
                      <div className="icarrowright" />
                    </button>
                  </div>
                </div>
                <div className="item">
                  <div className="statemk">
                    <div className="cardmk">
                      <div className="icmkred dimensions" />
                      <div className="desc red">Food Co-op</div>
                    </div>
                  </div>
                  <div className="descres">
                    <div className="namemark">JABBO’S COMPACT MARKET</div>
                    <div className="address">
                      923 Ohio Ave, Clarksdale, MS 38614
                    </div>
                    <div className="distance">
                      <div className="miles">1.2 Miles</div>
                      <div className="kind">WIC-Accepted</div>
                    </div>
                  </div>
                  <div className="arrow">
                    <button type="button" className="light">
                      <div className="icarrowright" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="amap">
            <div className="modal">
              <figure className="picture">
                <img src="/public/images/img_market_001.png" alt="" />
              </figure>
              <div className="detailcard">
                <div className="store">JABBO’S COMPACT MARKET</div>
                <div className="services">
                  <span className="kind icmkdish" />
                  <span className="kind icmkshop" />
                  <span className="kind icmkdish" />
                  <span className="kind icmkshop" />
                  <span className="kind icmkshop" />
                </div>
                <div className="address">923 Ohio Ave, Clarksdale, MS 38614</div>
                {/* <div class="description">“Fresh produce at a great price, we
                            will certainly visit again soon...”</div> */}
                <div className="phone">
                  <span className="icphone" />
                  <span className="number">(704) 969-9650</span>
                </div>
                <button type="button" className="light">View Details</button>
                <div className="pinaddcomment">
                  <button type="button" className="light">
                    <span className="icaddcoment" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bmodal">
              <figure className="picture">
                <img src="/public/images/img_market_s_001.png" alt="" />
              </figure>
              <div className="detailcard">
                <div className="store">JABBO’S COMPACT MARKET</div>
                <div className="attribute">
                  <span className="aitem">Fresh</span>
                  <span className="aitem">Quality</span>
                  <span className="aitem">Visible</span>
                </div>
                <div className="address">923 Ohio Ave, Clarksdale, MS</div>
                <div className="phone">
                  <span className="icphone" />
                  <span className="number">(704) 969-9650</span>
                </div>
                <div className="pinaddcomment">
                  <button type="button" className="light">
                    <span className="icaddcoment" />
                  </button>
                </div>
              </div>
            </div>
            <div className="controlzoom">
              <div className="zplus">
                <button type="button" className="light">
                  <span className="iczplus" />
                </button>
              </div>
              <div className="space">
                <div className="line" />
              </div>
              <div className="zminus">
                <button type="button" className="light">
                  <span className="iczminus" />
                </button>
              </div>
            </div>
            <div className="supermarketfilter">&nbsp;</div>
            {/* <div class="retailerlist close"></div> */}
            <div className="retailerlist">
              <div className="tab">
                <div className="space">
                  <div className="line" />
                </div>
                <div className="title">All Retailer</div>
              </div>
              {/* <div class="listpanel close"></div> */}
              <div className="listpanel">
                <div className="item">
                  <div className="picturerow">
                    <div className="picture">
                      <img src="/public/images/img_product_1.png" alt="" />
                    </div>
                    <div className="picture">
                      <img src="/public/images/img_product_4.png" alt="" />
                    </div>
                  </div>
                  <div className="detail">
                    <div className="namemarket">JABBO’S COMPACT MARKET</div>
                    <div className="address">
                      <div className="reference">
                        <div className="ref1">
                          923 Ohio Ave, Clarksdale, MS 38614
                        </div>
                        <div className="ref2">1.2 Miles WIC-Accepted</div>
                      </div>
                      <div className="statemk">
                        <div className="cardmk">
                          <div className="icmkblue dimensions" />
                          <div className="desc blue">CO-OP</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="picturerow">
                    <div className="picture">
                      <img src="/public/images/img_product_3.png" alt="" />
                    </div>
                    <div className="picture">
                      <img src="/public/images/img_product_1.png" alt="" />
                    </div>
                  </div>
                  <div className="detail">
                    <div className="namemarket">JABBO’S COMPACT MARKET</div>
                    <div className="address">
                      <div className="reference">
                        <div className="ref1">
                          923 Ohio Ave, Clarksdale, MS 38614
                        </div>
                        <div className="ref2">1.2 Miles WIC-Accepted</div>
                      </div>
                      <div className="statemk">
                        <div className="cardmk">
                          <div className="icmkblue dimensions" />
                          <div className="desc blue">GROCERY</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="picturerow">
                    <div className="picture">
                      <img src="/public/images/img_product_1.png" alt="" />
                    </div>
                    <div className="picture">
                      <img src="/public/images/img_product_3.png" alt="" />
                    </div>
                  </div>
                  <div className="detail">
                    <div className="namemarket">JABBO’S COMPACT MARKET</div>
                    <div className="address">
                      <div className="reference">
                        <div className="ref1">
                          923 Ohio Ave, Clarksdale, MS 38614
                        </div>
                        <div className="ref2">1.2 Miles WIC-Accepted</div>
                      </div>
                      <div className="statemk">
                        <div className="cardmk">
                          <div className="icmkblue dimensions" />
                          <div className="desc blue">CO-OP</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="picturerow">
                    <div className="picture">
                      <img src="/public/images/img_product_1.png" alt="" />
                    </div>
                    <div className="picture">
                      <img src="/public/images/img_product_4.png" alt="" />
                    </div>
                  </div>
                  <div className="detail">
                    <div className="namemarket">JABBO’S COMPACT MARKET</div>
                    <div className="address">
                      <div className="reference">
                        <div className="ref1">
                          923 Ohio Ave, Clarksdale, MS 38614
                        </div>
                        <div className="ref2">1.2 Miles WIC-Accepted</div>
                      </div>
                      <div className="statemk">
                        <div className="cardmk">
                          <div className="icmkblue dimensions" />
                          <div className="desc blue">CO-OP</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
