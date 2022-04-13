import { VISIBLE_TIME } from '../constants';
import { useModalDispatch, useModalState } from '../store/hooks/modalHook';

export const ModalRequestForm = () => {
  const { type, open } = useModalState();
  const { setModal } = useModalDispatch();
  setTimeout(() => {
    if (open) {
      setModal({ type: false, open: false });
    }
  }, VISIBLE_TIME);
  return (
    <div>
      {open && (
        <div className="modaluserfeedbck">
          {type ? (
            <div className="modalsubmission">
              <div className="icoarea">
                <div className="iccheckcircle" />
              </div>
              <p className="desc1">Your submission was successful!</p>
              <p className="desc2">
                Our team will review your information and may reach out for additional clarification. Thank you!
              </p>
            </div>
          )
            : (
              <div className="modalsubmission">
                <div className="icoarea">
                  <div className="icxcircle" />
                </div>
                <p className="desc1">Sorry!</p>
                <p className="desc2">Please complete all required fields.</p>
              </div>
            )}
        </div>
      )}
    </div>
  );
};
