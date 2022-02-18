import fetchApi from '../utils/fetch';
import useLogin from './useLogin';

const useSignup = () => {
  const login = useLogin();
  const signup = async (userEmail, password, userName) => {
    console.log(userEmail, password, userName);
  
    const res = await fetchApi.post('/api/v1/signup', { userEmail, password, userName });
    if (res.status === 200) {
      // 회원가입 성공 시
      // 바로 로그인
      console.log('회원가입 성공');
    }
  
    login(userEmail, password);
  }

  return (userEmail, password, userName) => {
    signup(userEmail, password, userName);
  };
};

export default useSignup;
