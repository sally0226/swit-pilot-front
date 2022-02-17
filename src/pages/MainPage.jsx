import React, { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import ModalPortal from '../components/Modal';
import useGetChannelList from '../hooks/useGetChannelList';
import { channelPeopleListState, currentChannelState, messageState } from '../stores/channel';
import MainTemplate from '../templates/MainTemplate';

const MainPage = () => {
  const lastMessageRef = useRef();
  const scrollToBottom = () => lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
  const channels = useGetChannelList();
  const currentChannelInfo = useRecoilValue(currentChannelState);
  const messages = useRecoilValue(messageState);
  const people = useRecoilValue(channelPeopleListState);

  const [showSearchChannelModal, setShowSearchChannelModal] = useState(false);
  const [showCreateChannelModal, setShowCreateChannelModal] = useState(false);

  const modalController = {
    openSearchChannelModal: () => {
      setShowSearchChannelModal(true);
    },
    openCreateChannelModal: () => {
      setShowCreateChannelModal(true);
    },
    closeSearchChannelModal: () => {
      setShowSearchChannelModal(false);
    },
    closeCreateChannelModal: () => {
      setShowCreateChannelModal(false);
    }
  }

  useEffect(() => {
    scrollToBottom();
  }, [currentChannelInfo]);

  return (
    <>
      <MainTemplate
        channels={channels}
        channel={currentChannelInfo}
        messages={messages}
        people={people}
        lastMessageRef={lastMessageRef}
        modalController={modalController}
      />
      {
        showSearchChannelModal &&
        <ModalPortal
          title='채널 탐색'
          closePortal={modalController.closeSearchChannelModal}
        >
          <span>SearchChannelModal</span>
        </ModalPortal>}
      {
        showCreateChannelModal &&
        <ModalPortal
          title='채널 생성'
          closePortal={modalController.closeCreateChannelModal}
        >
          <span>CreateChannelModal</span>
        </ModalPortal>}
    </>
  );
};

export default MainPage;
