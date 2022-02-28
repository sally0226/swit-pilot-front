import React, { useEffect, useRef, useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import CreateChannel from '../components/Channels/CreateChannel';
import SearchChannel from '../components/Channels/SearchChannel';
import ModalPortal from '../components/Modal';
import useCreateChannel from '../hooks/useCreateChannel';
import useGetMyChannelList from '../hooks/useGetMyChannelList';
import { channelPeopleListState, currentChannelState, messageState } from '../stores/channel';
import MainTemplate from '../templates/MainTemplate';

const MainPage = () => {
  const lastMessageRef = useRef();
  const scrollToBottom = () => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const getMyChannelList = useGetMyChannelList();
  const createChannel = useCreateChannel();

  const currentChannelInfo = useRecoilValue(currentChannelState);
  const [messages, setMessageList] = useRecoilState(messageState);
  const people = useRecoilValue(channelPeopleListState);

  const [newChannelName, setNewChannelName] = useState('');
  const [showUserList, setShowUserList] = useState(false);
  const [showSearchChannelModal, setShowSearchChannelModal] = useState(false);
  const [showCreateChannelModal, setShowCreateChannelModal] = useState(false);
  const [showExitChannelModal, setShowExitChannelModal] = useState(false);
  const [showUpdateChannelModal, setShowUpdateChannelModal] = useState(false);
  const [showDeleteMessageModal, setShowDeleteMessageModal] = useState(false);

  const updatedMessage = (message) => {
    const newMessages = messages.map((elem) => {
      if (elem.messageId === message.messageId) {
        return message;
      }
      return elem;
    });
    setMessageList(newMessages)
  }

  const deleteMessage = (message) => {
    setMessageList(messages.filter((elem) => elem.messageId !== message.messageId))
  }

  const modalController = {
    openSearchChannelModal: () => {
      setShowSearchChannelModal(true);
    },
    openCreateChannelModal: () => {
      setShowCreateChannelModal(true);
    },
    openExitChannelModal: () => {
      setShowExitChannelModal(true);
    },
    openUpdateChannelModal: () => {
      setShowUpdateChannelModal(true);
    },
    openDeleteMessageModal: () => {
      setShowDeleteMessageModal(true);
    },
    closeSearchChannelModal: () => {
      setShowSearchChannelModal(false);
    },
    closeCreateChannelModal: () => {
      setShowCreateChannelModal(false);
    },
    closeExitChannelModal: () => {
      setShowExitChannelModal(false);
    },
    closeUpdateChannelModal: () => {
      setShowUpdateChannelModal(false);
    },
    closeDeleteMessageModal: () => {
      setShowDeleteMessageModal(false);
    },
  }

  const toggleUserList = () => {
    setShowUserList(!showUserList);
  };

  const closeUserList = () => {
    setShowUserList(false);
  };

  const newChannelNameHandler = (e) => {
    setNewChannelName(e.target.value);
  };

  const createChannelSubmit = () => {
    createChannel(newChannelName);
  };

  useEffect(() => {
    getMyChannelList();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [currentChannelInfo, messages]);

  return (
    <>
      <MainTemplate
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
          submit={createChannelSubmit}
          showSubmitBtn={true}
        >
          <CreateChannel
            newChannelName={newChannelName}
            newChannelNameHandler={newChannelNameHandler}
          />
        </ModalPortal>
      }
      {
        showExitChannelModal &&
        <ModalPortal
          title='채널 나가기'
          closePortal={modalController.closeExitChannelModal}
          showSubmitBtn={true}
          showSubmitBtnCenter={true}
          submitBtnName='확인'
        >
          <span>나가시겠습니까?</span>
        </ModalPortal>
      }
      {
        showUpdateChannelModal &&
        <ModalPortal
          title='채널 이름 수정'
          closePortal={modalController.closeUpdateChannelModal}
          showSubmitBtn={true}
          submitBtnName='수정'
        >
          <span>채널 이름 수정</span>
        </ModalPortal>
      }
      {
        showDeleteMessageModal &&
        <ModalPortal
          title='메시지 삭제'
          closePortal={modalController.closeDeleteMessageModal}
          showSubmitBtn={true}
          showSubmitBtnCenter={true}
          submitBtnName='삭제'
        >
          <span>삭제하시겠습니까?</span>
        </ModalPortal>
      }
    </>
  );
};

export default MainPage;
