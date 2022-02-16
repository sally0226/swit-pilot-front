import { atom } from 'recoil';

const userState = atom({
  key: 'userState',
  default: { id: '123@gmail.com', name: 'LeeMir' },
});

export default userState;
