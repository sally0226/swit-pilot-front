import { toast } from 'react-toastify';
import { useRecoilValue} from 'recoil';
import { currentChannelState } from '../stores/channel';
import fetchApi from '../utils/fetch';

const useSendMessage = () => {
  const channel = useRecoilValue(currentChannelState);
  const sendMessage = async (message) => {
    const res = await fetchApi.post('/api/v1/auth/message', { channelId: channel.channelId , contents: message });
    if (res.status !== 200) {
      toast.error('메시지 전송 실패');
    }
  };

  return (message) => {
    sendMessage(message);
  };
};

export default useSendMessage;
