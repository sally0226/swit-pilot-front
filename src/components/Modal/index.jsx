import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Background, Button, Container, Content, Header, Title } from './style';

const ModalPortal = ({ children, title, closePortal }) => {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

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
        <Background className="modal-background" role="presentation" onClick={closePortal} />
        <Content>
          <Header>
            <Title>{title}</Title>
            <Button onClick={closePortal}>
              <img src='/img/cancel.svg' alt='close-icon' />
            </Button>
          </Header>
          {children}
        </Content>
      </Container>,
      ref.current
    )
  }

  return null;
}

export default ModalPortal;
