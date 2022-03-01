import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Background, Button, ButtonContainer, CloseButton, Container, Content, Header, Message, Title } from './style';

const WarningModal = ({
  title,
  closePortal,
  text,
  submit,
  submitBtnName = '생성'
}) => {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  const submitHandler = () => {
    submit();
    closePortal();
  };

  useEffect(()=>{
    setMounted(true);
    if (document) {
      const dom = document.getElementById('root-modal');
      ref.current = dom;
    }
  }, []);

  if (ref.current && mounted) {
    return createPortal(
      <Container>
        <Background className='modal-background' role='presentation' onClick={closePortal} />
        <Content>
          <Header>
            <Title>{title}</Title>
            <CloseButton onClick={closePortal}>
              <img src='/img/cancel.svg' alt='close-icon' />
            </CloseButton>
          </Header>
          <Message>
            {text}
          </Message>
          <ButtonContainer>
            <Button onClick={closePortal}>취소</Button>
            <Button onClick={submitHandler}>{submitBtnName}</Button>
          </ButtonContainer>
        </Content>
      </Container>,
      ref.current
    )
  }

  return null;
}

export default WarningModal;
