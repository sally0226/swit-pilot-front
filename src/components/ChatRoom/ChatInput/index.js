import React, { useState } from 'react';
import useSendMessage from '../../../hooks/useSendMessage';
import { Button, Input, Wrapper } from './style';

const ChatInput = () => {
  const sendMessage = useSendMessage();
  const [input, setInput] = useState('');
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const onPressEnter = (e) => {
    if (e.key === 'Enter') {
      send();
    }
  };
  const send = () => {
    if (input !== '') {
      sendMessage(input);
      setInput('');
    }
  };

  return (
    <Wrapper>
      <Input onKeyPress={onPressEnter} onChange={inputHandler} value={input} placeholder='메시지를 입력해주세요' />
      <Button onClick={send}>
        <img src='/img/paper-plane.svg' alt='send-icon' />
      </Button>
    </Wrapper>
  );
};

export default ChatInput;
