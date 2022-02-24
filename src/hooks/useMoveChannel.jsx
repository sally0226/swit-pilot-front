import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { channelListState, channelPeopleListState, currentChannelState, messageState } from '../stores/channel';
import userState from '../stores/user';
import fetchApi from '../utils/fetch';

const useMoveChannel = () => {
  const user = useRecoilValue(userState);
  const [channel, setChannel] = useRecoilState(currentChannelState);
  const channelList = useRecoilValue(channelListState);
  const setMessageList = useSetRecoilState(messageState);
  const setChannelPeopleList = useSetRecoilState(channelPeopleListState);

  const getChannelInfo = async (channelId) => {
    const temp = { ...channel };
    
    const res = await fetchApi.get(`/api/v1/auth/channel?channel_id=${channelId}`);
    if (res.status === 200) {
      const data = await res.json();
      // data에서 접속자 명단이랑 채널 정보 분리해서 recoil에 저장해야 함
      // socketApi로 접속 후 메시지 리스트도 불러와야 
      setChannel(data)
      setChannelPeopleList(data.memberList)
    }
  
    temp.channelId = channelId;
    temp.channelName = channelList.find(channel => channel.channelId === channelId).channelName;
    temp.ownerEmail = channelList.find(channel => channel.channelId === channelId).ownerEmail;
  }

  return (channelId) => {
    getChannelInfo(channelId);
  };
};

export default useMoveChannel;
