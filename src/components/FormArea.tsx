/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from 'classnames';
import { useState } from 'react';
import { LeftForm1 } from './LeftForm1';
import { LeftForm2 } from './LeftForm2';
import { LeftForm3 } from './LeftForm3';
import { FormHeader } from './FormHeader';
import { RightForm } from './RightForm';
import {
  BUSINESS_DETAILS,
  CLASSES_BY_FORM,
  CONTACT_DETAILS,
  OTHER_QUESTIONS
} from '../constants';
import {
  useMarketplaceDispatch, useModalDispatch, useModalState, useTabDispatch, useTabState
} from '../store/hooks';

export const FormArea = ({
  isModal,
  clickProceed,
  clickApprove,
  clickDecline,
  clickDelete,
}: {
  isModal: boolean;
  clickProceed?: () => void;
  clickApprove?: () => void;
  clickDecline?: () => void;
  clickDelete?: () => void;
}) => {
  const { activeTab } = useTabState();
  const { setActiveTab } = useTabDispatch();
  const { resetBusiness } = useMarketplaceDispatch();
  const [formClass] = useState(CLASSES_BY_FORM[activeTab]);
  const { setModal } = useModalDispatch();
  const { type } = useModalState();
  const clouseModal = (
    typeModal: boolean,
    e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    if (!typeModal) {
      setModal({ type: typeModal, open: typeModal });
      resetBusiness();
      setActiveTab(BUSINESS_DETAILS);
    }
  };
  const formAreaClass = classNames('formarea', { [formClass]: true });
  const formArea = (
    <div
      className={formAreaClass}
      style={isModal ? { overflow: 'auto' } : {}}
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => (clouseModal(true, e))}
    >
      <FormHeader
        showBackArrow={!isModal}
        clouseModal={clouseModal}
      />
      <div className="group">
        <div className="left">
          {activeTab === BUSINESS_DETAILS && (
            <LeftForm1 />
          )}
          {activeTab === OTHER_QUESTIONS && (
            <LeftForm2 />
          )}
          {activeTab === CONTACT_DETAILS && (
            <LeftForm3 />
          )}
        </div>
        <div className="right">
          <RightForm />
        </div>
      </div>
      {
        isModal && type ? (
          <div className="aaction">
            <button
              className="light"
              type="button"
              onClick={() => {
                if (clickApprove) {
                  clickApprove();
                }
                resetBusiness();
              }}
              style={{ padding: '16px 30px' }}
            >
              Approve
            </button>
            <button
              className="light"
              type="button"
              onClick={() => {
                if (clickDecline) {
                  clickDecline();
                }
                resetBusiness();
              }}
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
              onClick={() => {
                if (clickDelete) {
                  clickDelete();
                }
                resetBusiness();
              }}
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
        )
          : (
            <div className="aaction">
              <button className="light" type="button" onClick={clickProceed}>
                {activeTab === CONTACT_DETAILS ? 'Submit' : 'Proceed'}
              </button>
            </div>
          )
        }
    </div>
  );

  if (!isModal) return formArea;

  return (
    <>
      <div
        className="container"
        style={{
          background: 'black',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: '2',
          opacity: 0.2
        }}
      />
      <div
        className="container"
        style={{
          position: 'absolute',
          zIndex: '2',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      >
        <div
          className="pagecontainer"
          style={{
            top: '25px',
            left: 0,
            right: 0,
            bottom: 0,
          }}
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => (clouseModal(false, e))}
        >
          {formArea}
        </div>
      </div>
    </>
  );
};
