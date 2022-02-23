import React from 'react';
import { Container, Description } from './style';

const NoMessage = () => {
  return (
    <Container>
      <img src='/img/paper-plane.svg' alt='send-icon' />
      <Description>채널에 메시지가 없습니다.</Description>
      <Description>첫 대화를 시작해보세요!</Description>
    </Container>
  );
};

export default NoMessage;
