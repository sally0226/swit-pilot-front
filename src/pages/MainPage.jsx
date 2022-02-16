import React, { useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import useGetChannelList from '../hooks/useGetChannelList';
import { currentChannelState, messageState } from '../stores/channel';
import MainTemplate from '../templates/MainTemplate';

const MainPage = () => {
  const lastMessageRef = useRef();
  const scrollToBottom = () => lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
  const channels = useGetChannelList();
  const currentChannelInfo = useRecoilValue(currentChannelState);
  const messages = useRecoilValue(messageState);

  useEffect(() => {
    scrollToBottom();
  }, [currentChannelInfo]);

  return (
    <MainTemplate channels={channels} channel={currentChannelInfo} messages={messages} lastMessageRef={lastMessageRef} />
  );
};

export default MainPage;
