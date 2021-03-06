import React from 'react';
import { Wrapper } from './style';

const ProfileIcon = ({ userName, size=3 }) => {
  const firstWord = userName ? userName[0] : '';
  const colorOp = userName ? userName.length % 8 : 0;
  return (
    <Wrapper color={colorOp} size={size}>{firstWord}</Wrapper>
  );
};

export default ProfileIcon;
