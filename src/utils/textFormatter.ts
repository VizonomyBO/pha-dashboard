import { StringWithNullables } from '../@types';

export const showText = (text: StringWithNullables, format?: (t: string) => string) => {
  if (text) {
    return format ? (format(text)) : text;
  }
  return '-';
};

const PHONE_REGEX = /(\d{3})(\d{3})(\d{4})/;
export const formatPhone = (text: string) => (text ? text.replace(PHONE_REGEX, '($1) $2-$3') : '-');

export const showSchedule = (start: StringWithNullables, end: StringWithNullables) => {
  const text = `${showText(start)} - ${showText(end)}`;
  return text;
};
