export const EditButtons = ({
  clickApprove,
  clickDecline,
  clickDelete
}: {
  clickApprove: () => void;
  clickDecline: () => void;
  clickDelete: () => void;
}) => (
  <div className="aaction">
    <button
      className="light"
      type="button"
      onClick={clickApprove}
      style={{ padding: '16px 30px' }}
    >
      Approve
    </button>
    <button
      className="light"
      type="button"
      onClick={clickDecline}
      style={{
        backgroundColor: 'white',
        padding: '16px 30px',
        color: '#0099B8',
        border: '2px solid #E3E5E5',
        margin: '4px'
      }}
    >
      Decline
    </button>
    <button
      className="light"
      type="button"
      onClick={clickDelete}
      style={{
        backgroundColor: 'white',
        padding: '16px 30px',
        color: '#E40000',
        border: '2px solid #E40000',
        margin: '4px'
      }}
    >
      Delete
    </button>
  </div>
);
