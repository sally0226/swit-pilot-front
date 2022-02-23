import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { channelListState } from '../stores/channel';
import userState from '../stores/user';
import fetchApi from '../utils/fetch';
import useMoveChannel from './useMoveChannel';

const channel_dummy = [
  { channelId: '1', channelName: 'Backend', ownerEmail: '123@gmail.com' },
  { channelId: '2', channelName: 'Frontend', ownerEmail: '123@gmail.com' },
  { channelId: '3', channelName: 'General', ownerEmail: '123@gmail.com' },
];

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
  
    // setChannelList(channel_dummy);
  }

  useEffect(() => {
    getChannelList();
  }, []);

  useEffect(() => {
    if (channelList.length !== 0) {
      moveChannel(channel_dummy[0].channelId);
    }
  }, [channelList]);

  return channelList;
};

export default useGetMyChannelList;
