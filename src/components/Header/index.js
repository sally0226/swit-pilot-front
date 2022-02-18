import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import userState from '../../stores/user';
import Profile from '../Profile';
import { Wrapper } from './style';

const Header = () => {
  const user = useRecoilValue(userState);
  console.log(user)
  return (
    <Wrapper>
      <Link to='/'>
        <img src='https://swit.io/assets/images/home/common/logo.png' alt='logo' />
      </Link>
      <Profile user_name={user.userName} size={2.5} />
    </Wrapper>
  );

};

export default Header;
