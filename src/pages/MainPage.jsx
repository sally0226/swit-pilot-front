import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
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

const MainPage = () => {
  const lastMessageRef = useRef();
  const scrollToBottom = () => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const getMyChannelList = useGetMyChannelList();
  const createChannel = useCreateChannel();
  const exitChannel = useExitChannel();
  const updateChannel = useUpdateChannel();
  const joinChannel = useJoinChannel();
  const deleteMessage = useDeleteMessage();

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

  /*
  // 소켓 이벤트에 따라서 호출
  const patchMessages = (event, messageId, contents = '') => {
    switch (event) {
      case 'delete':
        setMessages(cur => cur.filter((message => message.messageId !== messageId)));
        break;
      case 'update':
        setMessages(cur => cur.map((message => {
          if (message.messageId === messageId) {
            return {...message, contents};
          }
          return message;
        })));
        break;
    }
  };
  */

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
