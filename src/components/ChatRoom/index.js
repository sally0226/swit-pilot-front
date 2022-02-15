import React from 'react';
import ChatBoard from './ChatBoard';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import { Container } from './style';

const ChatRoom = ({ name, peopleNum, messages, lastMessageRef }) => {
  return (
    <Container>
      <ChatHeader name={name} peopleNum={peopleNum} />
      <ChatBoard messages={messages} lastMessageRef={lastMessageRef} />
      <ChatInput />
    </Container>
  );
};

export default ChatRoom;
