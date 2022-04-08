import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState
} from 'react';
import { ButtonDashboard, QueryParams } from '../../@types';
import { DEFAULT_VALUES_BUTTON } from '../../constants/dashboard';

export const DashboardHeader = ({ setParams }: { setParams: Dispatch<SetStateAction<QueryParams>> }) => {
  const [inputValue, setinputValue] = useState('');
  const [buttonValue, setbuttonValue] = useState<Array<ButtonDashboard>>(DEFAULT_VALUES_BUTTON);

  useEffect(() => {
    setParams((old: QueryParams) => ({ ...old, search: inputValue }));
  }, [inputValue, setParams]);

  useEffect(() => {
    const option: Array<string> = [];
    (buttonValue as Array<ButtonDashboard>).forEach((item) => {
      if (item.active) {
        option.push(item.name);
      }
    });
    const reducedArray: string = option.reduce((acc, curr) => `${acc}${curr},`, '');
    setParams((old: QueryParams) => ({ ...old, status: reducedArray.slice(0, -1) }));
  }, [buttonValue, setParams, setbuttonValue]);

  const onChangeValue = (index: number) => {
    setTimeout(() => {
      buttonValue[index].active = !buttonValue[index].active;
      setbuttonValue(buttonValue);
    }, 2);
  };

  return (
    <div className="header">
      <div className="sec1">
        <div className="title">Submissions</div>
        <div className="actions">
          <button className="light btndown" type="button">
            <span className="icdown" />
            <span className="title">Download CSV</span>
          </button>
          <button className="light btnplus active" type="button">
            <span className="icplus" />
            <span className="title">Add Retailer</span>
          </button>
        </div>
      </div>
      <div className="sec2">
        <p>View retailer submissions</p>
      </div>
      <div className="statusoption">
        {
          buttonValue.map((item, index) => (
            <button
              key={item.id}
              className={`${item.class} ${item.active ? 'active' : null}`}
              type="button"
              onClick={() => {
                setbuttonValue([]);
                onChangeValue(index);
              }}
            >
              {item.name}
            </button>
          ))
        }
      </div>
      <div className="filterarea">
        <div className="searcharea">
          <div className="opsearch">
            <span className="icsearch" />
            <input
              className="generic"
              type="text"
              onKeyDown={(e) => (e.key === 'Enter' || !(e.target as HTMLInputElement).value)
                && setinputValue((e.target as HTMLInputElement).value)}
            />
          </div>
          {
            inputValue && <button className="light" type="button" onClick={() => setinputValue('')}> X </button>
          }
        </div>
        {/* <div className="datefilterarea">
        <div className="opfilter">
          <span className="iccalendar" />
          <input className="generic" type="text" name="" id="" placeholder="Jan 6, 2022 - Jan 13, 2022" />
        </div>
        <button className="light" type="button">
          <span className="icfilter" />
          <span className="title">Filters</span>
        </button>
      </div> */}
      </div>
    </div>
  );
};
