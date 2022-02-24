import React from 'react';
import { useRecoilState } from 'recoil';
import { channelPeopleListState } from '../../../stores/channel';
import Message from '../Message';
import NoMessage from './NoMessage';
import { Container } from './style';

const ChatBoard = ({ messages, lastMessageRef }) => {
  const memberList = useRecoilState(channelPeopleListState)
  return (
    <Container>
      {
        messages.length !== 0 &&
        messages.map(message => <Message key={message.createdAt} userName={memberList[0].find((elem)=> elem.userEmail == message.userEmail)?.userName} contents={message.contents} date={message.createdAt} />)
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
