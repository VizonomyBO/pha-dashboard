import React, { useEffect, useState } from 'react';
import { JSON_FIELD, MAX_TEXT, TYPE_INDIVIDUAL_FORM } from '../constants';
import { ROW_STATUS } from '../constants/dashboard';
import { AvailabilityOptions } from '../@types/database';
import { formConstants } from '../constants/form';
import { ENDPOINTS } from '../constants/url';
import { useModalDispatch } from '../store/hooks';
import { useIndividualFormDispatch, useIndividualFormState } from '../store/hooks/individualFormHook';
import { deleteBreakLines, validationIndividualForm } from '../utils/validation';
import { webRequest } from '../utils/webRequest';
import { Attachment } from './Attachment';
import { EditButtons } from './Editbuttons';

export const FeedbackForm = (
  {
    setVisible,
    retailerId,
    isEdit = false
  }: {
    setVisible: React.Dispatch<React.SetStateAction<boolean>>,
    retailerId: string,
    isEdit?: boolean
  }
) => {
  const { setIndividualForm, resetIndividualForm } = useIndividualFormDispatch();
  const { setModal } = useModalDispatch();
  const [availabilityOptions, setAvailabilityOptions] = useState<AvailabilityOptions>({
    FRESH: false,
    FROZEN: false,
    CANNED: false
  });

  const {
    closed,
    availability,
    quality,
    visibility,
    local,
    meets_need,
    contact_phone,
    contact_email,
    contact_zipcode,
    produce_avail_store,
    files,
    imagelinks
  } = useIndividualFormState();
  const getObject = () => ({
    closed,
    availability,
    quality,
    visibility,
    local,
    meets_need,
    contact_phone,
    contact_zipcode,
    contact_email,
    produce_avail_store,
    retailer_id: retailerId
  });

  const getFormData = (jsonString: string) => {
    const formData = new FormData();
    formData.append(JSON_FIELD, jsonString);
    if (files) {
      files.forEach((file) => {
        formData.append('files', file);
      });
    }
    return formData;
  };

  const proccessPromise = (promise: Promise<Response>) => {
    promise.then((res) => res.json()).then((res) => {
      if (res.success) {
        if (!isEdit) {
          setModal({ type: true, open: true });
        }
        setVisible(false);
        resetIndividualForm();
      } else {
        if (!isEdit) {
          setModal({ type: false, open: true });
        }
        setVisible(false);
        resetIndividualForm();
      }
    });
  };

  const sendForm = () => {
    if (validationIndividualForm({
      availability, quality, visibility, local, meets_need
    })) {
      const obj = getObject();
      const formData = getFormData(JSON.stringify(obj).replace("'", "\\'"));
      const headers = webRequest.generateMultipartHeader();
      proccessPromise(webRequest.postMultipart(
        ENDPOINTS.PHA_INDIVIDUAL(),
        formData,
        headers
      ));
    } else if (!isEdit) {
      setModal({ type: false, open: true });
    }
  };

  const closeModal = (type: boolean, e: React.MouseEvent) => {
    e.stopPropagation();
    setVisible(type);
    if (!type) {
      resetIndividualForm();
    }
  };

  const putForm = (status: string) => {
    const obj = getObject();
    let finalObjet: unknown = { submission_status: status };
    if (status === ROW_STATUS.APPROVED) {
      finalObjet = { ...obj, submission_status: status };
    }
    const formData = getFormData(JSON.stringify(finalObjet).replace("'", "\\'"));
    const headers = webRequest.generateMultipartHeader();
    proccessPromise(webRequest.putMultipart(
      ENDPOINTS.INDIVIDUAL_FORM(retailerId),
      formData,
      headers
    ));
  };

  const approveForm = () => putForm(ROW_STATUS.APPROVED);
  const rejectForm = () => putForm(ROW_STATUS.REJECTED);
  const deleteForm = () => putForm(ROW_STATUS.DELETED);
  useEffect(() => {
    setIndividualForm(TYPE_INDIVIDUAL_FORM.retailer_id, retailerId);
  }, [setIndividualForm, retailerId]);

  useEffect(() => {
    setAvailabilityOptions({
      FRESH: availability?.includes(formConstants.AVAILABILITY.FRESH) || false,
      FROZEN: availability?.includes(formConstants.AVAILABILITY.FROZEN) || false,
      CANNED: availability?.includes(formConstants.AVAILABILITY.CANNED) || false,
    });
  }, [availability, setAvailabilityOptions]);

  useEffect(() => {
    const opts: string[] = [];
    if (availabilityOptions.FRESH) {
      opts.push(formConstants.AVAILABILITY.FRESH);
    }
    if (availabilityOptions.FROZEN) {
      opts.push(formConstants.AVAILABILITY.FROZEN);
    }
    if (availabilityOptions.CANNED) {
      opts.push(formConstants.AVAILABILITY.CANNED);
    }
    setIndividualForm(TYPE_INDIVIDUAL_FORM.availability, opts.join(', '));
  }, [availabilityOptions.FRESH, availabilityOptions.FROZEN, availabilityOptions.CANNED, setIndividualForm]);

  return (
    <div
      role="button"
      tabIndex={0}
      className="modaluserfeedbck"
      onClick={(e: React.MouseEvent) => (closeModal(false, e))}
    >
      <div
        role="button"
        tabIndex={0}
        className="formpage"
        onClick={(e: React.MouseEvent) => (closeModal(true, e))}
      >
        <div className="header">
          <div className="backlink">
            <button
              className="light"
              type="button"
              onClick={(e: React.MouseEvent) => (closeModal(false, e))}
            >
              <span className="icclose" />
              <span className="txt">
                Close
              </span>
            </button>
          </div>
          <h2 className="sectitle">User Feedback Form</h2>
          <p className="secdescription">Have a location listed by completing the form below</p>
        </div>
        <div className="body">
          <div className="group">
            <div className="aleft">
              <div className="sectiontitle">
                Current Operations
              </div>
              <div className="item">
                <div className="title grouped">
                  <span className="description">
                    Select the checkbox if the retail location is permanently closed.
                  </span>
                </div>
                <div className="ainput chk">
                  <label className="chkwrap">
                    Closed
                    <input
                      type="checkbox"
                      name="closed"
                      value={closed}
                      checked={closed === formConstants.CLOSED.YES}
                      onChange={
                        () => {
                          if (closed === formConstants.CLOSED.YES) {
                            setIndividualForm(
                              TYPE_INDIVIDUAL_FORM.closed,
                              formConstants.CLOSED.NO
                            );
                          } else {
                            setIndividualForm(
                              TYPE_INDIVIDUAL_FORM.closed,
                              formConstants.CLOSED.YES
                            );
                          }
                        }
                      }
                    />
                    <span className="checkmark ckeckmark-form" />
                  </label>
                </div>
              </div>
              <div className="sectiontitle">
                Availability
              </div>
              <div className="item">
                <div className="title grouped">
                  <span className="number">1.</span>
                  <span className="description">
                    What type of fruits and vegetables are stocked at this location? Ple
                    ase select categories with three or more items regularly stocked?
                  </span>
                </div>
                <div className="ainput chk">
                  <label className="chkwrap">
                    Fresh (only continue if checks this)
                    <input
                      type="checkbox"
                      checked={availabilityOptions.FRESH}
                      onChange={
                        () => {
                          setAvailabilityOptions({
                            ...availabilityOptions,
                            FRESH: !availabilityOptions.FRESH
                          });
                        }
                      }
                    />
                    <span className="checkmark ckeckmark-form" />
                  </label>
                  <label className="chkwrap">
                    Frozen
                    <input
                      checked={availabilityOptions.FROZEN}
                      type="checkbox"
                      onChange={
                        () => {
                          setAvailabilityOptions({
                            ...availabilityOptions,
                            FROZEN: !availabilityOptions.FROZEN
                          });
                        }
                      }
                    />
                    <span className="checkmark ckeckmark-form" />
                  </label>
                  <label className="chkwrap">
                    Canned
                    <input
                      checked={availabilityOptions.CANNED}
                      type="checkbox"
                      onChange={
                        () => {
                          setAvailabilityOptions({
                            ...availabilityOptions,
                            CANNED: !availabilityOptions.CANNED
                          });
                        }
                      }
                    />
                    <span className="checkmark ckeckmark-form" />
                  </label>
                </div>
              </div>
              <div className="sectiontitle">
                Quality
              </div>
              <div className="item">
                <div className="title grouped">
                  <span className="number">2.</span>
                  <span className="description">
                    How would you describe the quality of the fresh fruits and
                    vegetables at this location?
                  </span>
                </div>
                <div className="ainput chk">
                  <label className="chkwrap">
                    Acceptable (peak condition, top quality, good color, fresh, firm, and clean)
                    <input
                      type="radio"
                      name="quality"
                      value={quality}
                      checked={quality === formConstants.QUALITY.ACCEPTABLE}
                      onChange={
                        () => {
                          setIndividualForm(
                            TYPE_INDIVIDUAL_FORM.quality,
                            formConstants.QUALITY.ACCEPTABLE
                          );
                        }
                      }
                    />
                    <span className="checkmark ckeckmark-form" />
                  </label>
                  <label className="chkwrap">
                    Unacceptable (bruised, old looking, mushy, dry, overripe, dark sunken spots in Irregular patc
                    hes or cracked or broken surfaces, signs of shriveling, mold or excessive softening)
                    <input
                      type="radio"
                      name="quality"
                      value={quality}
                      checked={quality === formConstants.QUALITY.UNACCEPTABLE}
                      onChange={
                        () => {
                          setIndividualForm(
                            TYPE_INDIVIDUAL_FORM.quality,
                            formConstants.QUALITY.UNACCEPTABLE
                          );
                        }
                      }
                    />
                    <span className="checkmark ckeckmark-form" />
                  </label>
                </div>
              </div>
              <div className="sectiontitle">
                Visibility
              </div>
              <div className="item">
                <div className="title grouped">
                  <span className="number">3.</span>
                  <span className="description">
                    Are the fresh fruits and vegetables visible from the front of the
                    store or before entering ?
                  </span>
                </div>
                <div className="ainput chk">
                  <label className="chkwrap">
                    Yes
                    <input
                      type="radio"
                      name="visibility"
                      value={visibility}
                      checked={visibility === formConstants.VISIBILITY.YES}
                      onChange={
                        () => {
                          setIndividualForm(
                            TYPE_INDIVIDUAL_FORM.visibility,
                            formConstants.VISIBILITY.YES
                          );
                        }
                      }
                    />
                    <span className="checkmark ckeckmark-form" />
                  </label>
                  <label className="chkwrap">
                    No
                    <input
                      type="radio"
                      name="visibility"
                      value={visibility}
                      checked={visibility === formConstants.VISIBILITY.NO}
                      onChange={
                        () => {
                          setIndividualForm(
                            TYPE_INDIVIDUAL_FORM.visibility,
                            formConstants.VISIBILITY.NO
                          );
                        }
                      }
                    />
                    <span className="checkmark ckeckmark-form" />
                  </label>
                </div>
              </div>
              <div className="sectiontitle">
                Local
              </div>
              <div className="item">
                <div className="title grouped">
                  <span className="number">4.</span>
                  <span className="description">
                    Were any of the fruits and vegetables labeled as “locally
                    grown”?
                  </span>
                </div>
                <div className="ainput chk">
                  <label className="chkwrap">
                    Yes
                    <input
                      type="radio"
                      name="local"
                      value={local}
                      checked={local === formConstants.LOCAL.YES}
                      onChange={
                        () => {
                          setIndividualForm(
                            TYPE_INDIVIDUAL_FORM.local,
                            formConstants.LOCAL.YES
                          );
                        }
                      }
                    />
                    <span className="checkmark ckeckmark-form" />
                  </label>
                  <label className="chkwrap">
                    No
                    <input
                      type="radio"
                      value={local}
                      name="local"
                      checked={local === formConstants.LOCAL.NO}
                      onChange={
                        () => {
                          setIndividualForm(
                            TYPE_INDIVIDUAL_FORM.local,
                            formConstants.LOCAL.NO
                          );
                        }
                      }
                    />
                    <span className="checkmark ckeckmark-form" />
                  </label>
                </div>
              </div>
              <div className="sectiontitle">
                Meets Need
              </div>
              <div className="item">
                <div className="title grouped">
                  <span className="number">5.</span>
                  <span className="description">
                    Did the retailer or market have all of the fruits and vegetables
                    you were looking for?
                  </span>
                </div>
                <div className="ainput chk">
                  <label className="chkwrap">
                    Yes
                    <input
                      type="radio"
                      name="meets-need"
                      value={meets_need}
                      checked={meets_need === formConstants.MEETS_NEED.YES}
                      onChange={
                        () => {
                          setIndividualForm(
                            TYPE_INDIVIDUAL_FORM.meets_need,
                            formConstants.MEETS_NEED.YES
                          );
                        }
                      }
                    />
                    <span className="checkmark ckeckmark-form" />
                  </label>
                  <label className="chkwrap">
                    No
                    <input
                      type="radio"
                      name="meets-need"
                      value={meets_need}
                      checked={meets_need === formConstants.MEETS_NEED.NO}
                      onChange={
                        () => {
                          setIndividualForm(
                            TYPE_INDIVIDUAL_FORM.meets_need,
                            formConstants.MEETS_NEED.NO
                          );
                        }
                      }
                    />
                    <span className="checkmark ckeckmark-form" />
                  </label>
                </div>
              </div>
              <div className="item">
                <div className="title">
                  <label>
                    If no, please list what fruits and vegetables you would like this retailer to stock?
                  </label>
                </div>
                <div className="ainput htxtarea">
                  <textarea
                    name="yth"
                    id="yth2"
                    value={produce_avail_store}
                    placeholder="Your text here..."
                    onChange={
                      (e: React.FormEvent<HTMLTextAreaElement>) => {
                        const numbertext = deleteBreakLines({ value: e.currentTarget.value });
                        if (numbertext.split(' ').length <= MAX_TEXT) {
                          setIndividualForm(
                            TYPE_INDIVIDUAL_FORM.produce_avail_store,
                            numbertext
                          );
                        }
                      }
                    }
                  />
                </div>
              </div>
              <div className="sectiontitle">
                Photo Upload
              </div>
              <div className="item">
                <div className="title">
                  <label>
                    (Please upload a photo where produce is stocked at this retailer)
                  </label>
                </div>
                <Attachment
                  type="individualForm"
                  loadedFiles={isEdit ? imagelinks ?? '' : ''}
                />
              </div>
              <div className="sectiontitle">
                Contact
              </div>
              <div className="item">
                <div className="title">
                  <label>Email</label>
                </div>
                <div className="ainput">
                  <input
                    className="light"
                    type="text"
                    onChange={
                      (e: React.ChangeEvent<HTMLInputElement>) => (
                        setIndividualForm(TYPE_INDIVIDUAL_FORM.contact_email, e.target.value)
                      )
                    }
                  />
                </div>
              </div>
              <div className="item">
                <div className="title">
                  <label>Phone Number</label>
                </div>
                <div className="ainput">
                  <input
                    className="light"
                    type="text"
                    value={contact_phone}
                    onChange={
                      (e: React.ChangeEvent<HTMLInputElement>) => (
                        setIndividualForm(TYPE_INDIVIDUAL_FORM.contact_phone, e.target.value)
                      )
                    }
                  />
                </div>
              </div>
              <div className="item">
                <div className="title">
                  <label>Zip Code</label>
                </div>
                <div className="ainput">
                  <input
                    className="light"
                    type="text"
                    value={contact_zipcode}
                    onChange={
                      (e: React.ChangeEvent<HTMLInputElement>) => (
                        setIndividualForm(TYPE_INDIVIDUAL_FORM.contact_zipcode, e.target.value)
                      )
                    }
                  />
                </div>
              </div>
              <div className="item">
                <div className="ainput chk">
                  <label className="chkwrap">
                    Stay connected to your local retailers and your community! I agree to allow PHA
                    and its affiliates to use my contact information for communication purposes.
                    <input type="checkbox" />
                    <span className="checkmark ckeckmark-form" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          {
            isEdit ? (
              <EditButtons
                clickApprove={approveForm}
                clickDecline={rejectForm}
                clickDelete={deleteForm}
              />
            ) : (
              <div className="aaction" style={{ paddingTop: '0px' }}>
                <button
                  className="light"
                  type="button"
                  onClick={sendForm}
                >
                  Submit
                </button>
              </div>
            )
          }

        </div>
      </div>
    </div>
  );
};
