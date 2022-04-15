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
import { useTabState } from '../store/hooks';

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
  const [formClass] = useState(CLASSES_BY_FORM[activeTab]);
  const formAreaClass = classNames('formarea', { [formClass]: true });
  const formArea = (
    <div
      className={formAreaClass}
      style={isModal ? { overflow: 'auto' } : {}}
    >
      <FormHeader
        showBackArrow={!isModal}
      />
      <div className="group">
        <div className="left">
          {activeTab === BUSINESS_DETAILS && (
            <LeftForm1 isEdit={isModal} />
          )}
          {activeTab === OTHER_QUESTIONS && (
            <LeftForm2 />
          )}
          {activeTab === CONTACT_DETAILS && (
            <LeftForm3 />
          )}
          {
            isModal ? (
              <div className="aaction">
                <button className="light" type="button" onClick={clickApprove} style={{ padding: '16px 30px' }}>
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
            )
              : (
                <div className="aaction">
                  <button className="light" type="button" onClick={clickProceed}>
                    Proceed
                  </button>
                </div>
              )

          }
        </div>
        <div className="right">
          <RightForm />
        </div>
      </div>
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
            top: '100px',
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          {formArea}
        </div>
      </div>
    </>
  );
};
