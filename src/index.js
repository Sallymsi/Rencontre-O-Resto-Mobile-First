import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Connexion from './pages/Connexion';
import Signin from './pages/Signin';
import reportWebVitals from './reportWebVitals';
import FormInfo from './pages/FormInfo';
import Profil from './pages/Profil';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<MainPage />}></Route>
              <Route path="/connexion" element={<Connexion />}></Route>
              <Route path="/signin" element={<Signin />}></Route>
              <Route path="/formInfo" element={<FormInfo />}></Route>
              <Route path="/profil" element={<Profil />}></Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
