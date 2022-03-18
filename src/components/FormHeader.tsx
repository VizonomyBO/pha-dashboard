import classNames from 'classnames';
import { FormHeaderInterface } from '../@types';
import { BUSINESS_DETAILS, CONTACT_DETAILS, OTHER_QUESTIONS } from '../constants';

export const FormHeader = ({ active, setActive }: FormHeaderInterface) => {
  const businessClass = classNames('option', { active: active === BUSINESS_DETAILS });
  const otherClass = classNames('option', { active: active === OTHER_QUESTIONS });
  const contactClass = classNames('option', { active: active === CONTACT_DETAILS });
  return (
    <div className="header">
      <div className="backlink">
        <button className="light" type="button">
          <span className="icarrowleft">
            <span className="txt">Back to Locations</span>
          </span>
        </button>
      </div>
      <h2 className="sectitle">Marketplace Request Form</h2>
      <p className="secdescription">Have a location listed by completing the form below</p>
      <div
        className="optiondetail"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          console.log(event.target.value);
          setActive(event.target.value);
        }}
      >
        <div className={businessClass}>
          <label className="chkwrap">
            Business Details
            <input
              type="radio"
              value={BUSINESS_DETAILS}
              name="option"
            />
            <span className="checkmark" />
          </label>
        </div>
        <div className={otherClass}>
          <label className="chkwrap">
            Other Questions
            <input
              type="radio"
              value={OTHER_QUESTIONS}
              name="option"
            />
            <span className="checkmark" />
          </label>
        </div>
        <div className={contactClass}>
          <label className="chkwrap">
            Contact Details
            <input
              type="radio"
              value={CONTACT_DETAILS}
              name="option"
            />
            <span className="checkmark" />
          </label>
        </div>
      </div>
    </div>
  );
};
