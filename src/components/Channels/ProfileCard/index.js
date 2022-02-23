import React from 'react';
import { useRecoilValue } from 'recoil';
import userState from '../../../stores/user';
import ProfileIcon from '../../ProfileIcon';
import { EmailSpan, NameSpan, Wrapper } from './style';

const ProfileCard = () => {
  const user = useRecoilValue(userState);
  return (
    <Wrapper>
      <ProfileIcon userName={user.userName} size={5} />
      <NameSpan>{user.userName}</NameSpan>
      <EmailSpan>{user.userEmail}</EmailSpan>
    </Wrapper>
  );
};

export default ProfileCard;
