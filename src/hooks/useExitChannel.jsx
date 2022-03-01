import { useRecoilState, useRecoilValue } from 'recoil';
import { channelListState, currentChannelState } from '../stores/channel';
import fetchApi from '../utils/fetch';
import useMoveChannel from './useMoveChannel';

const useExitChannel = () => {
  const channel = useRecoilValue(currentChannelState);
  const [myChannelList, setMyChannelList] = useRecoilState(channelListState);

  const moveChannel = useMoveChannel();
  const exit = async () => {
    const res = await fetchApi.delete(`/api/v1/auth/channel/user?channel_id=${channel.channelId}`);
    if (res.status === 200) {
      if (myChannelList.length > 1) {
        if (myChannelList[0].channelId !== channel.channelId) {
          moveChannel(myChannelList[0].channelId);
        } else {
          moveChannel(myChannelList[1].channelId);
        }
        setMyChannelList(cur => cur.filter(elem => elem.channelId !== channel.channelId));
      } else {
        moveChannel(-1);
      }
    }
  };

  return (() => {
    exit();
  });
};

export default useExitChannel;
