import { useEffect, useState } from 'react';
import { PhaIndividual, PhaRetailer } from '../../../@types/database';
import { defaultQueryParams } from '../../../constants/defaultValues';
import { ENDPOINTS } from '../../../constants/url';
import { getQueryParms } from '../../../utils/getQueryParams';
import { webRequest } from '../../../utils/webRequest';

export const useDashboard = () => {
  const [params, setParams] = useState(defaultQueryParams);
  const [table, setTable] = useState<(PhaRetailer & PhaIndividual)[]>([]);
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
  return {
    setParams,
    table
  };
};
