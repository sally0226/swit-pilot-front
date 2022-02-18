import React from 'react';
import useGetChannelList from '../../../hooks/useGetChannelList';
import { Container, Description, Wrapper } from './style';

const Channel = ({ name }) => {
  return (
    <Wrapper>
      <span>{name}</span>
    </Wrapper>
  );
};

const SearchChannel = () => {
  const channels = useGetChannelList();
  return (
    <>
      <Description>참여 가능한 채널</Description>
      <Container>
        {channels.map((channel) => <Channel key={channel.channelId} name={channel.channelName} />)}
      </Container>
    </>
  );
};

export default SearchChannel;
