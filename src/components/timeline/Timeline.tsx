import { useEffect, useState } from 'react';
import { DataTimelineType } from '../../@types/timeline.ts';
import { END_DATE, START_DATE } from '../../constants/timeline';
import { ENDPOINTS } from '../../constants/url';
import { webRequest } from '../../utils/webRequest';
import { TimelineChart } from './TimelineChart';

export const Timeline = () => {
  const [data, setData] = useState<DataTimelineType[]>([]);
  const [play, setPlay] = useState(false);
  const [retailerByMonth, setRetailerByMonth] = useState(true);
  console.log(retailerByMonth);
  useEffect(() => {
    webRequest.get(ENDPOINTS.TIME_LINE_RETAILER(START_DATE.toISOString(), END_DATE.toISOString()))
      .then((res) => res.json())
      .then((res) => {
        setData(res.data.rows);
        console.log(res.data.rows, 'Dotty..3');
      })
      .catch((err) => console.error(err));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [retailerByMonth]);
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
            className="headertext"
            onClick={() => (setRetailerByMonth(true))}
            aria-hidden="true"
          >
            View New Retailers by Month
          </span>
        </div>
        <div className="headerspan" id="retailerCumulative">
          <span
            className="headertext"
            onClick={() => (setRetailerByMonth(false))}
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
      />
    </div>
  );
};
