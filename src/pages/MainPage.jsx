import React, { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import CreateChannel from '../components/Channels/CreateChannel';
import SearchChannel from '../components/Channels/SearchChannel';
import ModalPortal from '../components/Modal';
import useGetMyChannelList from '../hooks/useGetMyChannelList';
import { channelPeopleListState, currentChannelState, messageState } from '../stores/channel';
import MainTemplate from '../templates/MainTemplate';

const MainPage = () => {
  const lastMessageRef = useRef();
  const scrollToBottom = () => lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
  const myChannels = useGetMyChannelList();
  const currentChannelInfo = useRecoilValue(currentChannelState);
  const messages = useRecoilValue(messageState);
  const people = useRecoilValue(channelPeopleListState);

  const [showUserList, setShowUserList] = useState(false);
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
    },
  }

  const toggleUserList = () => {
    setShowUserList(!showUserList);
  };

  const closeUserList = () => {
    setShowUserList(false);
  };

  useEffect(() => {
    scrollToBottom();
  }, [currentChannelInfo]);

  return (
    <>
      <MainTemplate
        myChannels={myChannels}
        channel={currentChannelInfo}
        messages={messages}
        people={people}
        lastMessageRef={lastMessageRef}
        showUserList={showUserList}
        toggleUserList={toggleUserList}
        closeUserList={closeUserList}
        modalController={modalController}
      />
      {
        showSearchChannelModal &&
        <ModalPortal
          title='채널 탐색'
          closePortal={modalController.closeSearchChannelModal}
        >
          <SearchChannel />
        </ModalPortal>
      }
      {
        showCreateChannelModal &&
        <ModalPortal
          title='채널 생성'
          closePortal={modalController.closeCreateChannelModal}
          showSubmitBtn={true}
        >
          <CreateChannel />
        </ModalPortal>
      }
    </>
  );
};

export default MainPage;
