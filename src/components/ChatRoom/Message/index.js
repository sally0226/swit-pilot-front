import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useRecoilValue } from 'recoil';
import useUpdateMessage from '../../../hooks/useUpdateMessage';
import userState from '../../../stores/user';
import ProfileIcon from '../../ProfileIcon';
import SenderInfo from './SenderInfo';
import { Button, ButtonContainer, Container, Contents, DeleteIcon, Input, InputBtnContainer, InputContainer, MessageHeader, UpdateIcon, Wrapper } from './style';

const Message = ({
  messageId,
  userEmail,
  userName,
  contents,
  date,
  openDeleteMessageModal
}) => {
  const user = useRecoilValue(userState);
  const updateMessage = useUpdateMessage();
  const [mode, setMode] = useState('view');
  const [input, setInput] = useState(contents);

  const setModeToView = () => {
    setMode('view');
  };

  const setModeToUpdate = () => {
    setMode('update');
    setInput(contents);
  };

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const updateHandler = () => {
    if (input === '') {
      toast.error('비어있는 메시지입니다');
      setModeToView();
      return;
    }
    if (input === contents) {
      toast.error('변동 사항이 없습니다');
      setModeToView();
      return;
    }
    updateMessage(messageId, input);
    setModeToView();
  };

  return (
    <Container>
      <ProfileIcon userName={userName} />
      <Wrapper>
        <MessageHeader>
          <SenderInfo userName={userName} date={date} />
          {
            (userEmail === user.userEmail && mode === 'view') &&
            <ButtonContainer>
              <UpdateIcon onClick={setModeToUpdate}>
                <img src='/img/pencil.svg' alt='update-icon' />
              </UpdateIcon>
              <DeleteIcon onClick={() => openDeleteMessageModal(messageId)}>
                <img src='/img/delete-bin.svg' alt='delete-icon' />
              </DeleteIcon>
            </ButtonContainer>
          }
        </MessageHeader>
        {
          mode === 'view' &&
          <Contents>{contents}</Contents>
        }
        {
          mode === 'update' &&
          <InputContainer>
            <Input value={input} onChange={inputHandler} />
            <InputBtnContainer>
              <Button onClick={setModeToView}>취소</Button>
              <Button onClick={updateHandler}>수정</Button>
            </InputBtnContainer>
          </InputContainer>
        }
      </Wrapper>
    </Container>
  );
};

export default Message;
