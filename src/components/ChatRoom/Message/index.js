import React from 'react';
import ProfileIcon from '../../ProfileIcon';
import SenderInfo from './SenderInfo';
import { Container, Contents, Wrapper } from './style';

const Message = ({ user_name, contents, date }) => {
  return (
    <Container>
      <ProfileIcon user_name={user_name} />
      <Wrapper>
        <SenderInfo user_name={user_name} date={date} />
        <Contents>{contents}</Contents>
      </Wrapper>
    </Container>
  );
};

export default Message;
