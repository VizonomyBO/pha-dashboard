import { FilterType } from '../@types';

export const CATEGORIES: FilterType[] = [
  {
    name: 'Corner/convenience store',
    attrib: 'corner_store'
  },
  {
    name: 'Distribution location',
    attrib: 'distribution'
  },
  {
    name: 'Dollar stores',
    attrib: 'dollar_stores'
  },
  {
    name: 'Farmers markets',
    attrib: 'farmers_market'
  },
  {
    name: 'Food pantry',
    attrib: 'food_pantry'
  },
  {
    name: 'Food co-op',
    attrib: 'food_co_op'
  },
  {
    name: 'Grocery Store',
    attrib: 'grocery_store'
  },
  {
    name: 'General Store',
    attrib: 'general_store'
  },
  {
    name: 'Supermarket/big box',
    attrib: 'supermarket'
  }
];

export const ACCESIBILITIES: FilterType[] = [
  {
    name: 'WIC Accepted',
    attrib: 'wic_accepted'
  },
  {
    name: 'SNAP Accepted',
    attrib: 'snap_accepted'
  }
];

export const BADGES: FilterType[] = [
  {
    name: 'Fresh Produce',
    attrib: 'fresh'
  },
  {
    name: 'Quality',
    attrib: 'acceptable'
  },
  {
    name: 'Local',
    attrib: 'local'
  },
  {
    name: 'Visibility',
    attrib: 'visible'
  },
  {
    name: 'Superstar',
    attrib: 'meets_need'
  }
];

export const DATASOURCES: FilterType[] = [
  {
    name: 'Submitted By Users',
    attrib: 'retailers_pha'
  },
  {
    name: 'OpenStreetMap',
    attrib: 'retailers_osm'
  },
  {
    name: 'USDA Food Markets',
    attrib: 'retailers_usda'
  }
];

export const PHA_RETAILERS = 'retailers_pha';
export const OSM_RETAILERS = 'retailers_osm';
export const USDA_RETAILERS = 'retailers_usda';
