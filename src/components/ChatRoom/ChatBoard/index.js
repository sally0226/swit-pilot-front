import React from 'react';
import Message from '../Message';
import NoMessage from './NoMessage';
import { Container } from './style';

const ChatBoard = ({ messages, lastMessageRef }) => {
  return (
    <Container>
      {
        messages.length !== 0 &&
        messages.map(message => <Message key={message.createdAt} userName={message.name} contents={message.contents} date={message.createdAt} />)
      }
      {
        messages.length === 0 &&
        <NoMessage />

      }
      <div ref={lastMessageRef} />
    </Container>
  );
};

export default ChatBoard;
