import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { FormHeaderInterface, FormTabType } from '../@types';
import { Formvalidation } from '../utils/validation';
import { BUSINESS_DETAILS, CONTACT_DETAILS, OTHER_QUESTIONS } from '../constants';
import {
  useMarketplaceDispatch,
  useMarketplaceState,
  useTabDispatch,
  useTabState
} from '../store/hooks';

export const FormHeader = ({ showBackArrow, clouseModal }: FormHeaderInterface) => {
  const {
    businessDetails,
    selectCategory,
    otherQuestions
  } = useMarketplaceState();
  const navigate = useNavigate();
  const { resetBusiness } = useMarketplaceDispatch();
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
        otherQuestions
      );
      setActiveTab(estate.value as FormTabType);
    } else {
      setActiveTab(event.target.value as FormTabType);
    }
  };
  return (
    <div className="header">
      <div className="backlink">
        <button
          className="light"
          type="button"
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            if (showBackArrow) {
              navigate('/map');
            } else {
              clouseModal(false, e);
            }
            resetBusiness();
          }}
        >
          <span className="icarrowleft" />
          &nbsp;
          <span className="txt">
            Back to &nbsp;
            { showBackArrow ? 'Locations' : 'Dashboard' }
          </span>
        </button>
      </div>
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
