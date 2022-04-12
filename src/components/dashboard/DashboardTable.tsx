import { Dispatch, SetStateAction } from 'react';
import { QueryParams } from '../../@types';
import { PhaIndividual, PhaRetailer } from '../../@types/database';
import { showText } from '../../utils/textFormatter';
import { DashboardTableFooter } from './DashboardTableFooter';

export const DashboardTable = ({ table, setParams, count }: {
  table: (PhaRetailer & PhaIndividual)[],
  setParams: Dispatch<SetStateAction<QueryParams>>,
  count: number
}) => (
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
                <label htmlFor="a" className="chkwrap">
                  <span className="store">
                    <span className="txt2">
                      Retailer
                    </span>
                  </span>
                  <input type="checkbox" />
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
            display: 'block', overflow: 'auto', height: '480px', overflowY: 'scroll', overflowX: 'hidden'
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
                <button className="light view txt2" type="button">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <DashboardTableFooter setParams={setParams} count={count} />
      </table>
    </div>
  </div>
);
