export const DEFAULT_VALUES_BUTTON = [{
  id: 'btn-01',
  name: 'Pending',
  class: 'light op1',
  active: false
}, {
  id: 'btn-02',
  name: 'Approved',
  class: 'light op2',
  active: false
}, {
  id: 'btn-03',
  name: 'Rejected',
  class: 'light op3',
  active: false
}];

export enum ROW_STATUS {
  APPROVED = 'Approved',
  REJECTED = 'Rejected',
  PENDING = 'Pending',
  DELETED = 'Deleted'
}

export const FILENAME_CSV_RETAILER = 'PHA-retailer';
export const FILENAME_CSV_INDIVIDUAL = 'PHA-individual';
export const EXTENSION_CSV = '.csv';
export const DEBOUNCE_SEARCH_TABLE = 500;
