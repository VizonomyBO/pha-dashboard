import { QueryParams } from '../@types';

export const DEFAULT_PAGE = 1;
export const DEFAULT_ROWS_PER_PAGE = 7;
export const PAGE_NUMBER_LIMIT = 18;
export const MAX_PAGE_NUMBER_LIMIT = 18;
export const MIN_PAGE_NUMBER_LIMIT = 0;

export const defaultQueryParams = {
  page: DEFAULT_PAGE,
  limit: DEFAULT_ROWS_PER_PAGE,
  search: '',
  status: '',
  dateRange: '',
  isRetailer: true
} as QueryParams;
