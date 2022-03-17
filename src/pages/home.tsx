import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';

export const Home = () => {
  console.log('Home');
  return (
    <div className="container">
      <div className="bgwhite" />
      <figure className="bgnoise home" />
      <div className="barblue home" />
      <div className="pagecontainer">
        <Navbar />
        <Header
          type="home"
        />
        <div className="location">
          <div className="locfound">
            <div className="description">
              <div className="desc1">50 Locations Found</div>
              <div className="desc2">
                Don’t see a food pantry or retailer? We can help!
                Submit a request form, and we’ll add the location.
              </div>
              <div className="desc3">Add A Listing</div>
            </div>
            <div className="space"><span className="line" /></div>
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
                    <div className="address">923 Ohio Ave, Clarksdale, MS 38614</div>
                    <div className="distance">
                      <div className="miles">1.2 Miles</div>
                      <div className="kind">WIC-Accepted</div>
                    </div>
                  </div>
                  <div className="arrow">
                    <button className="light" type="button">
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
                    <div className="address">923 Ohio Ave, Clarksdale, MS 38614</div>
                    <div className="distance">
                      <div className="miles">1.2 Miles</div>
                      <div className="kind">WIC-Accepted</div>
                    </div>
                  </div>
                  <div className="arrow">
                    <button className="light" type="button">
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
                    <div className="address">923 Ohio Ave, Clarksdale, MS 38614</div>
                    <div className="distance">
                      <div className="miles">1.2 Miles</div>
                      <div className="kind">WIC-Accepted</div>
                    </div>
                  </div>
                  <div className="arrow">
                    <button className="light" type="button">
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
                    <div className="address">923 Ohio Ave, Clarksdale, MS 38614</div>
                    <div className="distance">
                      <div className="miles">1.2 Miles</div>
                      <div className="kind">WIC-Accepted</div>
                    </div>
                  </div>
                  <div className="arrow">
                    <button className="light" type="button">
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
                    <div className="namemark">JABBO COMPACT MARKET</div>
                    <div className="address">923 Ohio Ave, Clarksdale, MS 38614</div>
                    <div className="distance">
                      <div className="miles">1.2 Miles</div>
                      <div className="kind">WIC-Accepted</div>
                    </div>
                  </div>
                  <div className="arrow">
                    <button className="light" type="button">
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
                <div className="phone">
                  <span className="icphone" />
                  <span className="number">(704) 969-9650</span>
                </div>
                <button className="light" type="button">
                  View Details

                </button>

                <div className="pinaddcomment">
                  <button className="light" type="button">
                    <span className="icaddc
                            oment"
                    />

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
                  <button className="light" type="button">
                    <span className="icaddc
                            oment"
                    />

                  </button>
                </div>
              </div>
            </div>
            <div className="controlzoom">
              <div className="zplus">
                <button className="light" type="button">
                  <span className="iczplus" />

                </button>
              </div>
              <div className="space">
                <div className="line" />
              </div>
              <div className="zminus">
                <button className="light" type="button">
                  <span className="iczminus" />

                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="modalretailer close">
          <div className="panel">
            <div className="head">
              <label>Choose the categories that most accurately describes the retailer.</label>
            </div>
            <div className="body">
              <div className="card">
                <div className="tcatecory">
                  <label>Select Category</label>
                </div>
                <div className="group">
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
              <div className="card">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
