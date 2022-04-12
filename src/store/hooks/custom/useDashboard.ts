import { useEffect, useState } from 'react';
import { PhaIndividual, PhaRetailer } from '../../../@types/database';
import { defaultQueryParams } from '../../../constants/defaultValues';
import { ENDPOINTS } from '../../../constants/url';
import { getQueryParms } from '../../../utils/getQueryParams';
import { webRequest } from '../../../utils/webRequest';

export const useDashboard = () => {
  const [params, setParams] = useState(defaultQueryParams);
  const [table, setTable] = useState<(PhaRetailer & PhaIndividual)[]>([]);
  const [totalElements, setTotalElements] = useState(0);

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
        setTotalElements(resp.data.count);
      }).catch((error) => {
        console.error(error);
        setTotalElements(0);
      });
  }, [params]);
  return {
    setParams,
    table,
    totalElements
  };
};
