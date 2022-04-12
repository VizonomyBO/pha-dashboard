import { useEffect, useState } from 'react';
import { PhaIndividual, PhaRetailer } from '../../../@types/database';
import { defaultQueryParams } from '../../../constants/defaultValues';
import { ENDPOINTS } from '../../../constants/url';
import { getQueryParms } from '../../../utils/getQueryParams';
import { webRequest } from '../../../utils/webRequest';

export const useDashboard = () => {
  const [params, setParams] = useState(defaultQueryParams);
  const [table, setTable] = useState<(PhaRetailer & PhaIndividual)[]>([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const queryParams = getQueryParms(params);
    webRequest.get(ENDPOINTS.DASHBOARD(queryParams)).then((response) => response.json())
      .then((response) => {
        setTable(response.data.rows);
      }).catch((error) => {
        console.error(error);
        setTable([]);
      });
  }, [params]);

  useEffect(() => {
    const queryParams = getQueryParms(params);
    webRequest.get(ENDPOINTS.DASHBOARD_COUNT(queryParams)).then((resp) => resp.json())
      .then((resp) => {
        setCount(resp.data.count);
      }).catch((error) => {
        console.error(error);
        setCount(0);
      });
  }, [params]);
  return {
    setParams,
    table,
    count
  };
};
