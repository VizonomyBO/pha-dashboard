import { useMarketplaceDispatch, useMarketplaceState } from '../store/hooks';
import { formAccessibility } from '../constants/form';

export const AccessibilityPanel = () => {
  const {
    setWicAccepted, setSnapAccepted
  } = useMarketplaceDispatch();
  const {
    selectAccessibility: {
      wic_accepted,
      snap_accepted
    }
  } = useMarketplaceState();
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
                    value={wic_accepted}
                    checked={wic_accepted === formAccessibility.WIC_ACCEPTED.YES}
                    onChange={setWicAcceptedFunction}
                  />
                  <span className="checkmark ckeckmark-form" />
                </label>
              </div>
              <div className="option">
                <label className="chkwrap">
                  SNAP Accepted
                  <input
                    type="checkbox"
                    value={snap_accepted}
                    checked={snap_accepted === formAccessibility.SNAP_ACCEPTED.YES}
                    onChange={setSnapAcceptedFunction}
                  />
                  <span className="checkmark ckeckmark-form" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
