import fetchApi from '../utils/fetch';
import {  useRecoilState } from 'recoil';
import { messageState } from '../stores/channel';
const useDeleteMessage = () => {
  const deleteMessage = async (messageId) => {
    const res = await fetchApi.delete(`/api/v1/auth/message?message_id=${messageId}`);
  };
  
  return ((messageId) => {
    deleteMessage(messageId);
  });
};

export default useDeleteMessage;
