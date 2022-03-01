import { useRecoilValue, useSetRecoilState } from 'recoil';
import { toast } from 'react-toastify';
import { currentChannelState } from '../stores/channel';
import fetchApi from '../utils/fetch';

const useUpdateChannel = () => {
  const channel = useRecoilValue(currentChannelState);
  const updateChannel = async (updateChannelName) => {
    const res = await fetchApi.patch(`/api/v1/auth/channel`, {
      channelId: channel.channelId,
      channelName: updateChannelName,
    });
    if (res.status !== 200) {
      toast.error('채널 이름 변경에 실패했습니다.');
    }
  };

  return (updateChannelName) => {
    updateChannel(updateChannelName);
  };
};

export default useUpdateChannel;
