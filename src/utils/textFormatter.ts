import { StringWithNullables } from '../@types';

export const showText = (text: StringWithNullables, format?: (t: string) => string) => {
  if (text) {
    return format ? (format(text)) : text;
  }
  return '-';
};

export const showDate = (text: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const options: any = { day: '2-digit', month: 'long', year: 'numeric' };
  return new Date(text).toLocaleString('en-us', options);
};

const PHONE_REGEX = /(\d{3})(\d{3})(\d{4})/;
export const formatPhone = (text: string) => (text ? text.replace(PHONE_REGEX, '($1) $2-$3') : '-');

export const showSchedule = (start: StringWithNullables, end: StringWithNullables) => {
  const text = `${showText(start)} - ${showText(end)}`;
  return text;
};

export const cleanSplit = (commaSeparated: string) => {
  const arr = commaSeparated ? commaSeparated.split(',') : [];
  return arr.filter((r) => !!r);
};
