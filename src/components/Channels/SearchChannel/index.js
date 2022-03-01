import React from 'react';
import useGetChannelList from '../../../hooks/useGetChannelList';
import { Container, Description, Wrapper } from './style';

const Channel = ({ name, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <span>{name}</span>
    </Wrapper>
  );
};

const SearchChannel = ({ joinChannel }) => {
  const channels = useGetChannelList();
  return (
    <>
      <Description>참여 가능한 채널</Description>
      <Container>
        {
          channels.map((channel) =>
            <Channel
              key={channel.channelId}
              name={channel.channelName}
              onClick={() => joinChannel(channel.channelId)}
            />
          )
        }
      </Container>
    </>
  );
};

export default SearchChannel;
