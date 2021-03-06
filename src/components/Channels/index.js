import React, { useState } from 'react';
import MyChannel from './MyChannel';
import ChannelModal from './ChannelModal';
import { Button, Container, Title, Wrapper } from './style';
import ProfileCard from './ProfileCard';
import { useRecoilValue } from 'recoil';
import { channelListState } from '../../stores/channel';

const Channels = ({ current, modalController }) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const myChannels = useRecoilValue(channelListState);
  return (
    <Container>
      <ProfileCard />
      <Wrapper>
        <Title>Channels</Title>
        <Button onClick={openModal}>
          <img src='/img/plus.svg' alt='plus-icon' />
        </Button>
        { showModal && <ChannelModal closeModal={closeModal} modalController={modalController} /> }
      </Wrapper>
      {
        myChannels.map((myChannel) =>
          <MyChannel
            key={myChannel.channelId}
            id={myChannel.channelId}
            name={myChannel.channelName}
            isHere={myChannel.channelId === current}
          />
        )
      }
    </Container>
  );
};

export default Channels;
