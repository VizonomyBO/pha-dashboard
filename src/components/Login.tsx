import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
import { ENDPOINTS } from '../constants/url';
import { webRequest } from '../utils/webRequest';
import {
  ITEM_IMAGE,
  STYLE_ERROR,
  INTERVAL_CAUROSEL,
  MESSAGE_EMAIL_PASSWORD,
  MESSAGE_ERROR
} from '../constants/login';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const TOKEN_KEY = 'token';

  const setUsernameFunction = (e: React.FormEvent<HTMLInputElement>): void => {
    setUsername(e.currentTarget.value);
  };

  const setPasswordFunction = (e: React.FormEvent<HTMLInputElement>): void => {
    setPassword(e.currentTarget.value);
  };

  const setTimeOutFunction = () => {
    setTimeout(() => {
      setErrorMessage('');
    }, 3000);
  };

  const loginFunction = () => {
    const headers = webRequest.generateJSONHeader();
    webRequest.post(ENDPOINTS.LOGIN(), {
      username, password
    }, headers).then((r) => r.json())
      .then((d) => {
        if (d.data) {
          localStorage.setItem(TOKEN_KEY, d.data.idToken);
          navigate('/dashboard');
        } else {
          setErrorMessage(MESSAGE_EMAIL_PASSWORD);
          setTimeOutFunction();
        }
      }).catch((err) => {
        console.error(err);
        setErrorMessage(MESSAGE_ERROR);
        setTimeOutFunction();
      });
  };

  return (
    <div className="container">
      <Carousel className="bglogin" interval={INTERVAL_CAUROSEL} autoPlay>
        {
          ITEM_IMAGE.map((item) => (
            <div key={item.id}>
              <img src={item.imagen} alt="" />
              <div className="blockdesc">
                <p>
                  {item.description}
                </p>
              </div>
            </div>
          ))
        }
      </Carousel>
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
              className="fl"
              placeholder="Email"
              value={username}
              onChange={setUsernameFunction}
            />
          </div>
          <div className="item">
            <input
              type="text"
              className="fl"
              placeholder="Password"
              value={password}
              onChange={setPasswordFunction}
            />
          </div>
          {errorMessage && (
            <p style={STYLE_ERROR}>
              {errorMessage}
            </p>
          )}
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
