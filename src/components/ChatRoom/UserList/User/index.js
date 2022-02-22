import React from 'react';
import { useRecoilValue } from 'recoil';
import { currentChannelState } from '../../../../stores/channel';
import ProfileIcon from '../../../ProfileIcon';
import { Wrapper } from './style';

const User = ({ user }) => {
  const currentChannel = useRecoilValue(currentChannelState);
  const ownerEmail = currentChannel.ownerEmail;
  const isOwner = user.id === ownerEmail;
  return (
    <Wrapper>
      <ProfileIcon user_name={user.name} size={2}/>
      {user.name}
      {isOwner && <img src='/img/crown.svg' alt='owner-icon' />}
    </Wrapper>
  );
};

export default User;
