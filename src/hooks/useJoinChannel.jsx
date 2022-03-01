import fetchApi from '../utils/fetch';
import useGetMyChannelList from './useGetMyChannelList';
import useMoveChannel from './useMoveChannel';

const useJoinChannel = () => {
  const getMyChannelList = useGetMyChannelList();
  const moveChannel = useMoveChannel();
  const joinChannel = async (channelId) => {
    const res = await fetchApi.post(`/api/v1/auth/channel/user?channel_id=${channelId}`);
    if (res.status === 200) {
      getMyChannelList();
      moveChannel(channelId);
    }
  };
  
  return ((channelId) => {
    joinChannel(channelId);
  }); 
};

export default useJoinChannel;
