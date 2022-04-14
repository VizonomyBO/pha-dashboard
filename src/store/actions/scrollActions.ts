import * as TYPES from '../types';

export const setScrollWith = (withScroll: number) => ({
  type: TYPES.SET_SCROLL_WITH,
  payload: withScroll
});

export const setScrollHeight = (heightScroll: number) => ({
  type: TYPES.SET_SCROLL_HEIGHT,
  payload: heightScroll
});
