export const webRequest = {
  generateAuthHeader: (token: string) => ({
    Authorization: `Bearer ${token}`,
  }),
  generateAuthHeaderWithContentType: (token: string) => ({
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  }),
  generateJSONHeader: () => ({
    'Content-Type': 'application/json',
  }),
  get: (url: string, headers?: Headers) => fetch(url, {
    method: 'GET',
    headers,
  }),
};
