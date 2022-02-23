import React from 'react';
import { useRecoilValue } from 'recoil';
import { currentChannelState } from '../../../../stores/channel';
import ProfileIcon from '../../../ProfileIcon';
import { Wrapper } from './style';

const User = ({ user }) => {
  const currentChannel = useRecoilValue(currentChannelState);
  const ownerEmail = currentChannel.ownerEmail;
  const isOwner = user.userEmail === ownerEmail;
  return (
    <Wrapper>
      <ProfileIcon userName={user.userName} size={2}/>
      {user.userName}
      {isOwner && <img src='/img/crown.svg' alt='owner-icon' />}
    </Wrapper>
  );
};

export default User;
