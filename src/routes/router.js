import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useCheckLogin from '../hooks/useCheckLogin';
import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';
import SignupPage from '../pages/SignupPage';

const Router = () => {
  const checkLogin = useCheckLogin();
  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      checkLogin();
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/main' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
