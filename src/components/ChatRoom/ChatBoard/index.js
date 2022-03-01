import React from 'react';
import { useRecoilValue } from 'recoil';
import { channelPeopleListState } from '../../../stores/channel';
import Message from '../Message';
import NoMessage from './NoMessage';
import { Container } from './style';

const ChatBoard = ({ messages, lastMessageRef, openDeleteMessageModal }) => {
  const memberList = useRecoilValue(channelPeopleListState);
  return (
    <Container>
      {
        messages.length !== 0 &&
        messages.map(message =>
          <Message
            key={message.messageId}
            messageId={message.messageId}
            userEmail={message.userEmail}
            userName={memberList.find((elem)=> elem.userEmail === message.userEmail)?.userName}
            contents={message.contents}
            date={message.createdAt}
            openDeleteMessageModal={openDeleteMessageModal}
          />
        )
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
