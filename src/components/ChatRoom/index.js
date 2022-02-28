import React from 'react';
import ChatBoard from './ChatBoard';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import NoChannel from './NoChannel';
import { Container, RoomContainer, Wrapper } from './style';
import UserList from './UserList';

const ChatRoom = ({
  name,
  people,
  messages,
  lastMessageRef,
  showUserList,
  toggleUserList,
  closeUserList,
  openExitChannelModal,
  openUpdateChannelModal,
  openDeleteMessageModal,
}) => {
  return (
    <Container>
      {
        name &&
        <>
          <ChatHeader
            name={name}
            people={people}
            toggleUserList={toggleUserList}
            openExitChannelModal={openExitChannelModal}
            openUpdateChannelModal={openUpdateChannelModal}
          />
          <RoomContainer>
            <Wrapper>
              <ChatBoard
                messages={messages}
                lastMessageRef={lastMessageRef}
                openDeleteMessageModal={openDeleteMessageModal}
              />
              <ChatInput />
            </Wrapper>
            { showUserList && <UserList closeUserList={closeUserList} /> }
          </RoomContainer>
        </>
      }
      {
        !name &&
        <NoChannel />
      }
    </Container>
  );
};

export default ChatRoom;
