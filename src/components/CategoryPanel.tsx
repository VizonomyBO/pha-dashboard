export const CategoryPanel = () => {
  console.log('');
  return (
    <>
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
    </>
  );
};
