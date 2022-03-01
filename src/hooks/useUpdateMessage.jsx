import fetchApi from '../utils/fetch';
import { toast } from 'react-toastify';

const useUpdateMessage = () => {
  const update = async (messageId, contents) => {
    const res = await fetchApi.patch('/api/v1/auth/message', { messageId, contents });
    if (res.status !== 200) {
      toast.error(`수정 실패: ${res.status}`);
    }
  };

  return ((messageId, contents) => {
    update(messageId, contents);
  });
};

export default useUpdateMessage;
