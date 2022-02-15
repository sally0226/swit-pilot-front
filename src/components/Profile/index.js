import React from 'react';
import { Wrapper } from './style';

const Profile = ({ user_name, size=3 }) => {
  const firstWord = user_name[0];
  const colorOp = user_name.length % 8;
  return (
    <Wrapper color={colorOp} size={size}>{firstWord}</Wrapper>
  );
};

export default Profile;
