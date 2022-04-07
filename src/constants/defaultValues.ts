import { QueryParams } from '../@types';

const DEFAULT_PAGE = 1;
const DEFAULT_ROWS_PER_PAGE = 4;

export const defaultQueryParams = {
  page: DEFAULT_PAGE,
  limit: DEFAULT_ROWS_PER_PAGE,
  search: '',
  status: '',
  dateRange: '',
} as QueryParams;
