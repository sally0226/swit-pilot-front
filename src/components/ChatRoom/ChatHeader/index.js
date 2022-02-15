import React from 'react';
import People from '../People';
import { Title, Wrapper } from './style';

const ChatHeader = ({ name, peopleNum }) => {
  return (
    <Wrapper>
      <Title>{name}</Title>
      <People num={peopleNum}/>
    </Wrapper>
  );
};

export default ChatHeader;
