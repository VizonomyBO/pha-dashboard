import { QueryParams } from '../@types';
import { IS_UNVALIDATED } from '../constants/dashboard';

export const getQueryParms = (params: QueryParams) => {
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
  if (params.isRetailer) {
    queryParams += `&isRetailer=${params.isRetailer}`;
  }
  return queryParams;
};

export const getQueryParmsUnvalidated = (params: QueryParams) => {
  let queryParams = '';
  queryParams += `page=${params.page}`;
  queryParams += `&limit=${params.limit}`;
  if (params.search) {
    queryParams += `&search=${params.search}`;
  }
  if (params.dateRange) {
    queryParams += `&dateRange=${params.dateRange}`;
  }
  if (params.isRetailer) {
    queryParams += `&${IS_UNVALIDATED}`;
  }
  return queryParams;
};
