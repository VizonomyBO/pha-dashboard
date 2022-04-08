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
  const [buttonValue, setButtonValue] = useState<Array<ButtonDashboard>>(DEFAULT_VALUES_BUTTON);

  useEffect(() => {
    setParams((old: QueryParams) => ({ ...old, search: inputValue }));
  }, [inputValue, setParams]);

  useEffect(() => {
    const options = (buttonValue as Array<ButtonDashboard>).filter((item) => item.active)
      .map((item) => item.name).join(',');
    setParams((old: QueryParams) => ({ ...old, status: options }));
  }, [buttonValue, setParams, setButtonValue]);

  const onChangeValue = (index: number) => {
    setButtonValue((old) => {
      const copy = [...old];
      copy[index].active = !copy[index].active;
      return copy;
    });
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
