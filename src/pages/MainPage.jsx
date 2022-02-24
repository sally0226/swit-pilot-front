import React, { useEffect, useRef, useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import CreateChannel from '../components/Channels/CreateChannel';
import SearchChannel from '../components/Channels/SearchChannel';
import ModalPortal from '../components/Modal';
import io from 'socket.io-client';
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

  useEffect(() => {
    const url = "http://localhost:8000"
    console.log(currentChannelInfo.channelId)
    if (currentChannelInfo.channelId != -1) {
      const socket = io(url, {
        query: {
          channel_id: currentChannelInfo.channelId,
          accessToken: localStorage.getItem("accessToken")
        },
        transports: ['websocket'],
      });
      socket.on("init", (data) => {
        console.log(data);
        if (data) {
          setMessageList(data);
        }
      });
      socket.on("create-message", (data) => {
        console.log("create-message", data)
        createdMessage(data);
      });
      socket.on("update-message", (data) => {
        console.log("update-message", data)
        updatedMessage(data);
      });
      socket.on("delete-message", (data) => {
        console.log("delete-message", data)
        deleteMessage(data);
      });
      return (() => {
        setMessageList([]);
        socket.disconnect()
      })
    }
  }, [currentChannelInfo]);

  const createdMessage = (message) => {
    setMessageList(cur => [...cur, message])
  }

  const updatedMessage = (message) => {
    const newMessages = messages.map((elem) => {
      if (elem.messageId == message.messageId) {
        return message;
      }
      return elem;
    });
    setMessageList(newMessages)
  }

  const deleteMessage = (message) => {
    setMessageList(messages.filter((elem) => elem.messageId != message.messageId))
  }
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

  const newChannelNameHandler = (e) => {
    setNewChannelName(e.target.value);
  };

  const createChannelSubmit = () => {
    createChannel(newChannelName);
  };

  useEffect(() => {
    scrollToBottom();
  }, [currentChannelInfo]);

  useEffect(() => {
    getMyChannelList();
  }, []);

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
    </>
  );
};

export default MainPage;
