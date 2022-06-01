import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { DataTimelineType, ModalTimeline } from '../../@types/timeline.ts';
import {
  END_DATE, MONTH_NAME, MONTH_TEXT, START_DATE
} from '../../constants/timeline';
import { ENDPOINTS } from '../../constants/url';
import { webRequest } from '../../utils/webRequest';
import { TimelineChart } from './TimelineChart';

export const Timeline = () => {
  const [data, setData] = useState<DataTimelineType[]>([]);
  const [dataSuperStar, setDataSuperStar] = useState<DataTimelineType[]>([]);
  const [play, setPlay] = useState(false);
  const [retailerByMonth, setRetailerByMonth] = useState(true);
  const byMonthClassNames = classNames({ headertext: true, active: retailerByMonth, line: retailerByMonth });
  const blockClassNames = classNames({ headertext: true, active: !retailerByMonth, line: !retailerByMonth });
  const [modalView, setModalView] = useState<ModalTimeline>({ view: false, x: 0, number: 0 });
  const dateFormat = () => {
    const date = new Date(new Date('1 May 2022 00:00 UTC').setMonth(
      new Date('1 May 2022 00:00 UTC').getMonth() + modalView.number
    ));
    return (
      <div className="modal-timeline-title">
        {`${MONTH_TEXT[date.getMonth()]} ${date.getFullYear()}`}
      </div>
    );
  };
  const returnNumberRetailer = () => {
    if (retailerByMonth) {
      const count: DataTimelineType | undefined = data.find(
        (element) => element.month === MONTH_NAME[Math.trunc(modalView.number)]
      );
      return (
        <span className="modal-timeline-text">{count ? count.count : 0}</span>
      );
    }
    let count = 0;
    data.forEach((element, index) => {
      if (index <= Math.trunc(modalView.number)) {
        count += element.count;
      }
    });
    return (
      <span className="modal-timeline-text">{count}</span>
    );
  };
  const returnNumberSuperstar = () => {
    if (retailerByMonth) {
      const count: DataTimelineType | undefined = dataSuperStar.find(
        (element) => element.month === MONTH_NAME[Math.trunc(modalView.number)]
      );
      return (
        <span className="modal-timeline-text">{count ? count.count : 0}</span>
      );
    }
    let count = 0;
    dataSuperStar.forEach((element, index) => {
      if (index <= Math.trunc(modalView.number)) {
        count += element.count;
      }
    });
    return (
      <span className="modal-timeline-text">{count}</span>
    );
  };
  useEffect(() => {
    webRequest.get(ENDPOINTS.TIME_LINE_RETAILER(START_DATE.toISOString(), END_DATE.toISOString()))
      .then((res) => res.json())
      .then((res) => {
        setData(res.data.rows);
      })
      .catch((err) => console.error(err));
    webRequest.get(ENDPOINTS.TIME_LINE_RETAILER_SUPERSTAR(START_DATE.toISOString(), END_DATE.toISOString()))
      .then((res) => res.json())
      .then((res) => {
        setDataSuperStar(res.data.rows);
      })
      .catch((err) => console.error(err));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [retailerByMonth, setData, setDataSuperStar]);
  return (
    <div className="timeline">
      <span className="title">
        Change in Validated and Superstar Retailers Over Time
      </span>
      <button
        className="play"
        type="button"
        onClick={() => (setPlay(true))}
      >
        <span className="icplay" />
        <span className="text">
          Play timeline
        </span>
      </button>
      <div className="header" id="retailerByMonth">
        <div className="headerspan" style={{ paddingLeft: '30px' }}>
          <span
            className={byMonthClassNames}
            onClick={() => {
              setRetailerByMonth(true);
            }}
            aria-hidden="true"
          >
            View New Retailers by Month
          </span>
        </div>
        <div className="headerspan" id="retailerCumulative">
          <span
            className={blockClassNames}
            onClick={() => {
              setRetailerByMonth(false);
            }}
            aria-hidden="true"
          >
            View Total Cumulative Retailers
          </span>
        </div>
      </div>
      {modalView.view && (
        <div className="modal-timeline" style={{ left: `${modalView.x + 715}px` }}>
          {dateFormat()}
          <div>
            <span className="modal-timeline-circulo" />
            <span className="modal-timeline-text">Validated Retailer</span>
            {returnNumberRetailer()}
          </div>
          <div>
            <span className="modal-timeline-circulo" style={{ backgroundColor: '#F5B375' }} />
            <span className="modal-timeline-text">Superstar Retailer</span>
            {returnNumberSuperstar()}
          </div>
        </div>
      )}
      <TimelineChart
        setModalView={setModalView}
        data={data}
        play={play}
        setPlay={setPlay}
        dataSuperStar={dataSuperStar}
        retailerByMonth={retailerByMonth}
      />
    </div>
  );
};
