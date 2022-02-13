import React from 'react';
import { Wrapper } from './style';

const SNSLoginButton = ({ onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <img src='https://cdn-icons-png.flaticon.com/512/2991/2991148.png' alt='google' />
      <span>Login with Google</span>
    </Wrapper>
  );
};

export default SNSLoginButton;
