import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import io from 'socket.io-client';
import { useRecoilValue, useRecoilState } from 'recoil';
import CreateChannel from '../components/Channels/CreateChannel';
import SearchChannel from '../components/Channels/SearchChannel';
import UpdateChannel from '../components/Channels/UpdateChannel';
import ModalPortal from '../components/Modal';
import WarningModal from '../components/WarningModal';
import useCreateChannel from '../hooks/useCreateChannel';
import useDeleteMessage from '../hooks/useDeleteMessage';
import useExitChannel from '../hooks/useExitChannel';
import useGetMyChannelList from '../hooks/useGetMyChannelList';
import useJoinChannel from '../hooks/useJoinChannel';
import useUpdateChannel from '../hooks/useUpdateChannel';
import { channelPeopleListState, currentChannelState, messageState } from '../stores/channel';
import MainTemplate from '../templates/MainTemplate';
import useMoveChannel from '../hooks/useMoveChannel';
import userState from '../stores/user';

const MainPage = () => {
  const lastMessageRef = useRef();
  const scrollToBottom = () => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const moveChannel = useMoveChannel();
  const getMyChannelList = useGetMyChannelList();
  const createChannel = useCreateChannel();
  const exitChannel = useExitChannel();
  const updateChannel = useUpdateChannel();
  const joinChannel = useJoinChannel();
  const deleteMessage = useDeleteMessage();

  const user = useRecoilValue(userState)
  const currentChannelInfo = useRecoilValue(currentChannelState);
  const people = useRecoilValue(channelPeopleListState);
  const [messages, setMessages] = useRecoilState(messageState);

  const [newChannelName, setNewChannelName] = useState('');
  const [updateChannelName, setUpdateChannelName] = useState(currentChannelInfo.channelName);
  const [deleteMessageId, setDeleteMessageId] = useState(0);
  const [showUserList, setShowUserList] = useState(false);
  const [showSearchChannelModal, setShowSearchChannelModal] = useState(false);
  const [showCreateChannelModal, setShowCreateChannelModal] = useState(false);
  const [showExitChannelModal, setShowExitChannelModal] = useState(false);
  const [showUpdateChannelModal, setShowUpdateChannelModal] = useState(false);
  const [showDeleteMessageModal, setShowDeleteMessageModal] = useState(false);

  useEffect(() => {
    if (currentChannelInfo.channelId !== -1) {
      const url = 'http://localhost:8000';
      const socket = io(url, {
        query: {
          channel_id: currentChannelInfo.channelId,
          access_token: localStorage.getItem('accessToken')
        },
        transports: ['websocket'],
      });
      socket.on('init', (data) => {
        if (data) {
          setMessages(data);
        }
      });
      socket.on('create-message', (data) => {
        setMessages(cur => [...cur, JSON.parse(data)]);
      });
      socket.on('update-message', (data) => {
        const msg = JSON.parse(data);
        patchMessages('update-message', msg.messageId, msg.contents);
      });
      socket.on('delete-message', (data) => {
        const msg = JSON.parse(data);
        patchMessages('delete-message', msg.messageId);
      });
      socket.on('update-channel', () => {
        getMyChannelList();
        moveChannel(currentChannelInfo.channelId);
      });
      socket.on('exit-channel', (email) => {
        if (user.userEmail !== email) {
          moveChannel(currentChannelInfo.channelId);
        }
      });
      return (() => {
        setMessages([]);
        socket.disconnect();
      });
    }
  }, [currentChannelInfo]);

  // 소켓 이벤트에 따라서 호출
  const patchMessages = (event, messageId, contents = '') => {
    switch (event) {
      case 'delete-message':
        setMessages(cur => cur.filter((message => message.messageId !== messageId)));
        break;
      case 'update-message':
        setMessages(cur => cur.map((message => {
          if (message.messageId === messageId) {
            return {...message, contents};
          }
          return message;
        })));
        break;
    }
  };

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
      setUpdateChannelName(currentChannelInfo.channelName);
      setShowUpdateChannelModal(true);
    },
    openDeleteMessageModal: (messageId) => {
      setShowDeleteMessageModal(true);
      setDeleteMessageId(messageId);
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

  const updateChannelNameHandler = (e) => {
    setUpdateChannelName(e.target.value);
  };

  const createChannelSubmit = () => {
    createChannel(newChannelName);
  };

  const exitChannelSubmit = () => {
    exitChannel();
  };

  const updateChannelSubmit = () => {
    if (updateChannelName === '') {
      toast.error('비어있는 이름으로 수정이 불가능합니다!');
    } else {
      updateChannel(updateChannelName);
    }
  };

  const joinChannelHandler = (channelId) => {
    joinChannel(channelId);
    modalController.closeSearchChannelModal();
  };

  const deleteMessageHandler = () => {
    deleteMessage(deleteMessageId);
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
          <SearchChannel joinChannel={joinChannelHandler} />
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
        <WarningModal
          title='채널 나가기'
          closePortal={modalController.closeExitChannelModal}
          submit={exitChannelSubmit}
          showSubmitBtn={true}
          submitBtnName='확인'
          text='정말 나가시겠습니까?'
        />
      }
      {
        showUpdateChannelModal &&
        <ModalPortal
          title='채널 이름 수정'
          closePortal={modalController.closeUpdateChannelModal}
          submit={updateChannelSubmit}
          showSubmitBtn={true}
          submitBtnName='수정'
        >
          <UpdateChannel
            updateChannelName={updateChannelName}
            updateChannelNameHandler={updateChannelNameHandler}
          />
        </ModalPortal>
      }
      {
        showDeleteMessageModal &&
        <WarningModal
          title='메시지 삭제'
          closePortal={modalController.closeDeleteMessageModal}
          submit={deleteMessageHandler}
          showSubmitBtn={true}
          submitBtnName='삭제'
          text='삭제하시겠습니까?'
        />
      }
    </>
  );
};

export default MainPage;
