export const webRequest = {
  generateAuthHeader: (token: string) => {
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`);
    return headers;
  },
  generateAuthHeaderWithContentType: (token: string) => {
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`);
    headers.append('Content-Type', 'application/json');
    return headers;
  },
  generateJSONHeader: () => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  },
  get: (url: string, headers?: Headers) => fetch(url, {
    method: 'GET',
    headers: headers || new Headers(),
  }),
  post: (url: string, body: unknown, headers?: Headers) => fetch(url, {
    method: 'POST',
    headers: headers || new Headers(),
    body: JSON.stringify(body),
  }),
  put: (url: string, body: unknown, headers?: Headers) => fetch(url, {
    method: 'PUT',
    headers: headers || new Headers(),
    body: JSON.stringify(body),
  })
};
