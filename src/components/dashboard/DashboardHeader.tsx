export const DashboardHeader = () => (
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
      {/* <div className="datefilterarea">
        <div className="opfilter">
          <span className="iccalendar" />
          <input className="generic" type="text" name="" id="" placeholder="Jan 6, 2022 - Jan 13, 2022" />
        </div>
        <button className="light" type="button">
          <span className="icfilter" />
          <span className="title">Filters</span>
        </button>
      </div> */}
    </div>
  </div>
);
