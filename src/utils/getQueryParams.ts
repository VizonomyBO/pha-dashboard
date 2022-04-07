import { QueryParams } from '../@types';

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
  return queryParams;
};
