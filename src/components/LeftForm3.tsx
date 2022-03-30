import { useMarketplaceDispatch } from '../store/hooks/marketplaceHook';

export const LeftForm3 = () => {
  const {
    setContactName, setContactEmail, setContactOwner, setContactPatron
  } = useMarketplaceDispatch();

  const onchangeForm = () => {
    // setContactDetails({
    //   contact_name: name,
    //   contact_email: email,
    //   contact_owner: owner,
    //   contact_patron: patron
    // });
  };
  return (
    <>
      <div className="item">
        <div className="title">
          <label>Your Name</label>
        </div>
        <div className="ainput">
          <input
            className="light"
            type="text"
            onChange={(e: React.FormEvent<HTMLInputElement>): void => {
              setContactName('contact_name', e.currentTarget.value);
            }}
          />
        </div>
      </div>
      <div className="item">
        <div className="title">
          <label>Your Email</label>
        </div>
        <div className="ainput">
          <input
            className="light"
            type="text"
            onChange={(e: React.FormEvent<HTMLInputElement>): void => {
              setContactEmail('contact_email', e.currentTarget.value);
            }}
          />
        </div>
      </div>
      <div className="item">
        <div className="title grouped" />
        <div className="ainput chk">
          <label className="chkwrap">
            I am the owner/manager of the business.
            <input
              type="checkbox"
              onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                if (e.currentTarget.checked) setContactOwner('yes');
                else setContactOwner('No');
              }}
            />
            <span className="checkmark" />
          </label>
          <label className="chkwrap">
            I am patron of this business.
            <input
              type="checkbox"
              onChange={(e: React.FormEvent<HTMLInputElement>): void => {
                if (e.currentTarget.checked) setContactPatron('yes');
                else setContactPatron('No');
              }}
            />
            <span className="checkmark" />
          </label>
        </div>
      </div>
      <div className="aaction">
        <button className="light" type="button" onClick={() => onchangeForm()}>
          Proceed
        </button>
      </div>
    </>
  );
};
