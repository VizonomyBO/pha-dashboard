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
  class: 'light op2',
  active: false
}, {
  id: 'btn-04',
  name: 'Unvalidated',
  class: 'light op3',
  active: false
}];

export const DEFAULT_VALUES_BUTTON_INDIVIDUAL = [{
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
  DELETED = 'Deleted',
  UNVALIDATED = 'Unvalidated'
}

export const FILENAME_CSV_RETAILER = 'PHA-retailer';
export const FILENAME_CSV_INDIVIDUAL = 'PHA-individual';
export const EXTENSION_CSV = '.csv';
export const EXTENSION_ZIP = '.zip';
export const DEBOUNCE_SEARCH_TABLE = 500;
export const RETAILERS_PHA = 'retailers_pha';
export const INDIVIDUAL_PHA = 'pha_individual';
export const UNVALIDATED = 'Unvalidated';
export const IS_UNVALIDATED = 'isUnvalidated=true';
