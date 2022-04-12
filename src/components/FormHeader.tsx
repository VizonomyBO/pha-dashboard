import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { FormHeaderInterface, FormTabType } from '../@types';
import { Formvalidation } from '../utils/validation';
import { useMarketplaceState, useModalDispatch } from '../store/hooks';
import {
  BUSINESS_DETAILS,
  CONTACT_DETAILS,
  OTHER_QUESTIONS,
  ROUTE_DASHBOARD,
  ROUTE_HOME
} from '../constants';

export const FormHeader = ({ activeTab, setActiveTab }: FormHeaderInterface) => {
  const {
    businessDetails,
    selectCategory,
    selectAccessibility,
    otherQuestions
  } = useMarketplaceState();
  const { setModal } = useModalDispatch();
  const businessClass = classNames('option', { active: activeTab === BUSINESS_DETAILS });
  const otherClass = classNames('option', { active: activeTab === OTHER_QUESTIONS });
  const contactClass = classNames('option', { active: activeTab === CONTACT_DETAILS });
  const location = useLocation();
  const routeNavigate: string = location.state ? ROUTE_DASHBOARD : ROUTE_HOME;
  const validationForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const estate = Formvalidation(
      event.target.value,
      activeTab,
      businessDetails,
      selectCategory,
      selectAccessibility,
      otherQuestions
    );
    setModal({ type: estate.type, open: estate.open });
    setActiveTab(estate.value as FormTabType);
  };
  return (
    <div className="header">
      <div className="backlink">
        <Link to={routeNavigate}>
          <button className="light" type="button">
            <span className="icarrowleft">
              <span className="txt">Back to Locations</span>
            </span>
          </button>
        </Link>
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
