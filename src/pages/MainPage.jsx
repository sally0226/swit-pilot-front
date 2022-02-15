import React, { useEffect, useRef } from 'react';
import MainTemplate from '../templates/MainTemplate';

const channel_dummy = [
  { id: 1, name: 'Backend' },
  { id: 2, name: 'Frontend' },
  { id: 3, name: 'General' },
];

const chat_dummy = [
  { id: 1, name: 'Alpha', contents: '아이우에오\n'.repeat(100), createdAt: '2022-02-15 14:33:33'},
  { id: 2, name: 'Alpha', contents: '아이우에오', createdAt: '2022-02-15 14:34:33'},
  { id: 3, name: 'Alpha', contents: '아이우에오', createdAt: '2022-02-15 14:35:33'},
  { id: 4, name: 'Bravo', contents: '아이우에오', createdAt: '2022-02-15 14:36:33'},
  { id: 5, name: 'Bravo', contents: '아이우에오', createdAt: '2022-02-15 14:38:33'},
  { id: 6, name: 'Charlie', contents: '아이우에오', createdAt: '2022-02-15 14:40:50'},
  { id: 7, name: 'Charlie', contents: '아이우에오', createdAt: '2022-02-15 14:40:51'},
  { id: 8, name: 'Delta', contents: '아이우에오', createdAt: '2022-02-15 14:51:51'},
  { id: 9, name: 'Echo', contents: '아이우에오', createdAt: '2022-02-15 14:52:20'},
  { id: 10, name: 'Foxtrot', contents: '아이우에오', createdAt: '2022-02-15 14:59:30'},
];

const MainPage = () => {
  const lastMessageRef = useRef();
  const scrollToBottom = () => lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <MainTemplate channels={channel_dummy} messages={chat_dummy} lastMessageRef={lastMessageRef} />
  );
};

export default MainPage;
