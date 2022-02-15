import React from 'react';
import { Wrapper } from './style';

const People = ({ num }) => {
  return (
    <Wrapper>
      <img src='/img/people.svg' alt='people-icon' />
      { num }
    </Wrapper>
  );
};

export default People;
