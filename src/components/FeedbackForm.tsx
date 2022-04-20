import { useEffect } from 'react';
import { MAX_TEXT, TYPE_INDIVIDUAL_FORM } from '../constants';
import { formConstants } from '../constants/form';
import { ENDPOINTS } from '../constants/url';
import { useModalDispatch } from '../store/hooks';
import { useIndividualFormDispatch, useIndividualFormState } from '../store/hooks/individualFormHook';
import { deleteBreakLines } from '../utils/validation';
import { webRequest } from '../utils/webRequest';
import { Attachment } from './Attachment';

export const FeedbackForm = (
  { setVisible, retailerId }
  : {setVisible: React.Dispatch<React.SetStateAction<boolean>>, retailerId: string }
) => {
  const { setIndividualForm, resetIndividualForm } = useIndividualFormDispatch();
  const { setModal } = useModalDispatch();
  useEffect(() => {
    setIndividualForm(TYPE_INDIVIDUAL_FORM.retailer_id, retailerId);
  }, [setIndividualForm, retailerId]);

  const {
    availability,
    quality,
    visibility,
    local,
    meets_need,
    contact_phone,
    contact_zipcode,
    produce_avail_store,
    files
  } = useIndividualFormState();
  const setAvailabilityOptionsCheck = (type: string, checked: boolean, value: string) => {
    if (checked) {
      setIndividualForm(type, availability === '' ? value : `${availability}, ${value}`);
    } else {
      const availabilityCopy = availability ? availability.replace(`${value},`, '') : availability;
      setIndividualForm(type, availabilityCopy ? availabilityCopy.replace(`, ${value}`, '') : '');
    }
  };
  const sendForm = () => {
    setModal({ type: true, open: true });
    const formData = new FormData();
    const obj = {
      availability,
      quality,
      visibility,
      local,
      meets_need,
      contact_phone,
      contact_zipcode,
      produce_avail_store
    };
    formData.append('json', JSON.stringify(obj).replace("'", "\\'"));
    files.forEach((file) => {
      formData.append('files', file);
    });
    const headers = webRequest.generateMultipartHeader();
    webRequest.postMultipart(
      ENDPOINTS.PHA_INDIVIDUAL(),
      formData,
      headers
    ).then((res) => res.json()).then((res) => {
      if (res.success) {
        setModal({ type: true, open: true });
        setVisible(false);
        resetIndividualForm();
      } else {
        setModal({ type: false, open: true });
      }
    });
  };
  const closeModal = () => {
    setVisible(false);
    resetIndividualForm();
  };
  return (
    <div className="modaluserfeedbck">
      <div className="formpage">
        <div className="header">
          <div className="backlink">
            <button className="light" type="button" onClick={closeModal}>
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
                      onChange={
                        (e: React.FormEvent<HTMLInputElement>) => {
                          setAvailabilityOptionsCheck(
                            TYPE_INDIVIDUAL_FORM.availability,
                            e.currentTarget.checked,
                            formConstants.AVAILABILITY.FRESH
                          );
                        }
                      }
                    />
                    <span className="checkmark ckeckmark-form" />
                  </label>
                  <label className="chkwrap">
                    Frozen
                    <input
                      type="checkbox"
                      onChange={
                        (e: React.FormEvent<HTMLInputElement>) => {
                          setAvailabilityOptionsCheck(
                            TYPE_INDIVIDUAL_FORM.availability,
                            e.currentTarget.checked,
                            formConstants.AVAILABILITY.FROZEN
                          );
                        }
                      }
                    />
                    <span className="checkmark ckeckmark-form" />
                  </label>
                  <label className="chkwrap">
                    Canned
                    <input
                      type="checkbox"
                      onChange={
                        (e: React.FormEvent<HTMLInputElement>) => {
                          setAvailabilityOptionsCheck(
                            TYPE_INDIVIDUAL_FORM.availability,
                            e.currentTarget.checked,
                            formConstants.AVAILABILITY.CANNED
                          );
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
                <Attachment type="individualForm" />
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
                    Stay connected to your local retailers and your community! I agree to allow P
                    HA and its affiliates to use my contact information for communication purposes.
                    <input type="checkbox" />
                    <span className="checkmark ckeckmark-form" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="aaction">
            <button
              className="light"
              type="button"
              onClick={sendForm}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
