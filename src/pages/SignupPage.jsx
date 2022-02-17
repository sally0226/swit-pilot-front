import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSignup from '../hooks/useSignup';
import SignupTemplate from '../templates/SignupTemplate';
import { checkEmail, checkName, checkPW, checkPWCheck } from '../utils/validate';

const SignupPage = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const signup = useSignup();

  const idHandler = (e) => {
    const value = e.target.value;
    setId(value);
  };

  const pwHandler = (e) => {
    const value = e.target.value;
    setPw(value);
  };

  const pwCheckHandler = (e) => {
    const value = e.target.value;
    setPwCheck(value);
  };

  const nameHandler = (e) => {
    const value = e.target.value;
    setName(value);
  };

  const signupHandler = () => {
    if (checkEmail(id) && checkPW(pw) && checkPWCheck(pw, pwCheck) && checkName) {
      signup(id, pw, name);
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <SignupTemplate 
      id={id}
      pw={pw}
      pwCheck={pwCheck}
      name={name}
      idHandler={idHandler}
      pwHandler={pwHandler}
      pwCheckHandler={pwCheckHandler}
      nameHandler={nameHandler}
      signup={signupHandler}
      goBack={goBack}
    />
  );
};

export default SignupPage;
