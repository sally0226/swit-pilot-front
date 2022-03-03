import { useEffect } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { channelListState, currentChannelState } from '../stores/channel';
import fetchApi from '../utils/fetch';
import useMoveChannel from './useMoveChannel';

const useGetMyChannelList = () => {
  const setChannelList = useSetRecoilState(channelListState);
  const moveChannel = useMoveChannel();
  const currentChannelInfo = useRecoilValue(currentChannelState);
  const getChannelList = async () => {
    const res = await fetchApi.get('/api/v1/auth/channel/user');
    if (res.status === 200) {
      const channels = await res.json();
      setChannelList(channels.channel);
      if (channels.channel.length !== 0 && currentChannelInfo.channelId === -1) {
        moveChannel(channels.channel[0].channelId);
      }
    }
  }

  return (() => {
    getChannelList();
  });
};

export default useGetMyChannelList;