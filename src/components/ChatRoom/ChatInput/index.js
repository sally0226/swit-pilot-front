import React from 'react';
import { Button, Input, Wrapper } from './style';

const ChatInput = () => {
  return (
    <Wrapper>
      <Input placeholder='메시지를 입력해주세요' />
      <Button>
        <img src='/img/paper-plane.svg' alt='send-icon' />
      </Button>
    </Wrapper>
  );
};

export default ChatInput;
