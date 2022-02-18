import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { channelListState } from '../stores/channel';
import fetchApi from '../utils/fetch';

const channel_dummy = [
  { channelId: '1', channelName: 'Backend' },
  { channelId: '2', channelName: 'Frontend' },
  { channelId: '3', channelName: 'General' },
  { channelId: '4', channelName: 'DevOps' },
  { channelId: '5', channelName: 'Computer Science' },
  { channelId: '6', channelName: 'Study' },
  { channelId: '7', channelName: 'Dev Log' },
  { channelId: '8', channelName: 'Blog' },
  { channelId: '9', channelName: 'Huney Butter Tip' },
  { channelId: '10', channelName: 'foo' },
  { channelId: '11', channelName: 'bar' },
  { channelId: '12', channelName: 'baz' },
];

const useGetChannelList = () => {
  const [channelList, setChannelList] = useState([]);
  const myChannelList = useRecoilValue(channelListState);

  const getChannelList = async () => {
    /*
    const res = await fetchApi.get(`/api/channels?email=${user.email}`);
    if (res.status === 200) {
      // 데이터 가져오기 성공 시
      const channels = await res.json();
      setChannelList(channels);
      console.log('로그인 성공');
    }
    */

    const myChannelIDList = myChannelList.map((channel) => channel.channelId);
    const channels = channel_dummy.filter((channel) => !myChannelIDList.includes(channel.channelId));
    setChannelList(channels);
  }

  useEffect(() => {
    getChannelList();
  }, []);

  return channelList;
};

export default useGetChannelList;
