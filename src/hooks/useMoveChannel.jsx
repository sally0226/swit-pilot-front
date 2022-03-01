import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { channelListState, channelPeopleListState, currentChannelState, messageState } from '../stores/channel';
import userState from '../stores/user';
import fetchApi from '../utils/fetch';

const chat_dummy = {
  '1': [
    { id: 1, userEmail: 'alpha@gmail.com', contents: '아이우에오\n'.repeat(100), createdAt: '2022-02-15 14:33:33.123 +0900 KST'},
    { id: 2, userEmail: 'alpha@gmail.com', contents: '아이우에오', createdAt: '2022-02-15 14:34:33.123 +0900 KST'},
    { id: 3, userEmail: 'alpha@gmail.com', contents: '아이우에오', createdAt: '2022-02-15 14:35:33.123 +0900 KST'},
    { id: 4, userEmail: 'bravo@gmail.com', contents: '아이우에오', createdAt: '2022-02-15 14:36:33.123 +0900 KST'},
    { id: 5, userEmail: 'bravo@gmail.com', contents: '아이우에오', createdAt: '2022-02-15 14:38:33.123 +0900 KST'},
    { id: 6, userEmail: 'charlie@gmail.com', contents: '아이우에오', createdAt: '2022-02-15 14:40:50.12 +0900 KST'},
    { id: 7, userEmail: 'charlie@gmail.com', contents: '아이우에오', createdAt: '2022-02-15 14:40:51.53 +0900 KST'},
    { id: 8, userEmail: 'delta@gmail.com', contents: '아이우에오', createdAt: '2022-02-15 14:51:51.364 +0900 KST'},
    { id: 9, userEmail: 'echo@gmail.com', contents: '아이우에오', createdAt: '2022-02-15 14:52:20.23 +0900 KST'},
    { id: 10, userEmail: 'foxtrot@gmail.com', contents: '아이우에오', createdAt: '2022-02-15 14:59:30.346 +0900 KST'},
  ],
  '2': [
    { id: 1, userEmail: 'hi@gmail.com', contents: '아이우에오이', createdAt: '2022-02-16 15:24:30.235 +0900 KST'},
  ],
  '3': [],
  '4': [],
  '5': [],
};

const people_dummy = {
  '1': [
    { userEmail: '123@gmail.com', userName: 'LeeMir' },
    { userEmail: 'alpha@gmail.com', userName: 'Alpha' },
    { userEmail: 'bravo@gmail.com', userName: 'Bravo' },
    { userEmail: 'charlie@gmail.com', userName: 'Charlie' },
    { userEmail: 'delta@gmail.com', userName: 'Delta' },
    { userEmail: 'echo@gmail.com', userName: 'Echo' },
    { userEmail: 'foxtrot@gmail.com', userName: 'Foxtrot' },
  ],
  '2': [
    { userEmail: '123@gmail.com', userName: 'LeeMir' },
    { userEmail: 'hi@gmail.com', userName: 'Hi' },
  ],
  '3': [
    { userEmail: '123@gmail.com', userName: 'LeeMir' },
  ],
  '4': [

  ],
  '5': [

  ],
};

const useMoveChannel = () => {
  const user = useRecoilValue(userState);
  const [channel, setChannel] = useRecoilState(currentChannelState);
  const channelList = useRecoilValue(channelListState);
  const setMessageList = useSetRecoilState(messageState);
  const setChannelPeopleList = useSetRecoilState(channelPeopleListState);

  const resetChannelList = useResetRecoilState(channelListState);
  const resetChannel = useResetRecoilState(currentChannelState);

  const getChannelInfo = async (channelId) => {
    if (channelId === -1) { // 채널 연결 초기화 (소속된 채널 없게)
      resetChannelList();
      resetChannel();
      return;
    }

    const temp = { ...channel };
    
    /*
    const res = await fetchApi.get(`/api/channel?channelId=${channelId}`);
    if (res.status === 200) {
      const data = await res.json();
      // data에서 접속자 명단이랑 채널 정보 분리해서 recoil에 저장해야 함
      // socketApi로 접속 후 메시지 리스트도 불러와야 
      setChannel(data);
      setChannelPeopleList(data.memberList);
    }
    */

    temp.channelId = channelId;
    temp.channelName = channelList.find(channel => channel.channelId === channelId).channelName;
    temp.ownerEmail = channelList.find(channel => channel.channelId === channelId).ownerEmail;
    const messages = chat_dummy[`${channelId}`];
    const people = people_dummy[`${channelId}`];
    setChannel(temp);
    setMessageList(messages);
    setChannelPeopleList(people);
  }

  return (channelId) => {
    getChannelInfo(channelId);
  };
};

export default useMoveChannel;
