import { QueryParams } from '../@types';

export const DEFAULT_PAGE = 1;
export const DEFAULT_ROWS_PER_PAGE = 4;
export const PAGE_NUMBER_LIMIT = 5;
export const MAX_PAGE_NUMBER_LIMIT = 5;
export const MIN_PAGE_NUMBER_LIMIT = 0;

export const defaultQueryParams = {
  page: DEFAULT_PAGE,
  limit: DEFAULT_ROWS_PER_PAGE,
  search: '',
  status: '',
  dateRange: '',
} as QueryParams;
