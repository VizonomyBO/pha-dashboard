// this regex match to: random text, some city, state zipcode, random text
const ADDRESS_REGEX = /(.+),\s(.+),\s(.+)\s(\d+),\s(.+)/;

export const getAddressFields = (address: string) => {
  const regex = ADDRESS_REGEX;
  let { zipcode, city, state } = { zipcode: '', city: '', state: '' };
  if (regex.test(address)) {
    const regexArray = regex.exec(address) as RegExpExecArray;
    regexArray.pop();
    zipcode = regexArray.pop() || '';
    state = regexArray.pop() || '';
    city = regexArray.pop() || '';
  }
  return { zipcode, city, state };
};
