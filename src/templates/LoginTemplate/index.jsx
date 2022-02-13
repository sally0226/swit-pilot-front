import React from 'react';
import { LoginInput, Logo, SNSLoginButton } from '../../components/Login';
import LoginButton from '../../components/Login/LoginButton';
import { ButtonContainer, Container, InputContainer, Layout, Line } from './style';

const LoginTemplate = ({ id, pw, idHandler, pwHandler, login }) => {
  return (
    <Layout>
      <Container>
        <Logo />
        <InputContainer>
          <LoginInput label='ID' value={id} onChange={idHandler} />
          <LoginInput label='PW' value={pw} onChange={pwHandler} type='password' />
        </InputContainer>
        <Line />
        <ButtonContainer>
          <LoginButton text='Login' onClick={login} />
          <LoginButton text='Signup' />
        </ButtonContainer>
        <SNSLoginButton />
      </Container>
    </Layout>
  );
};

export default LoginTemplate;
