import React, { useState } from 'react';
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

  const login = useLogin(id, pw);

  return (
    <LoginTemplate id={id} pw={pw} idHandler={idHandler} pwHandler={pwHandler} login={login} />
  );
};

export default LoginPage;
