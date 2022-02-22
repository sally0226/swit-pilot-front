import React from 'react';
import PeopleIcon from '../PeopleIcon';
import { Title, Wrapper } from './style';

const ChatHeader = ({ name, people, toggleUserList }) => {
  return (
    <Wrapper>
      <Title>{name}</Title>
      <PeopleIcon num={people.length} toggleUserList={toggleUserList} />
    </Wrapper>
  );
};

export default ChatHeader;
