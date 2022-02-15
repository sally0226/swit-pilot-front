import React from 'react';
import Channel from './Channel';
import { Container, Title } from './style';

const Channels = ({ channels, current }) => {
  return (
    <Container>
      <Title>Channels</Title>
      { channels.map((channel) => <Channel key={channel.id} name={channel.name} isHere={channel.id === current} />) }
    </Container>
  );
};

export default Channels;
