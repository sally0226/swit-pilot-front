import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { channelListState, currentChannelState, messageState } from '../stores/channel';
import userState from '../stores/user';
import fetchApi from '../utils/fetch';

const chat_dummy = {
  '1': [
    { id: 1, name: 'Alpha', contents: '아이우에오\n'.repeat(100), createdAt: '2022-02-15 14:33:33'},
    { id: 2, name: 'Alpha', contents: '아이우에오', createdAt: '2022-02-15 14:34:33'},
    { id: 3, name: 'Alpha', contents: '아이우에오', createdAt: '2022-02-15 14:35:33'},
    { id: 4, name: 'Bravo', contents: '아이우에오', createdAt: '2022-02-15 14:36:33'},
    { id: 5, name: 'Bravo', contents: '아이우에오', createdAt: '2022-02-15 14:38:33'},
    { id: 6, name: 'Charlie', contents: '아이우에오', createdAt: '2022-02-15 14:40:50'},
    { id: 7, name: 'Charlie', contents: '아이우에오', createdAt: '2022-02-15 14:40:51'},
    { id: 8, name: 'Delta', contents: '아이우에오', createdAt: '2022-02-15 14:51:51'},
    { id: 9, name: 'Echo', contents: '아이우에오', createdAt: '2022-02-15 14:52:20'},
    { id: 10, name: 'Foxtrot', contents: '아이우에오', createdAt: '2022-02-15 14:59:30'},
  ],
  '2': [
    { id: 1, name: 'Hi', contents: '아이우에오이', createdAt: '2022-02-16 15:24:30'},
  ],
  '3': []
};

const useMoveChannel = () => {
  const user = useRecoilValue(userState);
  const [channel, setChannel] = useRecoilState(currentChannelState);
  const channelList = useRecoilValue(channelListState);
  const setMessageList = useSetRecoilState(messageState);

  const getChannelInfo = async (channelId) => {
    const temp = { ...channel };
    /*
    const res = await fetchApi.get(`/api/channel?channelId=${channelId}`);
    if (res.status === 200) {
      const data = await res.json();
      // data에서 접속자 명단이랑 채널 정보 분리해서 recoil에 저장해야 함
      // socketApi로 접속 후 메시지 리스트도 불러와야 함
    }
    */
    temp.channelId = channelId;
    temp.channelName = channelList.find(channel => channel.channelId === channelId).channelName;
    const messages = chat_dummy[`${channelId}`];
    
    setChannel(temp);
    setMessageList(messages);
  }

  return (channelId) => {
    getChannelInfo(channelId);
  };
};

export default useMoveChannel;
