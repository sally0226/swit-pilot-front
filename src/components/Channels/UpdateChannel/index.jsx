import React from 'react';
import { Container, Input, Title } from './style';

const UpdateChannel = ({ updateChannelName, updateChannelNameHandler }) => {
  return (
    <Container>
      <Title>변경할 채널 이름</Title>
      <Input value={updateChannelName} onChange={updateChannelNameHandler} />
    </Container>
  );
};

export default UpdateChannel;
