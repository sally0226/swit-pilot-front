import fetchApi from '../utils/fetch';

const useUpdateMessage = () => {
  const update = async (messageId, contents) => {
    //const res = await fetchApi.patch('/api/v1/auth/message', { messageId, contents });
    console.log(`${messageId}의 내용 수정: ${contents}`);
  };
  
  return ((messageId, contents) => {
    update(messageId, contents);
  });
};

export default useUpdateMessage;
