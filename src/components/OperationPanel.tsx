import { formOperation } from '../constants/form';
import { useMarketplaceDispatch, useMarketplaceState } from '../store/hooks';

export const OperationPanel = () => {
  const {
    setSelectOperation
  } = useMarketplaceDispatch();
  const {
    currentOperation
  } = useMarketplaceState();
  const setOperation = (value: string): void => {
    setSelectOperation(value);
  };
  return (
    <>
      <div className="sectiontitle second">
        Current Operations
      </div>
      <div className="panel">
        <div className="body">
          <div className="card">
            <div className="group">
              <div className="option">
                <label className="chkwrap">
                  <span>
                    The retail location is&nbsp;
                  </span>
                  <span style={{ fontFamily: 'FuturaBold, sans-serif' }}>
                    permanently closed
                  </span>
                  <input
                    type="checkbox"
                    value={currentOperation.open}
                    checked={currentOperation.open === formOperation.OPEN.YES}
                    onChange={() => (setOperation(formOperation.OPEN.YES))}
                  />
                  <span className="checkmark ckeckmark-form" />
                </label>
              </div>
              <div className="option">
                <label className="chkwrap">
                  <span>
                    The retail location is&nbsp;
                  </span>
                  <span style={{ fontFamily: 'FuturaBold, sans-serif' }}>
                    open
                  </span>
                  <input
                    type="checkbox"
                    value={currentOperation.open}
                    checked={currentOperation.open === formOperation.OPEN.NO}
                    onChange={() => (setOperation(formOperation.OPEN.NO))}
                  />
                  <span className="checkmark ckeckmark-form" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sectiontitle second">
        <sup>*</sup>
        <span className="colorred">Required</span>
      </div>
    </>
  );
};
