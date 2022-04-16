import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState
} from 'react';
import { PhaIndividual, PhaRetailer } from '../../../@types/database';
import { defaultQueryParams } from '../../../constants/defaultValues';
import { ENDPOINTS } from '../../../constants/url';
import { getQueryParms } from '../../../utils/getQueryParams';
import { webRequest } from '../../../utils/webRequest';

type setterBoolean = Dispatch<SetStateAction<boolean>>;

export const useDashboard = (shouldReload: boolean, setShouldReload: setterBoolean) => {
  const [params, setParams] = useState(defaultQueryParams);
  const [table, setTable] = useState<(PhaRetailer & PhaIndividual)[]>([]);
  const [totalElements, setTotalElements] = useState(0);
  const [selectedElements, setSelectedElements] = useState<Array<string>>([]);

  const loadData = useCallback(() => {
    const queryParams = getQueryParms(params);
    webRequest.get(ENDPOINTS.DASHBOARD(queryParams)).then((response) => response.json())
      .then((response) => {
        setTable(response.data.rows);
      }).catch((error) => {
        console.error(error);
        setTable([]);
      });
  }, [params]);

  const loadCount = useCallback(() => {
    const queryParams = getQueryParms(params);
    webRequest.get(ENDPOINTS.DASHBOARD_COUNT(queryParams)).then((resp) => resp.json())
      .then((resp) => {
        setTotalElements(resp.data.count);
      }).catch((error) => {
        console.error(error);
        setTotalElements(0);
      });
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
    table,
    totalElements,
    selectedElements,
    setSelectedElements,
  };
};
