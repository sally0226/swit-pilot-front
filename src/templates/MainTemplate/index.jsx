import React from 'react';
import Channels from '../../components/Channels';
import ChatRoom from '../../components/ChatRoom';
import Header from '../../components/Header';
import { Container, Layout } from './style';

const MainTemplate = ({ channels, messages, lastMessageRef }) => {
  return (
    <Layout>
      <Header />
      <Container>
        <Channels channels={channels} current={1} />
        <ChatRoom name={'Backend'} peopleNum={3} messages={messages} lastMessageRef={lastMessageRef} />
      </Container>
    </Layout>
  );
};

export default MainTemplate;
