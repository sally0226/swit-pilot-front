import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './style';

const Header = () => {
  return (
    <Wrapper>
      <Link to='/'>
        <img src='https://swit.io/assets/images/home/common/logo.png' alt='logo' />
      </Link>
    </Wrapper>
  );

};

export default Header;
