import { atom } from 'recoil';

const userState = atom({
  key: 'userState',
  default: { id: -1 },
});

export default userState;
