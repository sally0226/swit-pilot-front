import React from 'react';
import Channels from '../../components/Channels';
import ChatRoom from '../../components/ChatRoom';
import Header from '../../components/Header';
import { Container, Layout } from './style';

const MainTemplate = ({
  channel,
  messages,
  people,
  lastMessageRef,
  showUserList,
  toggleUserList,
  closeUserList,
  modalController
}) => {
  return (
    <Layout>
      <Header />
      <Container>
        <Channels
          current={channel.channelId}
          modalController={modalController}
        />
        <ChatRoom
          name={channel.channelName}
          people={people}
          messages={messages}
          lastMessageRef={lastMessageRef}
          showUserList={showUserList}
          toggleUserList={toggleUserList}
          closeUserList={closeUserList}
        />
      </Container>
    </Layout>
  );
};

export default MainTemplate;
