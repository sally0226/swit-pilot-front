import React from 'react';
import { useRecoilValue } from 'recoil';
import userState from '../../stores/user';
import Profile from '../Profile';
import { Wrapper } from './style';

const Header = () => {
  const user = useRecoilValue(userState);

  return (
    <Wrapper>
      <img src='https://swit.io/assets/images/home/common/logo.png' alt='logo' />
      <Profile user_name={user.name} size={2.5} />
    </Wrapper>
  );

};

export default Header;
