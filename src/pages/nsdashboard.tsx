export const Nsdashboard = () => {
  console.log('Nsdashboard');
  return (
    <div className="container">
      <div className="bgwhite" />
      <figure className="bgnoise home" />
      <div className="barblue db" />
      <div className="pagecontainer">
        <div className="navbararea">
          <div className="navbar">
            <div className="nbleft">
              <div className="iclogo" />
            </div>
            <div className="nbright">
              <div className="navigationadmin">
                <nav className="menu">
                  <ol>
                    <li>
                      <a href="#0">Individual Forms</a>
                    </li>
                    <li className="active">
                      <a href="#0">Retailer Forms</a>
                    </li>
                  </ol>
                </nav>
                <div className="userarea">
                  <button type="button" className="light">
                    <span className="icsetting" />
                  </button>
                  <button type="button" className="light">
                    <span className="icbell" />
                  </button>
                  <div className="profile">
                    <button type="button" className="light">
                      <figure className="picture">
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="" />
                      </figure>
                    </button>
                    <div className="logout">
                      <button type="button" className="light">
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard">
          <div className="header">
            <div className="sec1">
              <div className="title">Submissions</div>
              <div className="actions">
                <button type="button" className="light btndown ">
                  <span className="icdown" />
                  <span className="title">Download CSV</span>
                </button>
                <button type="button" className="light btnplus active">
                  <span className="icplus" />
                  <span className="title">Add Retailer</span>
                </button>
              </div>
            </div>
            <div className="sec2">
              <p>View retailer submissions</p>
            </div>
            <div className="statusoption">
              <button type="button" className="light op1 active">
                Pending
              </button>
              <button type="button" className="light op2">
                Aproved
              </button>
              <button type="button" className="light op3">
                Rejected
              </button>
            </div>
            <div className="filterarea">
              <div className="searcharea">
                <div className="opsearch">
                  <span className="icsearch" />
                  <input className="generic" type="text" placeholder="Search for retailer" />
                  <button type="button" className="light">
                    <span className="icclose" />
                  </button>
                </div>
                <button type="button" className="light">
                  Delete
                </button>
              </div>
              <div className="datefilterarea">
                <div className="opfilter">
                  <span className="iccalendar" />
                  <input
                    className="generic"
                    type="text"
                    placeholder="Jan 6, 2022 - Jan 13, 2022"
                  />
                </div>
                <button type="button" className="light">
                  <span className="icfilter" />
                  <span className="title">Filters</span>
                </button>
              </div>
            </div>
          </div>
          <div className="listarea">
            <div className="tabulardatawrap">
              <table className="tlight">
                <thead>
                  <tr>
                    <th colSpan={6}>
                      <div className="toptrim">&nbsp;</div>
                    </th>
                  </tr>
                  <tr>
                    <th className="wcol1 htit1">
                      <div className="option">
                        <label className="chkwrap">
                          <span className="store">
                            <span className="txt2">Retailer</span>
                          </span>
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                      </div>
                    </th>
                    <th className="wcol2 htit2">ZIP Code</th>
                    <th className="wcol3 htit3">Submitted</th>
                    <th className="wcol4 htit4">Status</th>
                    <th className="wcol5 htit5">Control Information</th>
                    <th className="wcol6 htit6">&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="wcol1 bbtm padleft">
                      <div className="option">
                        <label className="chkwrap">
                          <span className="store">
                            <span className="market txt2">
                              Jabbo&apos;s Compact Market
                            </span>
                            <span className="address txt1">
                              923 Ohio Ave, Clarksdale, MS
                            </span>
                          </span>
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                      </div>
                    </td>
                    <td className="wcol2 bbtm">
                      <span className="txt1">38614</span>
                    </td>
                    <td className="wcol3 bbtm">
                      <span className="txt2">Jan 13, 2022</span>
                    </td>
                    <td className="wcol4 bbtm">
                      <div className="colorstatus blue">
                        <span className="dot" />
                        <span className="txt2">Under Review</span>
                      </div>
                    </td>
                    <td className="wcol5 bbtm">
                      <div className="coninf">
                        <span className="cname txt2">Tyler Yarbrough</span>
                        <span className="email txt2">
                          tyarbrough@ahealthierame...
                        </span>
                      </div>
                    </td>
                    <td className="wcol6 bbtm padright">
                      <button type="button" className="light view txt2">
                        View
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="wcol1 bbtm padleft">
                      <div className="option">
                        <label className="chkwrap">
                          <span className="store">
                            <span className="market txt2">
                              Jabbo&apos;s Compact Market
                            </span>
                            <span className="address txt1">
                              923 Ohio Ave, Clarksdale, MS
                            </span>
                          </span>
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                      </div>
                    </td>
                    <td className="wcol2 bbtm">
                      <span className="txt1">38614</span>
                    </td>
                    <td className="wcol3 bbtm">
                      <span className="txt2">Jan 13, 2022</span>
                    </td>
                    <td className="wcol4 bbtm">
                      <div className="colorstatus green">
                        <span className="dot" />
                        <span className="txt2">Approved</span>
                      </div>
                    </td>
                    <td className="wcol5 bbtm">
                      <div className="coninf">
                        <span className="cname txt2">Tyler Yarbrough</span>
                        <span className="email txt2">
                          tyarbrough@ahealthierame...
                        </span>
                      </div>
                    </td>
                    <td className="wcol6 bbtm padright">
                      <button type="button" className="light view txt2">
                        View
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="wcol1 bbtm padleft">
                      <div className="option">
                        <label className="chkwrap">
                          <span className="store">
                            <span className="market txt2">
                              Jabbo&apos;s Compact Market
                            </span>
                            <span className="address txt1">
                              923 Ohio Ave, Clarksdale, MS
                            </span>
                          </span>
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                      </div>
                    </td>
                    <td className="wcol2 bbtm">
                      <span className="txt1">38614</span>
                    </td>
                    <td className="wcol3 bbtm">
                      <span className="txt2">Jan 13, 2022</span>
                    </td>
                    <td className="wcol4 bbtm">
                      <div className="colorstatus red">
                        <span className="dot" />
                        <span className="txt2">Rejected</span>
                      </div>
                    </td>
                    <td className="wcol5 bbtm">
                      <div className="coninf">
                        <span className="cname txt2">Tyler Yarbrough</span>
                        <span className="email txt2">
                          tyarbrough@ahealthierame...
                        </span>
                      </div>
                    </td>
                    <td className="wcol6 bbtm padright">
                      <button type="button" className="light view txt2">
                        View
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="wcol1 bbtm padleft">
                      <div className="option">
                        <label className="chkwrap">
                          <span className="store">
                            <span className="market txt2">
                              Jabbo&apos;s Compact Market
                            </span>
                            <span className="address txt1">
                              923 Ohio Ave, Clarksdale, MS
                            </span>
                          </span>
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                      </div>
                    </td>
                    <td className="wcol2 bbtm">
                      <span className="txt1">38614</span>
                    </td>
                    <td className="wcol3 bbtm">
                      <span className="txt2">Jan 13, 2022</span>
                    </td>
                    <td className="wcol4 bbtm">
                      <div className="colorstatus green">
                        <span className="dot" />
                        <span className="txt2">Approved</span>
                      </div>
                    </td>
                    <td className="wcol5 bbtm">
                      <div className="coninf">
                        <span className="cname txt2">Tyler Yarbrough</span>
                        <span className="email txt2">
                          tyarbrough@ahealthierame...
                        </span>
                      </div>
                    </td>
                    <td className="wcol6 bbtm padright">
                      <button type="button" className="light view txt2">
                        View
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="wcol1 bbtm padleft">
                      <div className="option">
                        <label className="chkwrap">
                          <span className="store">
                            <span className="market txt2">
                              Jabbo&apos;s Compact Market
                            </span>
                            <span className="address txt1">
                              923 Ohio Ave, Clarksdale, MS
                            </span>
                          </span>
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                      </div>
                    </td>
                    <td className="wcol2 bbtm">
                      <span className="txt1">38614</span>
                    </td>
                    <td className="wcol3 bbtm">
                      <span className="txt2">Jan 13, 2022</span>
                    </td>
                    <td className="wcol4 bbtm">
                      <div className="colorstatus green">
                        <span className="dot" />
                        <span className="txt2">Approved</span>
                      </div>
                    </td>
                    <td className="wcol5 bbtm">
                      <div className="coninf">
                        <span className="cname txt2">Tyler Yarbrough</span>
                        <span className="email txt2">
                          tyarbrough@ahealthierame...
                        </span>
                      </div>
                    </td>
                    <td className="wcol6 bbtm padright">
                      <button type="button" className="light view txt2">
                        View
                      </button>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={6}>
                      <div className="navfooter">
                        <div className="btnprev">
                          <button type="button" className="light">
                            <span className="icarrowleftpag" />
                            <span className="title">Previous</span>
                          </button>
                        </div>
                        <div className="pagination">
                          <a href="index.html" className="pagenum active">
                            1
                          </a>
                          <a href="index.html" className="pagenum ">
                            2
                          </a>
                          <a href="index.html" className="pagenum ">
                            3
                          </a>
                          <a href="index.html" className="pagenum ">
                            <span>...</span>
                          </a>
                          <a href="index.html" className="pagenum ">
                            8
                          </a>
                          <a href="index.html" className="pagenum ">
                            9
                          </a>
                          <a href="index.html" className="pagenum ">
                            10
                          </a>
                        </div>
                        <div className="btnnext">
                          <button type="button" className="light">
                            <span className="title left">Next</span>
                            <span className="icarrowrightpag" />
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={6}>
                      <div className="bottomtrim" />
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
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
