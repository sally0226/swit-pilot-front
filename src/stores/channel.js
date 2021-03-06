import { atom } from 'recoil';

export const channelListState = atom({
  key: 'channelListState',
  default: [],
});

export const currentChannelState = atom({
  key: 'currentChannelState',
  default: { channelId: -1, ownerEmail: '', channelName: '' }
});

export const channelPeopleListState = atom({
  key: 'channelPeopleListState',
  default: []
});

export const messageState = atom({
  key: 'messageState',
  default: []
});
