import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { Dashboard } from './pages/dashboard';
import { Landing } from './pages/landing';
import { Home } from './pages/home';
import { Form } from './pages/form';
import { Form4 } from './pages/form4';
import { MainMap } from './pages/mainMap';
import { Nsform1 } from './pages/nsform1';
import { Nsform4 } from './pages/nsform4';
import { Nshome } from './pages/nshome';
import { Profile } from './pages/profile';
import { Login } from './components/Login';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Landing />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
          <Route
            path="/form"
            element={<Form />}
          />
          <Route
            path="/form4"
            element={<Form4 />}
          />
          <Route
            path="/home"
            element={<Home />}
          />
          <Route
            path="/map"
            element={<MainMap />}
          />
          <Route
            path="/nsform1"
            element={<Nsform1 />}
          />
          <Route
            path="/nsform4"
            element={<Nsform4 />}
          />
          <Route
            path="/nshome"
            element={<Nshome />}
          />
          <Route
            path="/profile/:id"
            element={<Profile />}
          />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
