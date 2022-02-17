import React from 'react';
import { LoginButton, Logo } from '../../components/Login';
import { SignupInput } from '../../components/Signup';
import { Container, InputContainer, Layout, Line } from './style';

const SignupTemplate = ({
  id,
  pw,
  pwCheck,
  name,
  idHandler,
  pwHandler,
  pwCheckHandler,
  nameHandler,
  signup,
  goBack
}) => {
  return (
    <Layout>
      <Container>
        <Logo />
        <InputContainer>
          <SignupInput label={'ID(E-mail)'} value={id} onChange={idHandler} />
          <SignupInput label={'PW'} value={pw} onChange={pwHandler} type='password' />
          <SignupInput label={'PW(Check)'} value={pwCheck} onChange={pwCheckHandler} type='password' />
          <SignupInput label={'Name'} value={name} onChange={nameHandler} />
        </InputContainer>
        <Line />
        <LoginButton text='Signup' onClick={signup} />
        <LoginButton text='Back to login' onClick={goBack} />
      </Container>
    </Layout>
  );
};

export default SignupTemplate;
