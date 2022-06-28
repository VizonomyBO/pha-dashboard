/* eslint-disable max-len */
import {
  useState,
  useMemo,
  useEffect,
  UIEvent,
  useCallback,
  useRef
} from 'react';
import { webRequest } from '../../../utils/webRequest';
import { ENDPOINTS } from '../../../constants/url';
import { useCategoriesState } from '../categoriesHook';
import { useLoaderDispatch } from '../loaderHook';
import { DataPhaDasboardMap } from '../../../@types';
import { useGeocoderState } from '../geocoderHook';

export const useHome = () => {
  const {
    callFilters,
    categoriesSelected,
    accesibilities,
    dataSources,
    bbox,
    mapViewFilter,
    verifiedDateRange
  } = useCategoriesState() || {};
  const { inputText } = useGeocoderState() || {};
  const { setLoaderState } = useLoaderDispatch();
  const VALUES_PER_PAGE = 25;
  const INIT_PAGE = 1;
  const [dataRequest, setDataRequest] = useState<DataPhaDasboardMap[]>([]);
  const [currentPage, setCurrentPage] = useState(INIT_PAGE);
  const [hasNext, setHasNext] = useState<boolean>(false);
  const abort = useRef(new AbortController());
  const signalArray: AbortController[] = useMemo(() => [abort.current], [abort]);
  const getMarkers = useCallback(
    (_currentPage: number) => {
      setLoaderState(true);
      const auxAbort = new AbortController();
      signalArray[signalArray.length - 1].abort();
      signalArray.push(auxAbort);
      const headers = webRequest.generateJSONHeader();
      setHasNext(false);
      webRequest
        .post(
          `${ENDPOINTS.GET_MARKERS}?page=${_currentPage}&limit=${VALUES_PER_PAGE}&dateRange=${verifiedDateRange[0]}%20-%20${verifiedDateRange[1]}&search=${inputText.text}`,
          {
            categories: categoriesSelected,
            accesibility: accesibilities,
            dataSources,
            badges: [],
            ...(mapViewFilter && { bbox })
          },
          headers,
          auxAbort.signal
        )
        .then((res) => res.json())
        .then((res) => {
          if (res.data && res.success) {
            const dataRows: DataPhaDasboardMap[] = [];
            res.data.rows.forEach((element: DataPhaDasboardMap) => {
              dataRows.push(element);
            });
            if (_currentPage > INIT_PAGE) {
              setDataRequest((oldDR) => {
                const newDR = [...oldDR, ...dataRows];
                return newDR;
              });
            } else {
              setDataRequest(dataRows);
            }
            setLoaderState(false);
            setHasNext(res.data.hasNextPage);
          }
        })
        .catch((err) => {
          if (err && err.name !== 'AbortError') {
            console.error(err);
          }
        });
    },
    [setLoaderState, signalArray, verifiedDateRange, inputText.text, categoriesSelected, accesibilities, dataSources, mapViewFilter, bbox]
  );
  const updateCurrentPage = useMemo(() => () => {
    getMarkers(currentPage + 1);
    setCurrentPage(currentPage + 1);
  }, [currentPage, setCurrentPage, getMarkers]);
  const scrolledToEnd = useCallback(
    (event: UIEvent<HTMLDivElement>) => {
      const container = event.target as HTMLDivElement;
      if (container.offsetHeight + container.scrollTop >= container.scrollHeight) {
        if (hasNext) {
          updateCurrentPage();
        }
        return true;
      }
      return false;
    },
    [hasNext, updateCurrentPage]
  );
  useEffect(() => {
    if (callFilters || mapViewFilter) {
      getMarkers(INIT_PAGE);
      setCurrentPage(INIT_PAGE);
    }
  }, [callFilters, mapViewFilter, getMarkers, bbox]);

  return {
    getMarkers,
    dataRequest,
    scrolledToEnd
  };
};
