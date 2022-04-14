import {
  useState,
  useMemo,
  useEffect,
  UIEvent,
  useCallback
} from 'react';
import { webRequest } from '../../../utils/webRequest';
import { ENDPOINTS } from '../../../constants/url';
import { useCategoriesState } from '../categoriesHook';
import { DataPhaDasboardMap } from '../../../@types';

export const useHome = () => {
  const {
    callFilters,
    categoriesSelected,
    accesibilities,
    dataSources,
    bbox,
    mapViewFilter
  } = useCategoriesState() || {};
  const VALUES_PER_PAGE = 10;
  const INIT_PAGE = 1;
  const [dataRequest, setDataRequest] = useState<DataPhaDasboardMap[]>([]);
  const [currentPage, setCurrentPage] = useState(INIT_PAGE);
  const [hasNext, setHasNext] = useState<boolean>(false);
  const getMarkers = useMemo(
    () => (_currentPage: number) => {
      const headers = webRequest.generateJSONHeader();
      webRequest
        .post(
          `${ENDPOINTS.GET_MARKERS}?page=${_currentPage}&limit=${VALUES_PER_PAGE}`,
          {
            categories: categoriesSelected,
            accesibility: accesibilities,
            dataSources,
            badges: [],
            ...(bbox && { bbox })
          },
          headers
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
            setHasNext(res.data.hasNextPage);
          }
        })
        .catch((err) => console.error(err));
    },
    [categoriesSelected, accesibilities, dataSources, bbox]
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
    }
  }, [callFilters, mapViewFilter, getMarkers, bbox]);

  return {
    getMarkers,
    dataRequest,
    scrolledToEnd
  };
};
