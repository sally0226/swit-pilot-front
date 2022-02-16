import React from 'react';
import { Background, Container, Select } from './style';

const ChannelModal = ({ closeModal, modalController }) => {
  const clickSearchChannelHandler = () => {
    closeModal();
    modalController.openSearchChannelModal();
  };

  const clickCreateChannelHandler = () => {
    closeModal();
    modalController.openCreateChannelModal();
  };

  return (
    <>
      <Container>
        <Select onClick={clickSearchChannelHandler}>채널 탐색</Select>
        <Select onClick={clickCreateChannelHandler}>채널 생성</Select>
      </Container>
      <Background onClick={closeModal} />
    </>
  );
};

export default ChannelModal;
