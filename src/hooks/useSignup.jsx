import fetchApi from '../utils/fetch';
import useLogin from './useLogin';

const useSignup = () => {
  const login = useLogin();
  const signup = async (id, pw, name) => {
    console.log(id, pw, name);
    /*
    const res = await fetchApi.post('/api/v1/signup', { id, pw, name });
    if (res.status === 201) {
      // 회원가입 성공 시
      // 바로 로그인
      console.log('로그인 성공');
    }
    */
    login(id, pw);
  }

  return (id, pw, name) => {
    signup(id, pw, name);
  };
};

export default useSignup;
