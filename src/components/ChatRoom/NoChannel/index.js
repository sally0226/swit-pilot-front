import React from 'react';
import { Container, Description } from './style';

const NoChannel = () => {
  return (
    <Container>
      <img src='/img/search-plus.svg' alt='search-plus-icon' />
      <Description>소속된 채널이 없습니다.</Description>
      <Description>채널 탐색 또는 새 채널을 생성해주세요.</Description>
    </Container>
  );
};

export default NoChannel;
