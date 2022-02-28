import React from 'react';
import { useRecoilValue } from 'recoil';
import { currentChannelState } from '../../../stores/channel';
import userState from '../../../stores/user';
import PeopleIcon from '../PeopleIcon';
import { Title, Container, Wrapper, SettingIcon, ExitIcon } from './style';

const ChatHeader = ({ name, people, toggleUserList, openExitChannelModal, openUpdateChannelModal }) => {
  const user = useRecoilValue(userState);
  const channel = useRecoilValue(currentChannelState);
  return (
    <Container>
      <Wrapper>
        <Title>{name}</Title>
        {
          (user.userEmail === channel.ownerEmail) &&
          <SettingIcon onClick={openUpdateChannelModal}>
            <img src='/img/setting.svg' alt='setting-icon' />
          </SettingIcon>
        }
      </Wrapper>
      <Wrapper>
        <PeopleIcon num={people.length} toggleUserList={toggleUserList} />
        <ExitIcon onClick={openExitChannelModal}>
          <img src='/img/exit.svg' alt='exit-icon' />
        </ExitIcon>
      </Wrapper>
    </Container>
  );
};

export default ChatHeader;
