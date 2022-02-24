import React from 'react';
import { Container, Input, Title } from './style';

const CreateChannel = ({ newChannelName, newChannelNameHandler }) => {
  return (
    <Container>
      <Title>채널 이름</Title>
      <Input value={newChannelName} onChange={newChannelNameHandler} />
    </Container>
  );
};

export default CreateChannel;
