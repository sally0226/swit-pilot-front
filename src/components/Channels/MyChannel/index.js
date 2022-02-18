import React from 'react';
import useMoveChannel from '../../../hooks/useMoveChannel';
import { Wrapper } from './style';

const MyChannel = ({ id, name, isHere }) => {
  const moveChannel = useMoveChannel();
  const clickHandler = () => {
    moveChannel(id);
  }
  return (
    <Wrapper isHere={isHere} onClick={clickHandler}>
      { name }
    </Wrapper>
  );
};

export default MyChannel;
