import { useEffect, useState } from 'react';
import { QueryParams } from '../../../@types';
import { PhaIndividual, PhaRetailer } from '../../../@types/database';
import { defaultQueryParams } from '../../../constants/defaultValues';
import { ENDPOINTS } from '../../../constants/url';
import { webRequest } from '../../../utils/webRequest';

const getQueryParms = (params: QueryParams) => {
  let queryParams = '';
  queryParams += `page=${params.page}`;
  queryParams += `&limit=${params.limit}`;
  if (params.search) {
    queryParams += `&search=${params.search}`;
  }
  if (params.status) {
    queryParams += `&status=${params.status}`;
  }
  if (params.dateRange) {
    queryParams += `&dateRange=${params.dateRange}`;
  }
  return queryParams;
};

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
