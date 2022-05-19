/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames';
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState
} from 'react';
import { saveAs } from 'file-saver';
import debounce from 'lodash.debounce';
import { ButtonDashboard, QueryParams } from '../../@types';
import {
  DEFAULT_VALUES_BUTTON,
  EXTENSION_ZIP,
  FILENAME_CSV_RETAILER,
  DEBOUNCE_SEARCH_TABLE,
  RETAILERS_PHA,
  INDIVIDUAL_PHA,
  DEFAULT_VALUES_BUTTON_INDIVIDUAL,
  UNVALIDATED,
  UNVALIDATE_PHA
} from '../../constants/dashboard';
import { ENDPOINTS } from '../../constants/url';
import { webRequest } from '../../utils/webRequest';
import { useLoaderDispatch, useMarketplaceDispatch, useModalDispatch } from '../../store/hooks';

export const DashboardHeader = ({
  setParams, selectedElements, params, setShouldReload
}: {
  setParams: Dispatch<SetStateAction<QueryParams>>,
  selectedElements: Array<string>,
  params: QueryParams,
  setShouldReload: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const { setLoaderState } = useLoaderDispatch();
  const [inputValue, setinputValue] = useState('');
  const [inputValue2, setinputValue2] = useState('');
  const { setModal } = useModalDispatch();
  const { resetBusiness } = useMarketplaceDispatch();
  const [buttonValue, setButtonValue] = useState<Array<ButtonDashboard>>(DEFAULT_VALUES_BUTTON);
  const changeHandler = (val: string) => {
    setinputValue(val);
  };
  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, DEBOUNCE_SEARCH_TABLE),
    []
  );
  useEffect(() => {
    setParams((old: QueryParams) => ({ ...old, search: inputValue, page: 1 }));
  }, [inputValue, setParams]);

  useEffect(() => {
    const options = (buttonValue as Array<ButtonDashboard>).filter((item) => item.active)
      .map((item) => item.name).join(',');
    setParams((old: QueryParams) => ({ ...old, status: options }));
  }, [buttonValue, setParams, setButtonValue]);

  useEffect(() => () => {
    debouncedChangeHandler.cancel();
  }, [debouncedChangeHandler]);

  useEffect(() => {
    if (params.isRetailer) {
      setButtonValue(DEFAULT_VALUES_BUTTON);
    } else {
      setButtonValue(DEFAULT_VALUES_BUTTON_INDIVIDUAL);
    }
  }, [params.isRetailer]);

  useEffect(() => {
    debouncedChangeHandler(inputValue2);
  }, [debouncedChangeHandler, inputValue2]);

  const onChangeValue = (index: number) => {
    setButtonValue((old) => {
      const copy = [...old];
      if (index === 3) {
        for (let indexCopy = 0; indexCopy < 3; indexCopy += 1) {
          copy[indexCopy].active = false;
        }
        copy[index].active = !copy[index].active;
      } else {
        copy[index].active = !copy[index].active;
        copy[3].active = false;
      }
      return copy;
    });
  };

  const downloadCSV = () => {
    const headers = webRequest.generateJSONHeader();
    setLoaderState(true);
    webRequest.post(ENDPOINTS.PHA_RETAILER_CSV(), {
      retailerIds: selectedElements,
    }, headers).then((res) => {
      const now = new Date();
      const filename = `${FILENAME_CSV_RETAILER}-${now.toISOString().split('T')[0]}${EXTENSION_ZIP}`;
      res.blob().then((blob) => {
        saveAs(blob, filename);
        setLoaderState(false);
      });
    }).catch((error) => {
      console.error(error);
      setLoaderState(false);
    });
  };

  const deleteRetailer = () => {
    const headers = webRequest.generateJSONHeader();
    const table = params.isRetailer ? RETAILERS_PHA : INDIVIDUAL_PHA;
    webRequest.delete(ENDPOINTS.DELETE_RETAILER(!params.status.includes(UNVALIDATED) ? table : UNVALIDATE_PHA), {
      ids: selectedElements
    }, headers).then(() => {
      setShouldReload(true);
    }).catch((error) => {
      console.error(error);
    });
  };

  const approveRetailer = () => {
    const headers = webRequest.generateJSONHeader();
    const table = params.isRetailer ? RETAILERS_PHA : INDIVIDUAL_PHA;
    webRequest.post(ENDPOINTS.DELETE_RETAILER(table), {
      ids: selectedElements
    }, headers).then(() => {
      setShouldReload(true);
    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <div className="header">
      <div className="sec1">
        <div className="title">Submissions</div>
        <div className="actions">
          <button className="light btndown" type="button" onClick={() => downloadCSV()}>
            <span className="icdown" />
            <span className="title">Download</span>
          </button>
          <button
            className="light btnplus active"
            type="button"
            onClick={() => {
              resetBusiness();
              setModal({ type: false, open: true });
            }}
          >
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
          buttonValue.map((item, index) => {
            const buttonClass = classNames(item.class, { active: item.active });
            return (
              <button
                key={item.id}
                className={buttonClass}
                type="button"
                onClick={() => {
                  onChangeValue(index);
                }}
              >
                {item.name}
              </button>
            );
          })
        }
      </div>
      <div className="filterarea">
        <div className="searcharea">
          <div className="opsearch">
            <span className="icsearch" />
            <input
              className="generic"
              type="text"
              value={inputValue2}
              onChange={(e) => { setinputValue2(e.target.value); }}
              onKeyDown={(e) => (e.key === 'Enter' || !(e.target as HTMLInputElement).value)
                && setinputValue((e.target as HTMLInputElement).value)}
            />
            {
              inputValue && (
              <button
                type="button"
                onClick={() => setinputValue2('')}
                style={{
                  border: 'none',
                  background: 'none'
                }}
              >
                <span className="icclose" />
              </button>
              )
            }
          </div>
          {selectedElements.length > 0 && (
            <span
              className="text-delete"
              aria-hidden="true"
              onClick={() => {
                deleteRetailer();
              }}
            >
              Delete
            </span>
          )}
          {selectedElements.length > 0 && !params.status.includes(UNVALIDATED) && (
            <span
              className="text-delete"
              aria-hidden="true"
              onClick={() => {
                approveRetailer();
              }}
            >
              Approve
            </span>
          )}
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
