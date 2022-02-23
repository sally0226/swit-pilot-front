import React from 'react';
import ProfileIcon from '../../ProfileIcon';
import SenderInfo from './SenderInfo';
import { Container, Contents, Wrapper } from './style';

const Message = ({ userName, contents, date }) => {
  return (
    <Container>
      <ProfileIcon userName={userName} />
      <Wrapper>
        <SenderInfo userName={userName} date={date} />
        <Contents>{contents}</Contents>
      </Wrapper>
    </Container>
  );
};

export default Message;
