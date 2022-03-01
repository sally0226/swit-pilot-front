import fetchApi from '../utils/fetch';
import useGetMyChannelList from './useGetMyChannelList';
import useMoveChannel from './useMoveChannel';
import { toast } from 'react-toastify';

const useCreateChannel = () => {
  const getMyChannelList = useGetMyChannelList();
  const moveChannel = useMoveChannel();
  const CreateChannel = async (channelName) => {
    if (!channelName || channelName.length === 0) {
      toast.error('비어있는 이름의 채널은 생성할 수 없습니다!');
    }

    const res = await fetchApi.post('/api/v1/auth/channel', { channelName });
    if (res.status === 200) {
      const data = await res.json();
      getMyChannelList();
      moveChannel(data.channelId);
    }
  }

  return (channelName) => {
    CreateChannel(channelName);
  };
};

export default useCreateChannel;
