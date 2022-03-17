export const AccessibilityPanel = () => {
  console.log('AccessibilityPanel');
  return (
    <>
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
    </>
  );
};
