import React from 'react';
import { useRecoilValue } from 'recoil';
import { channelPeopleListState } from '../../../stores/channel';
import { CloseIcon, Container, Header, Wrapper } from './style';
import User from './User';

const UserList = ({ closeUserList }) => {
  const userList = useRecoilValue(channelPeopleListState);
  return (
    <Container>
      <Header>
        멤버 목록
        <CloseIcon onClick={closeUserList}>
          <img src='/img/cancel.svg' alt='close-icon' />
        </CloseIcon>
      </Header>
      <Wrapper>
        {
          userList.map((user) => <User key={user.id} user={user} />)
        }
      </Wrapper>
    </Container>
  );
};

export default UserList;
