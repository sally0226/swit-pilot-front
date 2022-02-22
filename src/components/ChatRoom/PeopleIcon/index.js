import React from 'react';
import { Wrapper } from './style';

const PeopleIcon = ({ num, toggleUserList }) => {
  return (
    <Wrapper onClick={toggleUserList}>
      <img src='/img/people.svg' alt='people-icon' />
      { num }
    </Wrapper>
  );
};

export default PeopleIcon;
