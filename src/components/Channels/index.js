import React, { useState } from 'react';
import Channel from './Channel';
import ChannelModal from './ChannelModal';
import { Button, Container, Title, Wrapper } from './style';

const Channels = ({ channels, current, modalController }) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <Container>
      <Wrapper>
        <Title>Channels</Title>
        <Button onClick={openModal}>
          <img src='/img/plus.svg' alt='plus-icon' />
        </Button>
        { showModal && <ChannelModal closeModal={closeModal} modalController={modalController} /> }
      </Wrapper>
      { channels.map((channel) => <Channel key={channel.channelId} id={channel.channelId} name={channel.channelName} isHere={channel.channelId === current} />) }
    </Container>
  );
};

export default Channels;
