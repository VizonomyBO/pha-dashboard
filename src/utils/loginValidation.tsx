const TOKEN_KEY = 'token';

export const loginValidation = {
  setToken: (idToken: string) => {
    localStorage.setItem(TOKEN_KEY, idToken);
  },
  getToken: () => (
    localStorage.getItem(TOKEN_KEY)
  )
};
