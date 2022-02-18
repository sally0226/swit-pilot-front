import React from 'react';
import Channels from '../../components/Channels';
import ChatRoom from '../../components/ChatRoom';
import Header from '../../components/Header';
import { Container, Layout } from './style';

const MainTemplate = ({
  myChannels,
  channel,
  messages,
  people,
  lastMessageRef,
  modalController
}) => {
  return (
    <Layout>
      <Header />
      <Container>
        <Channels
          myChannels={myChannels}
          current={channel.channelId}
          modalController={modalController}
        />
        <ChatRoom
          name={channel.channelName}
          peopleNum={people.length}
          messages={messages}
          lastMessageRef={lastMessageRef}
        />
      </Container>
    </Layout>
  );
};

export default MainTemplate;
