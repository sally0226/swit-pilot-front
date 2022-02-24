import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { channelListState } from '../stores/channel';
import userState from '../stores/user';
import fetchApi from '../utils/fetch';
import useGetMyChannelList from './useGetMyChannelList';
import useMoveChannel from './useMoveChannel';

const useCreateChannel = () => {
  const user = useRecoilValue(userState); // 임시
  const [channelList, setChannelList] = useRecoilState(channelListState); // 임시

  const [channelId, setChannelId] = useState('');
  const getMyChannelList = useGetMyChannelList();
  const moveChannel = useMoveChannel();
  const CreateChannel = async (channelName) => {
    if (!channelName || channelName.length === 0) {
      alert('비어있는 이름의 채널은 생성할 수 없습니다!');
    }
    
    const res = await fetchApi.post('/api/v1/auth/channel', { channelName });
    if (res.status === 200) {
      const data = await res.json();
      getMyChannelList(); // 채널 리스트 갱신
      moveChannel(data.channelId); // 채널로 이동
    }
  }

  useEffect(() => {
    if (channelId) {
      moveChannel(channelId);
    }
  }, [channelList]);

  return (channelName) => {
    CreateChannel(channelName);
  };
};

export default useCreateChannel;
