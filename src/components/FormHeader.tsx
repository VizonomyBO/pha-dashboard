import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { FormHeaderInterface, FormTabType } from '../@types';
import { Formvalidation } from '../utils/validation';
import { BUSINESS_DETAILS, CONTACT_DETAILS, OTHER_QUESTIONS } from '../constants';
import {
  useMarketplaceState,
  useModalDispatch,
  useTabDispatch,
  useTabState
} from '../store/hooks';

export const FormHeader = ({ showBackArrow }: FormHeaderInterface) => {
  const {
    businessDetails,
    selectCategory,
    selectAccessibility,
    otherQuestions
  } = useMarketplaceState();
  const { setModal } = useModalDispatch();
  const { activeTab } = useTabState();
  const { setActiveTab } = useTabDispatch();
  const businessClass = classNames('option', { active: activeTab === BUSINESS_DETAILS });
  const otherClass = classNames('option', { active: activeTab === OTHER_QUESTIONS });
  const contactClass = classNames('option', { active: activeTab === CONTACT_DETAILS });
  const validationForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (showBackArrow) {
      const estate = Formvalidation(
        event.target.value,
        activeTab,
        businessDetails,
        selectCategory,
        selectAccessibility,
        otherQuestions
      );
      setActiveTab(estate.value as FormTabType);
    } else {
      setActiveTab(event.target.value as FormTabType);
    }
  };
  return (
    <div className="header">
      {showBackArrow ? (
        <div className="backlink">
          <Link to="/home">
            <button className="light" type="button">
              <span className="icarrowleft">
                <span className="txt">Back to Locations</span>
              </span>
            </button>
          </Link>
        </div>
      ) : (
        <div className="backlink">
          <button
            className="light"
            type="button"
            onClick={() => {
              setModal({ type: false, open: false });
            }}
          >
            <span className="icarrowleft" />
            &nbsp;
            <span className="txt">Back to Dashboard</span>
          </button>
        </div>
      )}
      <h2 className="sectitle">Marketplace Request Form</h2>
      <p className="secdescription">Have a location listed by completing the form below</p>
      <div
        className="optiondetail"
        onChange={validationForm}
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
