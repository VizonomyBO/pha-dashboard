/* eslint-disable @typescript-eslint/no-explicit-any */
export interface TimelinesFrameType {
  startDate: Date,
  endDate: Date,
}

export interface DataTimelineType {
  count: number,
  month: string,
  superstar_badge_count?: number,
  no_superstar_badge_count?: number,
}

export interface DatesTimelineType {
  date: string,
  month: d3.InternMap<string, DataTimelineType[]> | any,
  superStart: d3.InternMap<string, DataTimelineType[]> | any,
  no_superstar_badge_count: d3.InternMap<string, DataTimelineType[]> | any,
}

export interface ModalTimeline {
  view: boolean;
  x: number;
  number: number;
}
