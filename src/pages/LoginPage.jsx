import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useGoogleLogin from '../hooks/useGoogleLogin';
import useLogin from '../hooks/useLogin';
import LoginTemplate from '../templates/LoginTemplate';
import { getCookie } from '../utils/cookie';

const LoginPage = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();
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
  
  useEffect(() => {
    if (getCookie('accessToken')) {
      localStorage.setItem('accessToken', getCookie('accessToken'));
      navigate('/main')
    }
  }, []);
  return (
    <LoginTemplate id={id} pw={pw} idHandler={idHandler} pwHandler={pwHandler} login={loginHandler} googleLogin={googleLogin} />
  );
};

export default LoginPage;
