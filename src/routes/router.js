import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route ypath='/' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
