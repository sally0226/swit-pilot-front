import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { channelListState } from '../stores/channel';
import fetchApi from '../utils/fetch';
import useMoveChannel from './useMoveChannel';

const useGetMyChannelList = () => {
  const [channelList, setChannelList] = useRecoilState(channelListState);
  const moveChannel = useMoveChannel();

  const getChannelList = async () => {
  
    const res = await fetchApi.get(`/api/v1/auth/channel/user`);
    if (res.status === 200) {
      // 데이터 가져오기 성공 시
      const channels = await res.json();
      console.log(channels.channel)
      setChannelList(channels.channel);
      console.log('로그인 성공');
    }
    // setChannelList(channel_dummy)
  }

  useEffect(() => {
    if (channelList.length !== 0) {
      moveChannel(channelList[0].channelId);
    }
  }, [channelList]);

  return (() => {
    getChannelList();
  });
};

export default useGetMyChannelList;
