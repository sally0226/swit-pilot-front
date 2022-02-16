import React from 'react';
import Message from '../Message';
import { Container } from './style';

const ChatBoard = ({ messages, lastMessageRef }) => {
  return (
    <Container>
      {
        messages.length !== 0 &&
        messages.map(message => <Message key={message.createdAt} user_name={message.name} contents={message.contents} date={message.createdAt} />)
      }
      <div ref={lastMessageRef} />
    </Container>
  );
};

export default ChatBoard;
