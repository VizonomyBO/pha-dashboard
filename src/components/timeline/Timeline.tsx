import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { DataTimelineType } from '../../@types/timeline.ts';
import { END_DATE, START_DATE } from '../../constants/timeline';
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
  useEffect(() => {
    console.log('useEffect retailerByMonth', retailerByMonth);
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
        <div className="headerspan">
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
      <TimelineChart
        data={data}
        play={play}
        setPlay={setPlay}
        dataSuperStar={dataSuperStar}
        retailerByMonth={retailerByMonth}
      />
    </div>
  );
};
