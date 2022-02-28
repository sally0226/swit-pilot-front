import { toast } from 'react-toastify';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { currentChannelState, messageState } from '../stores/channel';
import userState from '../stores/user';

const useSendMessage = () => {
  const channel = useRecoilValue(currentChannelState);

  const [messages, setMessages] = useRecoilState(messageState); // 로컬용
  const user = useRecoilValue(userState); // 로컬용

  const sendMessage = (message) => {
    /*
    const res = await fetchApi.post('/api/v1/auth/message', { channelId: channel.channelId , contents: message });
    if (res.status !== 200) {
      // 성공 시에는 어차피 소켓에서 메시지 추가됐다고 보낼거라 따로 처리할 게 없음
      // 실패 시
      toast.error('메시지 전송 실패');
    }
    */
    
    // 아래는 로컬용
    const dateObj = new Date();
    const date = `${dateObj.getFullYear()}-${dateObj.getMonth() + 1}-${dateObj.getDate()}`;
    const time = `${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}.${dateObj.getMilliseconds()} +0900 KST`;
    const newMessage = {
      id: messages.length + 1,
      channelId: channel.channelId,
      contents: message,
      userEmail: user.userEmail,
      createdAt: `${date} ${time}`
    };
    setMessages((cur) => [...cur, newMessage]);
  };

  return (message) => {
    sendMessage(message);
  };
};

export default useSendMessage;
