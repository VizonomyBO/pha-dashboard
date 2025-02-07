import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { DataTimelineType, ModalTimeline } from '../../@types/timeline.ts';
import {
  MONTH_NAME, MONTH_TEXT
} from '../../constants/timeline';
import { ENDPOINTS } from '../../constants/url';
import { webRequest } from '../../utils/webRequest';
import { TimelineChart } from './TimelineChart';
import { useScrollState } from '../../store/hooks/scrollHook';
import { useCategoriesState } from '../../store/hooks';

export const Timeline = () => {
  const [data, setData] = useState<DataTimelineType[]>([]);
  const {
    categoriesSelected,
    accesibilities,
    dataSources,
    bbox,
    mapViewFilter,
    verifiedDateRange
  } = useCategoriesState() || {};
  const [dataSuperStar, setDataSuperStar] = useState<DataTimelineType[]>([]);
  const [play, setPlay] = useState(false);
  const { widthScroll } = useScrollState();
  const [retailerByMonth, setRetailerByMonth] = useState(true);
  const byMonthClassNames = classNames({ headertext: true, active: retailerByMonth, line: retailerByMonth });
  const blockClassNames = classNames({ headertext: true, active: !retailerByMonth, line: !retailerByMonth });
  const [modalView, setModalView] = useState<ModalTimeline>({ view: false, x: 0, number: 0 });
  const dateCurrent = new Date();
  const [open, setOpen] = useState(false);
  const timelineOpen = classNames({ timeline: open, 'timeline-close': !open });
  const dateFormat = () => {
    const date = new Date(new Date('1 May 2022 00:00 UTC').setMonth(
      new Date('1 May 2022 00:00 UTC').getMonth() + modalView.number + 1
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
    for (let index1 = 0; index1 <= modalView.number && modalView.number < dateCurrent.getMonth() - 3; index1 += 1) {
      const information = data.filter((element) => element.month === MONTH_NAME[index1]);
      count += information[0] ? information[0].count : 0;
    }
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
        <span className="modal-timeline-text">
          {count?.superstar_badge_count && count.no_superstar_badge_count
            ? count.superstar_badge_count - count.no_superstar_badge_count : 0}
        </span>
      );
    }
    let count = 0;
    for (let index1 = 0; index1 <= modalView.number && modalView.number < dateCurrent.getMonth() - 3; index1 += 1) {
      const information = dataSuperStar.filter((element) => element.month === MONTH_NAME[index1]);
      if (information[0]) {
        count += information[0].superstar_badge_count && information[0].no_superstar_badge_count
          ? (information[0].superstar_badge_count - information[0].no_superstar_badge_count) : 0;
      }
    }
    return (
      <span className="modal-timeline-text">{count}</span>
    );
  };
  useEffect(() => {
    const auxAbort = new AbortController();
    const headers = webRequest.generateJSONHeader();
    webRequest.post(
      ENDPOINTS.TIME_LINE_RETAILER,
      {
        categories: categoriesSelected,
        accesibility: accesibilities,
        dataSources,
        badges: [],
        verifiedDateRange,
        ...(mapViewFilter && { bbox })
      },
      headers,
      auxAbort.signal
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res.data.rows);
      })
      .catch((err) => console.error(err));
    webRequest.post(
      ENDPOINTS.TIME_LINE_RETAILER_SUPERSTAR,
      {
        categories: categoriesSelected,
        accesibility: accesibilities,
        dataSources,
        badges: [],
        verifiedDateRange,
        ...(mapViewFilter && { bbox })
      },
      headers,
      auxAbort.signal
    )
      .then((res) => res.json())
      .then((res) => {
        setDataSuperStar(res.data.rows);
      })
      .catch((err) => console.error(err));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [retailerByMonth, setData, setDataSuperStar, categoriesSelected, accesibilities, dataSources, verifiedDateRange]);
  return (
    <div className={timelineOpen}>
      {open ? (
        <>
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
          <button
            className="close"
            type="button"
            onClick={() => (setOpen(false))}
          >
            <span className="icdown" />
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
            <div className="modal-timeline" style={{ left: `${modalView.x + (widthScroll / 3) + 50}px` }}>
              {dateFormat()}
              <div>
                <span className="modal-timeline-circulo" />
                <span className="modal-timeline-text">Validated Retailer</span>
                {returnNumberRetailer()}
              </div>
              <div>
                <span className="modal-timeline-circulo" style={{ backgroundColor: '#F0933A' }} />
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
        </>
      ) : (
        <>
          <span className="title">
            Change in Validated and Superstar Retailers Over Time
          </span>
          <button
            className="open"
            type="button"
            onClick={() => (setOpen(true))}
          >
            <span className="icopen" />
          </button>
        </>
      )}
    </div>
  );
};
