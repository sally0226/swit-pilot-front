import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { channelListState } from '../stores/channel';
import fetchApi from '../utils/fetch';

const useGetChannelList = () => {
  const [channelList, setChannelList] = useState([]);
  const myChannelList = useRecoilValue(channelListState);

  const getChannelList = async () => {
    const res = await fetchApi.get(`/api/v1/auth/channel/list`);
    if (res.status === 200) {
      const channels = await res.json();
      const myChannelIDList = myChannelList.map((channel) => channel.channelId);
      const chs = channels.channel.filter((channel) => !myChannelIDList.includes(channel.channelId));
      setChannelList(chs);
    }
  }

  useEffect(() => {
    getChannelList();
  }, []);

  return channelList;
};

export default useGetChannelList;
