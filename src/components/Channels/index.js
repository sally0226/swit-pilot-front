import React from 'react';
import Channel from './Channel';
import { Button, Container, Title, Wrapper } from './style';

const Channels = ({ channels, current }) => {
  return (
    <Container>
      <Wrapper>
        <Title>Channels</Title>
        <Button>
          <img src='/img/plus.svg' alt='plus-icon' />
        </Button>
      </Wrapper>
      { channels.map((channel) => <Channel key={channel.id} name={channel.name} isHere={channel.id === current} />) }
    </Container>
  );
};

export default Channels;
