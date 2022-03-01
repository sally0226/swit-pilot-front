import { useRecoilState, useSetRecoilState } from 'recoil';
import { channelListState, currentChannelState } from '../stores/channel';
import fetchApi from '../utils/fetch';

const useUpdateChannel = () => {
  const [channel, setChannel] = useRecoilState(currentChannelState);
  const setChannelList = useSetRecoilState(channelListState);
  const updateChannel = async (updateChannelName) => {
    /*
    const res = await fetchApi.patch(`/api/v1/auth/channel?channel_id=${channel.channelId}&channel_name=${updateChannelName}`);
    if (res.status === 200) {
      setChannel((cur) => {...cur, channelName: updateChannelName});
      setChannelList() // 얘도 찾아서 바꿔줘야함
    }
    */
  };

  return (updateChannelName) => {
    updateChannel(updateChannelName);
  };
};

export default useUpdateChannel;
