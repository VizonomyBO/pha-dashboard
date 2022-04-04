import { VISIBLE_TIME } from '../constants';

export const ModalRequestForm = (
  { type, visible, setVisible }
  : {type: boolean, visible: boolean, setVisible: React.Dispatch<React.SetStateAction<boolean>> }
) => {
  setTimeout(() => {
    setVisible(false);
  }, VISIBLE_TIME);
  return (
    <div>
      {visible && (
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
