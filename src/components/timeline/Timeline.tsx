// import { TimelineChart } from './TimelineChart';

export const Timeline = () => {
  console.log('Timeline');
  // const [data, setData] = useState<any>();
  // const [play, setPlay] = useState(false);
  return (
    <div className="timeline">
      <span className="title">
        Change in Validated and Superstar Retailers Over Time
      </span>
      <button className="play" type="button">
        <span className="icplay" />
        <span className="text">
          Play timeline
        </span>
      </button>
      <div className="header" id="headertimeline">
        <div className="headerspan">
          <span className="headertext">
            View New Retailers by Month
          </span>
        </div>
        <div className="headerspan">
          <span className="headertext">
            View Total Cumulative Retailers
          </span>
        </div>
      </div>
      {/* <TimelineChart
        data={data}
        play={play}
        setPlay={setPlay}
      /> */}
    </div>
  );
};
