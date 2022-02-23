import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { channelListState } from '../stores/channel';
import userState from '../stores/user';
import fetchApi from '../utils/fetch';
import useMoveChannel from './useMoveChannel';

const useGetMyChannelList = () => {
  const [channelList, setChannelList] = useRecoilState(channelListState);
  const user = useRecoilValue(userState);
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

  }

  useEffect(() => {
    getChannelList();
  }, []);

  useEffect(() => {
    if (channelList.length !== 0) {
      moveChannel(channelList[0].channelId);
    }
  }, [channelList]);

  return channelList;
};

export default useGetMyChannelList;
