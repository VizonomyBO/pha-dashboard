import { useState, useMemo, useEffect } from 'react';
import { webRequest } from '../../../utils/webRequest';
import { ENDPOINTS } from '../../../constants/url';
import { useCategoriesState } from '../categoriesHook';
import { DataPhaDasboardMap } from '../../../@types';

export const useHome = () => {
  const {
    callFilters,
    categoriesSelected,
    accesibilities,
    dataSources
  } = useCategoriesState() || {};
  const [dataRequest, setDataRequest] = useState<DataPhaDasboardMap[]>([]);
  const scrolledToEnd = (event:any) => {
    const container = event.target;
    if (container.offsetHeight + container.scrollTop >= container.scrollHeight) {
      return true;
    }
    return false;
  };
  const getMarkers = useMemo(
    () => () => {
      const headers = webRequest.generateJSONHeader();
      webRequest
        .post(
          ENDPOINTS.GET_MARKERS,
          {
            categories: categoriesSelected,
            accesibility: accesibilities,
            dataSources,
            badges: []
          },
          headers
        )
        .then((res) => res.json())
        .then((res) => {
          console.log('resrs', res);
          if (res.data && res.success) {
            const dataRows: DataPhaDasboardMap[] = [];
            res.data.rows.forEach((element: DataPhaDasboardMap) => {
              dataRows.push(element);
            });
            setDataRequest(dataRows);
          }
        })
        .catch((err) => console.error(err));
    },
    [categoriesSelected, accesibilities, dataSources]
  );
  useEffect(() => {
    if (callFilters) {
      getMarkers();
    }
  }, [callFilters, getMarkers]);
  return {
    getMarkers,
    dataRequest,
    scrolledToEnd
  };
};
