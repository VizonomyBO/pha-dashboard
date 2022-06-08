import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState
} from 'react';
import { Manual, PhaIndividual, PhaRetailer } from '../../../@types/database';
import { UNVALIDATED } from '../../../constants/dashboard';
import { defaultQueryParams } from '../../../constants/defaultValues';
import { ENDPOINTS } from '../../../constants/url';
import { getQueryParms, getQueryParmsUnvalidated } from '../../../utils/getQueryParams';
import { webRequest } from '../../../utils/webRequest';
import { useLoaderDispatch } from '../loaderHook';

type setterBoolean = Dispatch<SetStateAction<boolean>>;

export const useDashboard = (shouldReload: boolean, setShouldReload: setterBoolean) => {
  const [params, setParams] = useState(defaultQueryParams);
  const [table, setTable] = useState<(PhaRetailer & PhaIndividual & Manual)[]>([]);
  const [totalElements, setTotalElements] = useState(0);
  const [selectedElements, setSelectedElements] = useState<Array<string>>([]);
  const { setLoaderState } = useLoaderDispatch();

  const loadData = useCallback(() => {
    setLoaderState(true);
    if (!params.status.includes(UNVALIDATED)) {
      const queryParams = getQueryParms(params);
      webRequest.get(ENDPOINTS.DASHBOARD(queryParams)).then((response) => response.json())
        .then((response) => {
          setLoaderState(false);
          setTable(response.data.rows);
        }).catch((error) => {
          console.error(error);
          setTable([]);
        });
    } else {
      const queryParamsUnvalidated = getQueryParmsUnvalidated(params);
      webRequest.get(ENDPOINTS.DASHBOARD(queryParamsUnvalidated)).then((response) => response.json())
        .then((response) => {
          setLoaderState(false);
          setTable(response.data.rows);
        }).catch((error) => {
          console.error(error);
          setTable([]);
        });
    }
  }, [params, setLoaderState]);

  const loadCount = useCallback(() => {
    if (!params.status.includes(UNVALIDATED)) {
      const queryParams = getQueryParms(params);
      webRequest.get(ENDPOINTS.DASHBOARD_COUNT(queryParams)).then((resp) => resp.json())
        .then((resp) => {
          setTotalElements(resp.data.count);
        }).catch((error) => {
          console.error(error);
          setTotalElements(0);
        });
    } else {
      const queryParamsUnvalidated = getQueryParmsUnvalidated(params);
      webRequest.get(ENDPOINTS.DASHBOARD_COUNT(queryParamsUnvalidated)).then((resp) => resp.json())
        .then((resp) => {
          setTotalElements(resp.data.count);
        }).catch((error) => {
          console.error(error);
          setTotalElements(0);
        });
    }
  }, [params]);

  useEffect(() => {
    loadData();
  }, [params, loadData]);

  useEffect(() => {
    loadCount();
  }, [params, loadCount]);

  useEffect(() => {
    if (shouldReload) {
      loadData();
      loadCount();
      setShouldReload(false);
    }
  }, [shouldReload, setShouldReload, loadData, loadCount]);

  return {
    setParams,
    params,
    table,
    totalElements,
    selectedElements,
    setSelectedElements,
  };
};
