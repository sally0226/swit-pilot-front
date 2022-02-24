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
  
    const res = await fetchApi.get(`/api/v1/auth/channel/user`);
    if (res.status === 200) {
      // 데이터 가져오기 성공 시
      const channels = await res.json();
      console.log(channels.channel);
      setChannelList(channels.channel);
      console.log('내 채널 목록 가져오기 성공');

    }
    // setChannelList(channel_dummy)
  }

  useEffect(() => {
    if (channelList.length !== 0 && currentChannelInfo.channelId === -1) {
      moveChannel(channelList[0].channelId);
    }
  }, [channelList]);

  return (() => {
    getChannelList();
  });
};

export default useGetMyChannelList;
