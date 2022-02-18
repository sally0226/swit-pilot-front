import { atom } from 'recoil';

const userState = atom({
  key: 'userState',
  default: { userEmail: '123@gmail.com', userName: 'LeeMir' },
});

export default userState;
