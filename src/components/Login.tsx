import { useState } from 'react';
import { ENDPOINTS } from '../constants/url';
import { webRequest } from '../utils/webRequest';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const TOKEN_KEY = 'token';

  const setUsernameFunction = (e: React.FormEvent<HTMLInputElement>): void => {
    setUsername(e.currentTarget.value);
  };

  const setPasswordFunction = (e: React.FormEvent<HTMLInputElement>): void => {
    setPassword(e.currentTarget.value);
  };

  const loginFunction = () => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    webRequest.post(ENDPOINTS.LOGIN(), {
      username, password
    }, headers).then((r) => r.json())
      .then((d) => {
        localStorage.setItem(TOKEN_KEY, d.id_token);
      });
  };

  return (
    <div className="container">
      <div className="bglogin">
        <img src="../../public/images/loginImages/admin-image-3.jpeg" alt="gio" />
        <div className="blockdesc">
          <p>
            Eat healthy with our curated selection of food and vegetables
          </p>
        </div>
      </div>
      <div className="formlogin">
        <div className="iclogo">
          a
        </div>
        <p className="welcome">
          Welcome to
          <br />
          The Food and Vegetable Access Point Platform
        </p>
        <div className="group">
          <div className="item">
            <input
              type="text"
              placeholder="Email"
              value={username}
              onChange={setUsernameFunction}
            />
          </div>
          <div className="item">
            <input
              type="text"
              placeholder="Password"
              value={password}
              onChange={setPasswordFunction}
            />
          </div>
          <div className="item">
            <button
              type="button"
              className="fl"
              onClick={() => loginFunction()}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
