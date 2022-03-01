import React from 'react';
import { useRecoilValue } from 'recoil';
import userState from '../../../stores/user';
import ProfileIcon from '../../ProfileIcon';
import SenderInfo from './SenderInfo';
import { ButtonContainer, Container, Contents, DeleteIcon, MessageHeader, UpdateIcon, Wrapper } from './style';

const Message = ({ messageId, userEmail, userName, contents, date, openDeleteMessageModal }) => {
  const user = useRecoilValue(userState);
  return (
    <Container>
      <ProfileIcon userName={userName} />
      <Wrapper>
        <MessageHeader>
          <SenderInfo userName={userName} date={date} />
          {
            userEmail === user.userEmail &&
            <ButtonContainer>
              <UpdateIcon>
                <img src='/img/pencil.svg' alt='update-icon' />
              </UpdateIcon>
              <DeleteIcon onClick={() => openDeleteMessageModal(messageId)}>
                <img src='/img/delete-bin.svg' alt='delete-icon' />
              </DeleteIcon>
            </ButtonContainer>
          }
        </MessageHeader>
        <Contents>{contents}</Contents>
      </Wrapper>
    </Container>
  );
};

export default Message;
