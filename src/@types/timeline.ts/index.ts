/* eslint-disable @typescript-eslint/no-explicit-any */
export interface TimelinesFrameType {
  startDate: Date,
  endDate: Date,
}

export interface DataTimelineType {
  count: number,
  month: string
}

export interface DatesTimelineType {
  date: string,
  month: d3.InternMap<string, DataTimelineType[]> | any,
  superStart: d3.InternMap<string, DataTimelineType[]> | any
}
