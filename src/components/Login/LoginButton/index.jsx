import React from 'react';
import { Button, Wrapper } from './style';

const LoginButton = ({ text, onClick }) => {
  return (
    <Wrapper>
      <Button onClick={onClick}>{text}</Button>
    </Wrapper>
  );
};

export default LoginButton;
