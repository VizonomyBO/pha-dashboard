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
    const promises = [];
    promises.push(webRequest.get(ENDPOINTS.PHA_INDIVIDUAL(queryParams)));
    promises.push(webRequest.get(ENDPOINTS.PHA_RETAILERS(queryParams)));
    Promise.all(promises).then((res) => {
      res.forEach((response) => {
        response.json().then((row) => {
          setTable(row.data.rows);
        });
      });
    }).catch((err) => {
      console.error(err);
      setTable([]);
    });
  }, [params]);
  return {
    setParams,
    table
  };
};
