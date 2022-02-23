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
  closeUserList
}) => {
  return (
    <Container>
      {
        name &&
        <>
          <ChatHeader name={name} people={people} toggleUserList={toggleUserList} />
          <RoomContainer>
            <Wrapper>
              <ChatBoard messages={messages} lastMessageRef={lastMessageRef} />
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
