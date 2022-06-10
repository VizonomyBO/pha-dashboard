import { Switch, Tooltip } from '@mui/material';
import classNames from 'classnames';
import {
  Dispatch,
  SetStateAction
} from 'react';
import { QueryParams } from '../../@types';
import {
  CompletelyIntentionalAny,
  Manual,
  PhaIndividual,
  PhaRetailer
} from '../../@types/database';
import {
  TYPE_BUSINESS, SELECT_CATEGORY, TYPE_INDIVIDUAL_FORM, SUPERSTART_BADGE
} from '../../constants';
import { PHA_RETAILERS } from '../../constants/categories';
import { ROW_STATUS, UNVALIDATED } from '../../constants/dashboard';
import { formConstants } from '../../constants/form';
import { ENDPOINTS } from '../../constants/url';
import { resetBusiness } from '../../store/actions';
import { useModalDispatch, useMarketplaceDispatch } from '../../store/hooks';
import { useIndividualFormDispatch } from '../../store/hooks/individualFormHook';
import { useRetailerFileReducer } from '../../store/hooks/retailerFilesHook';
import { showDate, showText } from '../../utils/textFormatter';
import { webRequest } from '../../utils/webRequest';
import { DashboardTableFooter } from './DashboardTableFooter';
import { GeomDashboard } from './GeomDashboard';

export const DashboardTable = ({
  table,
  setParams,
  totalElements,
  selectedElements,
  setSelectedElements,
  params,
  setShouldReload,
  setVisibleFeedback,
  setIndividualId,
  setIdRetailer
}: {
  table: (PhaRetailer & PhaIndividual)[],
  setParams: Dispatch<SetStateAction<QueryParams>>,
  totalElements: number,
  selectedElements: Array<string>,
  setSelectedElements: Dispatch<SetStateAction<Array<string>>>,
  params: QueryParams,
  setShouldReload: React.Dispatch<React.SetStateAction<boolean>>,
  setIndividualId: React.Dispatch<React.SetStateAction<string>>,
  setVisibleFeedback: React.Dispatch<React.SetStateAction<boolean>>,
  setIdRetailer: React.Dispatch<React.SetStateAction<string>>
}) => {
  const { setModal } = useModalDispatch();
  const {
    setBusinessDetails, setSelectCategory, setWicAccepted, setSnapAccepted,
    setOtherQuestions, setAvailabilityOptions, setQuality,
    setVisibility, setLocal, setProduceAvailStore, setProduceAvailSeasonally,
    setContactName, setContactEmail, setContactOwner, setContactPatron, setSelectOperation
  } = useMarketplaceDispatch();
  const {
    setImageLinks,
    setOwnerPhotos
  } = useRetailerFileReducer();

  const { setIndividualForm } = useIndividualFormDispatch();

  const handleSelected = (checked: boolean, item: PhaRetailer & PhaIndividual) => {
    let newSelectedElements: string[];
    if (checked) {
      newSelectedElements = [...selectedElements, item.individual_id ? item.individual_id : (item.retailer_id || '')];
    } else {
      newSelectedElements = selectedElements.filter(
        (a) => (a !== (item.individual_id ? item.individual_id : item.retailer_id))
      );
    }
    setSelectedElements(newSelectedElements);
  };

  const selectAll = (checked: boolean) => {
    let newSelectedElements: Set<string> = new Set(selectedElements);
    if (checked) {
      const selectedElementsSet = [
        ...selectedElements,
        ...table.map((item: (PhaRetailer & PhaIndividual)) => (item.individual_id
          ? item.individual_id : (item.retailer_id || '')))
      ];
      newSelectedElements = new Set(selectedElementsSet);
    } else {
      table.forEach((item) => {
        newSelectedElements.delete((item.individual_id
          ? item.individual_id : (item.retailer_id || '')));
      });
    }
    setSelectedElements(Array.from(newSelectedElements));
  };

  const checkAll = () => {
    const checked = table.every((element) => selectedElements.includes(element.retailer_id || ''));
    return checked;
  };
  const elementRetailer = (item: PhaRetailer & PhaIndividual) => {
    webRequest.get(ENDPOINTS.PROFILE(item.retailer_id))
      .then((res) => res.json())
      .then((res) => {
        const retailer = res.data as Record<string, string>;
        Object.keys(TYPE_BUSINESS).forEach((key: string) => {
          const prop = (TYPE_BUSINESS as Record<string, string>)[key];
          setBusinessDetails(prop, retailer[prop]);
        });
        Object.keys(SELECT_CATEGORY).forEach((key: string) => {
          const prop = (SELECT_CATEGORY as Record<string, string>)[key];
          setSelectCategory(prop, retailer[prop]);
        });
        setWicAccepted(retailer.wic_accepted);
        setSnapAccepted(retailer.snap_accepted);
        setImageLinks(retailer.imagelinks);
        setOwnerPhotos(retailer.owner_photo);
        setOtherQuestions(retailer.description);
        setAvailabilityOptions(retailer.availability.split(','));
        setQuality(retailer.quality);
        setVisibility(retailer.visibility);
        setLocal(retailer.local);
        setProduceAvailStore(retailer.produce_avail_store);
        setProduceAvailSeasonally(retailer.produce_avail_seasonally);
        setContactName(retailer.contact_name);
        setContactEmail(retailer.contact_email);
        setContactOwner(retailer.contact_owner);
        setContactPatron(retailer.contact_patron);
        setSelectOperation(item.permanently_closed || '');
      })
      .catch((err) => console.error(err));
  };

  const showModal = (item: PhaRetailer & PhaIndividual, type?: string) => {
    if (item.individual_id && type !== PHA_RETAILERS) {
      setVisibleFeedback(true);
      setIndividualId(item.individual_id);
      webRequest.get(ENDPOINTS.INDIVIDUAL_FORM(item.individual_id))
        .then((res) => res.json())
        .then((res) => {
          const individual = res.data as Record<string, string>;
          setIdRetailer(individual.retailer_id);
          Object.keys(TYPE_INDIVIDUAL_FORM).forEach((key) => {
            const prop = (TYPE_INDIVIDUAL_FORM as Record<string, string>)[key];
            setIndividualForm(prop, individual[prop]);
          });
        })
        .catch((err) => console.error(err));
    } else if (params.status.includes(UNVALIDATED)) {
      setBusinessDetails(TYPE_BUSINESS.RETAILER_ID, (item.retailer_id || ''));
      setBusinessDetails(TYPE_BUSINESS.NAME, (item.name || ''));
      setBusinessDetails(TYPE_BUSINESS.ADDRESS_1, (item.address_1 || ''));
      setBusinessDetails(TYPE_BUSINESS.LONGITUDE, (item.geom?.coordinates[0] || ''));
      setBusinessDetails(TYPE_BUSINESS.LATITUDE, (item.geom?.coordinates[1] || ''));
      setBusinessDetails(TYPE_BUSINESS.STATE, ('Mississippi'));
      setModal({ open: true, type: false });
    } else {
      elementRetailer(item);
      setModal({ open: true, type: true });
    }
  };
  const updateSwitch = (item: PhaRetailer & PhaIndividual, type: string, value: string) => {
    const headers = webRequest.generateJSONHeader();
    const body: CompletelyIntentionalAny = {
      value,
      field: type
    };
    webRequest.put(ENDPOINTS.UPDATE_SWITCH(item.retailer_id), body, headers)
      .then((r) => r.json())
      .then(() => {
        setShouldReload(true);
      });
    setModal({ open: false, type: false });
    resetBusiness();
  };

  return (
    <div className="listarea">
      <div className="tabulardatawrap">
        <table className="tlight">
          <thead>
            <tr>
              <th colSpan={6}>
                <div className="toptrim" />
              </th>
            </tr>
            <tr style={{ height: '60px' }}>
              <th className="wcol1 htit1" style={params.status.includes(UNVALIDATED) ? { width: '34%' } : {}}>
                <div className="option">
                  <label className="chkwrap">
                    <span className="store">
                      <span className="txt2">
                        Retailer
                      </span>
                    </span>
                    <input
                      type="checkbox"
                      onChange={(e) => selectAll(e.target.checked)}
                      checked={checkAll()}
                    />
                    <span className="checkmark ckeckmark-form" />
                  </label>
                </div>
              </th>
              <th
                className="wcol2 htit2"
                style={params.status.includes(UNVALIDATED) || !params.isRetailer ? { width: '10%' } : {}}
              >
                ZIP Code
              </th>
              <th
                className="wcol3 htit3"
                style={params.status.includes(UNVALIDATED) || !params.isRetailer ? { width: '10%' } : {}}
              >
                Submitted
              </th>
              <th className="wcol4 htit4" style={!params.isRetailer ? { width: '10%' } : {}}>Status</th>
              {params.status.includes(UNVALIDATED) && (
                <th className="wcol5 htit5">
                  Google Map
                </th>
              )}
              {!params.status.includes(UNVALIDATED) && params.isRetailer && (
                <>
                  <th className="wcol8 htit7">
                    Permanently Closed
                  </th>
                  <th className="wcol10 htit7" style={{ textAlign: 'center' }}>
                    Superstar
                    <Tooltip
                      title="Where 51% or more of approved individual forms for a respective retailer have the
                        following responses: &quot;fresh&quot; , &quot;acceptable&quot;, &quot;yes&quot;, and
                        &quot;yes&quot;."
                      TransitionProps={{ timeout: 0 }}
                    >
                      <button type="button" className="light">
                        <span className="icinfo" />
                      </button>
                    </Tooltip>
                  </th>
                  <th className="wcol10 htit7" style={{ textAlign: 'center', paddingRight: '10px' }}>
                    Manual
                  </th>
                </>
              )}
              {!params.isRetailer && (
                <>
                  <th className="wcol8 htit7" style={{ textAlign: 'center' }}>
                    Permanently Closed
                  </th>
                  <th className="wcol9 htit7" style={{ textAlign: 'center' }}>
                    View Links
                  </th>
                </>
              )}
              <th className="wcol6 htit6"> </th>
            </tr>
          </thead>
          <tbody
            style={{
              overflow: 'auto', height: '480px', overflowY: 'scroll', overflowX: 'hidden', display: 'contents'
            }}
          >
            {table.map((item: (PhaRetailer & PhaIndividual & Manual)) => (
              <tr style={{ height: '71px' }} key={item.individual_id || item.retailer_id}>
                {item.individual_id ? (
                  <>
                    <td
                      className="wcol1 bbtm padleft"
                      style={params.status.includes(UNVALIDATED) ? { width: '34%', height: '71px' }
                        : { height: '71px' }}
                    >
                      <div className="option">
                        <label className="chkwrap">
                          <span className="store">
                            <span className="market txt2">{showText(item.name)}</span>
                            <span className="address txt1">{showText(item.address_1)}</span>
                          </span>
                          <input
                            type="checkbox"
                            onChange={(e) => handleSelected(e.target.checked, item)}
                            checked={
                              selectedElements.includes(item.individual_id ? item.individual_id
                                : (item.retailer_id || ''))
                            }
                          />
                          <span className="checkmark  ckeckmark-form" />
                        </label>
                      </div>
                    </td>
                    <td
                      className="wcol10 bbtm"
                    >
                      <span className="txt1">{showText(item.zipcode)}</span>
                    </td>
                    <td
                      className="wcol10 bbtm"
                    >
                      <span className="txt1">{showDate(item.submission_date ?? '')}</span>
                    </td>
                    <td className="wcol4 bbtm" style={!params.isRetailer ? { width: '10%' } : {}}>
                      <div
                        className={
                          classNames('colorstatus', {
                            blue: item.submission_status === ROW_STATUS.PENDING
                            || params.status.includes(UNVALIDATED),
                            green: item.submission_status === ROW_STATUS.APPROVED,
                            red: item.submission_status === ROW_STATUS.REJECTED,
                          })
                        }
                      >
                        <span className="dot" />
                        <span className="txt2">
                          {item.submission_status}
                        </span>
                      </div>
                    </td>
                  </>
                ) : (
                  <>
                    <td
                      className="wcol1 bbtm padleft"
                      style={params.status.includes(UNVALIDATED) ? { width: '34%', height: '71px' }
                        : { height: '71px' }}
                    >
                      <div className="option">
                        <label className="chkwrap">
                          <span className="store">
                            <span
                              className="market txt2"
                              aria-hidden="true"
                              onClick={() => showModal(item)}
                            >
                              {showText(item.name)}
                            </span>
                            <span
                              className="address txt1"
                              aria-hidden="true"
                              onClick={() => showModal(item)}
                            >
                              {showText(item.address_1)}
                            </span>
                          </span>
                          <input
                            type="checkbox"
                            onChange={(e) => handleSelected(e.target.checked, item)}
                            checked={
                              selectedElements.includes(item.individual_id ? item.individual_id
                                : (item.retailer_id || ''))
                            }
                          />
                          <span className="checkmark  ckeckmark-form" />
                        </label>
                      </div>
                    </td>
                    <td
                      className="wcol2 bbtm"
                      aria-hidden="true"
                      onClick={() => showModal(item)}
                      style={params.status.includes(UNVALIDATED) || !params.isRetailer ? { width: '10%' } : {}}
                    >
                      <span className="txt1">{showText(item.zipcode)}</span>
                    </td>
                    <td
                      className="wcol3 bbtm"
                      aria-hidden="true"
                      onClick={() => showModal(item)}
                      style={params.status.includes(UNVALIDATED) || !params.isRetailer ? { width: '10%' } : {}}
                    >
                      <span className="txt1">{showDate(item.submission_date ?? '')}</span>
                    </td>
                    <td
                      className="wcol4 bbtm"
                      aria-hidden="true"
                      onClick={() => showModal(item)}
                    >
                      <div
                        className={
                          classNames('colorstatus', {
                            blue: item.submission_status === ROW_STATUS.PENDING
                            || params.status.includes(UNVALIDATED),
                            green: item.submission_status === ROW_STATUS.APPROVED,
                            red: item.submission_status === ROW_STATUS.REJECTED,
                          })
                        }
                      >
                        <span className="dot" />
                        <span className="txt2">
                          {showText(params.status.includes(UNVALIDATED) ? ROW_STATUS.UNVALIDATED
                            : item.submission_status)}
                        </span>
                      </div>
                    </td>
                  </>
                )}
                {params.status.includes(UNVALIDATED) && (
                  <td className="wcol5 bbtm">
                    <div className="coninf">
                      <a
                        className="cname txt2 google-map"
                        href={item.geom?.coordinates
                          ? `https://www.google.com/maps/dir/${item.geom.coordinates[1]},${item.geom.coordinates[0]}`
                          : ''}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {item.geom?.coordinates ? 'Open Map' : '-'}
                      </a>
                    </div>
                  </td>
                )}
                {!params.status.includes(UNVALIDATED) && params.isRetailer && (
                  <>
                    <td
                      className="wcol7 bbtm"
                      aria-hidden="true"
                      onClick={() => showModal(item)}
                    >
                      <div className="coninf" style={{ textAlign: 'center' }}>
                        <label className="switch" style={{ textAlign: 'center' }}>
                          <Switch
                            checked={item.permanently_closed === formConstants.CLOSED.YES}
                            onChange={(event) => {
                              event.stopPropagation();
                              updateSwitch(
                                item,
                                TYPE_INDIVIDUAL_FORM.permanently_closed,
                                item.permanently_closed === formConstants.CLOSED.YES
                                  ? formConstants.CLOSED.NO : formConstants.CLOSED.YES
                              );
                            }}
                          />
                        </label>
                      </div>
                    </td>
                    <td
                      className="wcol7 bbtm"
                      aria-hidden="true"
                      onClick={() => showModal(item)}
                    >
                      <div className="coninf">
                        <label className="switch" style={{ textAlign: 'center' }}>
                          <Switch
                            checked={item.superstar_badge === formConstants.CLOSED.YES}
                            onChange={(event) => {
                              event.stopPropagation();
                              updateSwitch(
                                item,
                                SUPERSTART_BADGE,
                                item.superstar_badge === formConstants.CLOSED.YES
                                  ? formConstants.CLOSED.NO : formConstants.CLOSED.YES
                              );
                            }}
                          />
                        </label>
                      </div>
                    </td>
                    <td
                      className="wcol7 bbtm"
                    >
                      <span
                        className="txt2"
                        style={{ textTransform: 'capitalize' }}
                      >
                        { item.manual ? item.manual.toString() : 'false' }
                      </span>
                    </td>
                  </>
                )}
                {!params.isRetailer && (
                  <>
                    <td className="wcol8 bbtm">
                      <div className="coninf" style={{ textAlign: 'center' }}>
                        <span
                          className="switch"
                          style={{ textAlign: 'center' }}
                        >
                          {showText(item.permanently_closed === formConstants.CLOSED.YES ? 'Closed' : 'Open')}
                        </span>
                      </div>
                    </td>
                    <td className="wcol9 bbtm">
                      <div className="coninf" style={{ textAlign: 'center', cursor: 'pointer' }}>
                        <p>
                          <span
                            className="cname txt2 google-map"
                            style={{ textAlign: 'center', cursor: 'pointer' }}
                            onClick={() => showModal(item)}
                            aria-hidden="true"
                          >
                            Individual Form&nbsp;
                          </span>
                          <span className="switch" style={{ textAlign: 'center', cursor: 'pointer' }}>|&nbsp;</span>
                          <span
                            className="cname txt2 google-map"
                            style={{ textAlign: 'center' }}
                            onClick={() => showModal(item, PHA_RETAILERS)}
                            aria-hidden="true"
                          >
                            Retailer&nbsp;
                          </span>
                          <span className="switch" style={{ textAlign: 'center', cursor: 'pointer' }}>|&nbsp;</span>
                          <GeomDashboard
                            item={item}
                          />
                        </p>
                      </div>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
          <DashboardTableFooter setParams={setParams} totalElements={totalElements} />
        </table>
      </div>
    </div>
  );
};
