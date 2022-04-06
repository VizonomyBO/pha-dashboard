import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
import { ENDPOINTS } from '../constants/url';
import { webRequest } from '../utils/webRequest';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const TOKEN_KEY = 'token';
  const items = [{
    id: 'img01',
    imagen: '/images/loginImages/admin-image-1.jpeg',
    description: 'Eat healthy with our curated selection of food and vegetables'
  }, {
    id: 'img02',
    imagen: '/images/loginImages/admin-image-2.jpeg',
    description: 'Eat healthy with our curated selection of food and vegetables!'
  }, {
    id: 'img03',
    imagen: '/images/loginImages/admin-image-3.jpeg',
    description: 'Eat healthy with our curated selection of food and vegetables'
  }];
  const styleError = {
    color: 'red',
    fontSize: '14px'
  };

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
        if (d.data) {
          localStorage.setItem(TOKEN_KEY, d.data.idToken);
          navigate('/dashboard');
        } else {
          setErrorMessage('Could not connect, check your email and password.');
          setTimeout(() => {
            setErrorMessage('');
          }, 3000);
        }
      }).catch((err) => console.error(err));
  };

  return (
    <div className="container">
      <Carousel className="bglogin" interval={4000} autoPlay>
        {
          items.map((item) => (
            <div>
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
            <p style={styleError}>
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
