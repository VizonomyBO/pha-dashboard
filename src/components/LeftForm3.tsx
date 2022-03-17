export const LeftForm3 = () => {
  console.log('LeftForm3');
  return (
    <>
      <div className="item">
        <div className="title">
          <label>Your Name</label>
        </div>
        <div className="ainput">
          <input className="light" type="text" />
        </div>
      </div>
      <div className="item">
        <div className="title">
          <label>Your Email</label>
        </div>
        <div className="ainput">
          <input className="light" type="text" />
        </div>
      </div>
      <div className="item">
        <div className="title grouped" />
        <div className="ainput chk">
          <label className="chkwrap">
            I am the owner/manager of the business.
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
          <label className="chkwrap">
            I am patron of this business.
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
        </div>
      </div>
    </>
  );
};
