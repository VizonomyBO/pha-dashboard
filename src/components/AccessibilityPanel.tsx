import { useMarketplaceDispatch } from '../store/hooks';
import { formAccessibility } from '../constants/form';

export const AccessibilityPanel = () => {
  const {
    setWicAccepted, setSnapAccepted
  } = useMarketplaceDispatch();
  const setWicAcceptedFunction = (e: React.FormEvent<HTMLInputElement>): void => {
    if (e.currentTarget.checked) {
      setWicAccepted(formAccessibility.WIC_ACCEPTED.YES);
    } else {
      setWicAccepted(formAccessibility.WIC_ACCEPTED.NO);
    }
  };
  const setSnapAcceptedFunction = (e: React.FormEvent<HTMLInputElement>): void => {
    if (e.currentTarget.checked) {
      setSnapAccepted(formAccessibility.SNAP_ACCEPTED.YES);
    } else {
      setSnapAccepted(formAccessibility.SNAP_ACCEPTED.NO);
    }
  };
  return (
    <>
      <div className="sectiontitle second">
        Select Accessibility
        <sup>*</sup>
      </div>
      <div className="panel">
        <div className="body">
          <div className="card">
            <div className="group">
              <div className="option">
                <label className="chkwrap">
                  WIC Accepted
                  <input
                    type="checkbox"
                    onChange={setWicAcceptedFunction}
                  />
                  <span className="checkmark" />
                </label>
              </div>
              <div className="option">
                <label className="chkwrap">
                  SNAP Accepted
                  <input
                    type="checkbox"
                    onChange={setSnapAcceptedFunction}
                  />
                  <span className="checkmark" />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="sectiontitle second">
          <sup>*</sup>
          <span className="colorred">Required</span>
        </div>
      </div>
    </>
  );
};
