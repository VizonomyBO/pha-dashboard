const TOKEN_KEY = 'token';

export const authorizationManager = {
  setToken: (idToken: string) => {
    localStorage.setItem(TOKEN_KEY, idToken);
  },
  getToken: () => (
    localStorage.getItem(TOKEN_KEY)
  ),
  logout: () => (
    localStorage.removeItem(TOKEN_KEY)
  )
};
