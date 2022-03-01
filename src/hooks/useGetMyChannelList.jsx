import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { channelListState, currentChannelState } from '../stores/channel';
import fetchApi from '../utils/fetch';
import useMoveChannel from './useMoveChannel';

const useGetMyChannelList = () => {
  const [channelList, setChannelList] = useRecoilState(channelListState);
  const moveChannel = useMoveChannel();
  const currentChannelInfo = useRecoilValue(currentChannelState);
  const getChannelList = async () => {
    const res = await fetchApi.get('/api/v1/auth/channel/user');
    if (res.status === 200) {
      const channels = await res.json();
      setChannelList(channels.channel);
    }
  }

  useEffect(() => {
    if (channelList.length !== 0 && currentChannelInfo.channelId == -1) {
      moveChannel(channelList[0].channelId);
    }
  }, [channelList]);

  return (() => {
    getChannelList();
  });
};

export default useGetMyChannelList;