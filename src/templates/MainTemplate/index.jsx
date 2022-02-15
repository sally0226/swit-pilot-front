import React from 'react';
import Channels from '../../components/Channels';
import ChatRoom from '../../components/ChatRoom';
import { Layout } from './style';

const MainTemplate = ({ channels, messages, lastMessageRef }) => {
  return (
    <Layout>
      <Channels channels={channels} current={1} />
      <ChatRoom name={'Backend'} peopleNum={3} messages={messages} lastMessageRef={lastMessageRef} />
    </Layout>
  );
};

export default MainTemplate;
