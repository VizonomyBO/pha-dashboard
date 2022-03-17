import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { Dashboard } from './pages/dashboard';
import { Home } from './pages/home';
import { Form1 } from './pages/form1';
import { Form2 } from './pages/form2';
import { Form3 } from './pages/form3';
import { Form4 } from './pages/form4';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Dashboard />}
        />
        <Route
          path="/form1"
          element={<Form1 />}
        />
        <Route
          path="/form2"
          element={<Form2 />}
        />
        <Route
          path="/form3"
          element={<Form3 />}
        />
        <Route
          path="/form4"
          element={<Form4 />}
        />
        <Route
          path="/home"
          element={<Home />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
