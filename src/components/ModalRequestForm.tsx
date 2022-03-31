export const ModalRequestForm = (
  { type, visible, setVisible }
  : {type: boolean, visible: boolean, setVisible: React.Dispatch<React.SetStateAction<boolean>> }
) => {
  console.log('AccessibilityPanel', type, visible);
  setTimeout(() => {
    setVisible(false);
  }, 2000);
  return (
    <div>
      {visible && (
        <div className="modaluserfeedbck">
          {type && (
            <div className="modalsubmission">
              <div className="icoarea">
                <div className="iccheckcircle" />
              </div>
              <p className="desc1">Your submission was successful!</p>
              <p className="desc2">
                Our team will review your information and may reach out for additional clarification. Thank you!
              </p>
            </div>
          )}
          {!type && (
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
