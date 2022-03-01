import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { channelListState, channelPeopleListState, currentChannelState } from '../stores/channel';
import fetchApi from '../utils/fetch';

const useMoveChannel = () => {
  const setChannel = useSetRecoilState(currentChannelState);
  const setChannelPeopleList = useSetRecoilState(channelPeopleListState);

  const resetChannelList = useResetRecoilState(channelListState);
  const resetChannel = useResetRecoilState(currentChannelState);

  const getChannelInfo = async (channelId) => {
    if (channelId === -1) {
      resetChannelList();
      resetChannel();
      return;
    }

    const res = await fetchApi.get(`/api/v1/auth/channel?channel_id=${channelId}`);
    if (res.status === 200) {
      const data = await res.json();
      setChannel(data);
      setChannelPeopleList(data.memberList);
    }
  }

  return (channelId) => {
    getChannelInfo(channelId);
  };
};

export default useMoveChannel;
