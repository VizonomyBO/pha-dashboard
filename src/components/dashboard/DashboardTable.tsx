import { Dispatch, SetStateAction } from 'react';
import { QueryParams } from '../../@types';
import { PhaIndividual, PhaRetailer } from '../../@types/database';
import { TYPE_BUSINESS, SELECT_CATEGORY } from '../../constants';
import { ENDPOINTS } from '../../constants/url';
import { useModalDispatch, useMarketplaceDispatch } from '../../store/hooks';
import { showText } from '../../utils/textFormatter';
import { webRequest } from '../../utils/webRequest';
import { DashboardTableFooter } from './DashboardTableFooter';

export const DashboardTable = ({
  table, setParams, totalElements, selectedElements, setSelectedElements
}: {
  table: (PhaRetailer & PhaIndividual)[],
  setParams: Dispatch<SetStateAction<QueryParams>>,
  totalElements: number,
  selectedElements: Array<string>,
  setSelectedElements: Dispatch<SetStateAction<Array<string>>>,
}) => {
  const { setModal } = useModalDispatch();
  const {
    setBusinessDetails, setSelectCategory, setWicAccepted, setSnapAccepted,
    setOtherQuestions, setAvailabilityOptions, setQuality,
    setVisibility, setLocal, setProduceAvailStore, setProduceAvailSeasonally,
    setContactName, setContactEmail, setContactOwner, setContactPatron
  } = useMarketplaceDispatch();
  const handleSelected = (checked: boolean, item: PhaRetailer) => {
    let newSelectedElements: string[];
    if (checked) {
      newSelectedElements = [...selectedElements, item.retailer_id || ''];
    } else {
      newSelectedElements = selectedElements.filter((a) => a !== item.retailer_id);
    }
    setSelectedElements(newSelectedElements);
  };

  const selectAll = (checked: boolean) => {
    let newSelectedElements: Set<string> = new Set(selectedElements);
    if (checked) {
      const selectedElementsSet = [...selectedElements, ...table.map((item: PhaRetailer) => item.retailer_id || '')];
      newSelectedElements = new Set(selectedElementsSet);
    } else {
      table.forEach((item) => {
        newSelectedElements.delete(item.retailer_id || '');
      });
    }
    setSelectedElements(Array.from(newSelectedElements));
  };

  const checkAll = () => {
    const checked = table.every((element) => selectedElements.includes(element.retailer_id || ''));
    return checked;
  };

  const showModal = (item: PhaRetailer) => {
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
      })
      .catch((err) => console.error(err));
    setModal({ open: true, type: true });
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
            <tr>
              <th className="wcol1 htit1">
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
                    <span className="checkmark" />
                  </label>
                </div>
              </th>
              <th className="wcol2 htit2">ZIP Code</th>
              <th className="wcol3 htit3">Submitted</th>
              <th className="wcol4 htit4">Status</th>
              <th className="wcol5 htit5">Control Information</th>
              <th className="wcol6 htit6"> </th>
            </tr>
          </thead>
          <tbody
            style={{
              overflow: 'auto', height: '480px', overflowY: 'scroll', overflowX: 'hidden'
            }}
          >
            {table.map((item: PhaRetailer) => (
              <tr key={item.retailer_id}>
                <td className="wcol1 bbtm padleft">
                  <div className="option">
                    <label className="chkwrap">
                      <span className="store">
                        <span className="market txt2">{showText(item.name)}</span>
                        <span className="address txt1">{showText(item.address_1)}</span>
                      </span>
                      <input
                        type="checkbox"
                        onChange={(e) => handleSelected(e.target.checked, item)}
                        checked={selectedElements.includes(item.retailer_id || '')}
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                </td>
                <td className="wcol2 bbtm"><span className="txt1">{showText(item.zipcode)}</span></td>
                <td className="wcol3 bbtm"><span className="txt1">{showText(item.submission_date)}</span></td>
                <td className="wcol4 bbtm">
                  <div className="colorstatus blue">
                    <span className="dot" />
                    <span className="txt2">{showText(item.submission_status)}</span>
                  </div>
                </td>
                <td className="wcol5 bbtm">
                  <div className="coninf">
                    <span className="cname txt2">{showText(item.contact_name)}</span>
                    <span className="email txt2">{showText(item.contact_email)}</span>
                  </div>
                </td>
                <td className="wcol6 bbtm padright">
                  <button
                    type="button"
                    className="light view txt2"
                    onClick={() => showModal(item)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <DashboardTableFooter setParams={setParams} totalElements={totalElements} />
        </table>
      </div>
    </div>
  );
};
