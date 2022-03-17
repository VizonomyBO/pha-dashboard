export const Dashboard = () => {
  console.log('dashboard');
  return (
    <div className="container">
      {/* <div className="bgwhite" /> */}
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
                    <li><a href="#0">Individual</a></li>
                    <li className="active">
                      <a href="#0">Dashboard</a>
                    </li>
                    <li>
                      <a href="#0">Projects</a>
                    </li>
                    <li>
                      <a href="#0">Tasks</a>
                    </li>
                    <li>
                      <a href="#0">Reporting</a>
                    </li>
                    <li>
                      <a href="#0">Users</a>
                    </li>
                  </ol>
                </nav>
                <div className="userarea">
                  <button type="button" className="light">
                    <span className="icsetting" />
                  </button>
                  <button className="light" type="button">
                    <span className="icbell" />
                  </button>
                  <div className="profile">
                    <button className="light" type="button">
                      <figure className="picture">
                        <img src="/public/images/img_user.png" alt="" />
                      </figure>
                    </button>
                    <div className="logout">
                      <button className="light" type="button">
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
                <button className="light btndown" type="button">
                  <span className="icdown" />
                  <span className="title">Download CSV</span>
                </button>
                <button className="light btnplus active" type="button">
                  <span className="icplus" />
                  <span className="title">Add Retailer</span>
                </button>
              </div>
            </div>
            <div className="sec2">
              <p>View retailer submissions</p>
            </div>
            <div className="statusoption">
              <button className="light op1 active" type="button">
                Pending
              </button>
              <button className="light op2" type="button">
                Aproved
              </button>
              <button className="light op3" type="button">
                Rejected
              </button>
            </div>
            <div className="filterarea">
              <div className="searcharea">
                <div className="opsearch">
                  <span className="icsearch" />
                  <input className="generic" type="text" />
                </div>
                <button className="light" type="button">
                  Delete
                </button>
              </div>
              <div className="datefilterarea">
                <div className="opfilter">
                  <span className="iccalendar" />
                  <input className="generic" type="text" name="" id="" placeholder="Jan 6, 2022 - Jan 13, 2022" />
                </div>
                <button className="light" type="button">
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
                      <div className="toptrim" />
                    </th>
                  </tr>
                  <tr>
                    <th className="wcol1 htit1">
                      <div className="option">
                        <label htmlFor="a" className="chkwrap">
                          <span className="store">
                            <span className="txt2">
                              Retailer
                            </span>
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
                    <th className="wcol6 htit6"> </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="wcol1 bbtm padleft">
                      <div className="option">
                        <label className="chkwrap">
                          <span className="store">
                            <span className="market txt2">Jabbos Compact Market</span>
                            <span className="address txt1">923 Ohio Ave, Clarksdale, MS</span>
                          </span>
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                      </div>
                    </td>
                    <td className="wcol2 bbtm"><span className="txt1">38614</span></td>
                    <td className="wcol3 bbtm"><span className="txt2">Jan 13, 2022</span></td>
                    <td className="wcol4 bbtm">
                      <div className="colorstatus blue">
                        <span className="dot" />
                        <span className="txt2">Under Review</span>
                      </div>
                    </td>
                    <td className="wcol5 bbtm">
                      <div className="coninf">
                        <span className="cname txt2">Tyler Yarbrough</span>
                        <span className="email txt2">tyarbrough@ahealthierame...</span>
                      </div>
                    </td>
                    <td className="wcol6 bbtm padright">
                      <button className="light view txt2" type="button">
                        View
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="wcol1 bbtm padleft">
                      <div className="option">
                        <label className="chkwrap">
                          <span className="store">
                            <span className="market txt2">Jabbo Compact Market</span>
                            <span className="address txt1">923 Ohio Ave, Clarksdale, MS</span>
                          </span>
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                      </div>
                    </td>
                    <td className="wcol2 bbtm"><span className="txt1">38614</span></td>
                    <td className="wcol3 bbtm"><span className="txt2">Jan 13, 2022</span></td>
                    <td className="wcol4 bbtm">
                      <div className="colorstatus green">
                        <span className="dot" />
                        <span className="txt2">Approved</span>
                      </div>
                    </td>
                    <td className="wcol5 bbtm">
                      <div className="coninf">
                        <span className="cname txt2">Tyler Yarbrough</span>
                        <span className="email txt2">tyarbrough@ahealthierame...</span>
                      </div>
                    </td>
                    <td className="wcol6 bbtm padright">
                      <button className="light view txt2" type="button">
                        View
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="wcol1 bbtm padleft">
                      <div className="option">
                        <label className="chkwrap">
                          <span className="store">
                            <span className="market txt2">Jabbo Compact Market</span>
                            <span className="address txt1">923 Ohio Ave, Clarksdale, MS</span>
                          </span>
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                      </div>
                    </td>
                    <td className="wcol2 bbtm"><span className="txt1">38614</span></td>
                    <td className="wcol3 bbtm"><span className="txt2">Jan 13, 2022</span></td>
                    <td className="wcol4 bbtm">
                      <div className="colorstatus red">
                        <span className="dot" />
                        <span className="txt2">Rejected</span>
                      </div>
                    </td>
                    <td className="wcol5 bbtm">
                      <div className="coninf">
                        <span className="cname txt2">Tyler Yarbrough</span>
                        <span className="email txt2">tyarbrough@ahealthierame...</span>
                      </div>
                    </td>
                    <td className="wcol6 bbtm padright">
                      <button className="light view txt2" type="button">
                        View
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="wcol1 bbtm padleft">
                      <div className="option">
                        <label className="chkwrap">
                          <span className="store">
                            <span className="market txt2">Jabbo Compact Market</span>
                            <span className="address txt1">923 Ohio Ave, Clarksdale, MS</span>
                          </span>
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                      </div>
                    </td>
                    <td className="wcol2 bbtm"><span className="txt1">38614</span></td>
                    <td className="wcol3 bbtm"><span className="txt2">Jan 13, 2022</span></td>
                    <td className="wcol4 bbtm">
                      <div className="colorstatus green">
                        <span className="dot" />
                        <span className="txt2">Approved</span>
                      </div>
                    </td>
                    <td className="wcol5 bbtm">
                      <div className="coninf">
                        <span className="cname txt2">Tyler Yarbrough</span>
                        <span className="email txt2">tyarbrough@ahealthierame...</span>
                      </div>
                    </td>
                    <td className="wcol6 bbtm padright">
                      <button className="light view txt2" type="button">
                        View
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="wcol1 bbtm padleft">
                      <div className="option">
                        <label className="chkwrap">
                          <span className="store">
                            <span className="market txt2">Jabbo Compact Market</span>
                            <span className="address txt1">923 Ohio Ave, Clarksdale, MS</span>
                          </span>
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                      </div>
                    </td>
                    <td className="wcol2 bbtm"><span className="txt1">38614</span></td>
                    <td className="wcol3 bbtm"><span className="txt2">Jan 13, 2022</span></td>
                    <td className="wcol4 bbtm">
                      <div className="colorstatus green">
                        <span className="dot" />
                        <span className="txt2">Approved</span>
                      </div>
                    </td>
                    <td className="wcol5 bbtm">
                      <div className="coninf">
                        <span className="cname txt2">Tyler Yarbrough</span>
                        <span className="email txt2">tyarbrough@ahealthierame...</span>
                      </div>
                    </td>
                    <td className="wcol6 bbtm padright">
                      <button className="light view txt2" type="button">
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
                          <button className="light" type="button">
                            <span className="icarrowleftpag" />
                            <span className="title">Previous</span>
                          </button>
                        </div>
                        <div className="pagination">
                          <a href="." className="pagenum active">1</a>
                          <a href="." className="pagenum ">2</a>
                          <a href="." className="pagenum ">3</a>
                          <a href="." className="pagenum "><span>...</span></a>
                          <a href="." className="pagenum ">8</a>
                          <a href="." className="pagenum ">9</a>
                          <a href="." className="pagenum ">10</a>
                        </div>
                        <div className="btnnext">
                          <button className="light" type="button">
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
                  <label>
                    Select Category
                  </label>
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
                  <label>
                    Select Accessibility
                  </label>
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
