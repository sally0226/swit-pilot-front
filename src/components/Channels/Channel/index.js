import React from 'react';
import { Wrapper } from './style';

const Channel = ({ name, isHere }) => {
  return (
    <Wrapper isHere={isHere}>
      { name }
    </Wrapper>
  );
};

export default Channel;
