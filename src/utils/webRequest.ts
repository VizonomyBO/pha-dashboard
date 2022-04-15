import { CompletelyIntentionalAny } from '../@types/database';

export const webRequest = {
  generateAuthHeader: (token: string) => {
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`);
    return headers;
  },
  generateMultipartHeader: () => {
    const headers = new Headers();
    return headers;
  },
  parseToMultipart: (data: CompletelyIntentionalAny) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
      console.log('shit ', JSON.stringify(formData.get(key)));
    });
    return formData;
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
  postMultipart: (url: string, data: CompletelyIntentionalAny, headers?: Headers) => fetch(url, {
    method: 'POST',
    headers: headers || new Headers(),
    body: data,
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
