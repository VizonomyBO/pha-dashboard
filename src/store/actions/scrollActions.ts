import * as TYPES from '../types';

export const setScrollWidth = (widthScroll: number) => ({
  type: TYPES.SET_SCROLL_WIDTH,
  payload: widthScroll
});

export const setScrollHeight = (heightScroll: number) => ({
  type: TYPES.SET_SCROLL_HEIGHT,
  payload: heightScroll
});
