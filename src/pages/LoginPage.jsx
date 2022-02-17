import React, { useState } from 'react';
import useGoogleLogin from '../hooks/useGoogleLogin';
import useLogin from '../hooks/useLogin';
import LoginTemplate from '../templates/LoginTemplate';

const LoginPage = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const idHandler = (e) => {
    const value = e.target.value;
    setId(value);
  };

  const pwHandler = (e) => {
    const value = e.target.value;
    setPw(value);
  };

  const login = useLogin();

  const loginHandler = () => {
    login(id, pw);
  };

  const googleLogin = useGoogleLogin();

  return (
    <LoginTemplate id={id} pw={pw} idHandler={idHandler} pwHandler={pwHandler} login={loginHandler} googleLogin={googleLogin} />
  );
};

export default LoginPage;
