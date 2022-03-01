import fetchApi from '../utils/fetch';
import useLogin from './useLogin';
import { toast } from 'react-toastify';

const useSignup = () => {
  const login = useLogin();
  const signup = async (userEmail, password, userName) => {
  
    const res = await fetchApi.post('/api/v1/signup', { userEmail, password, userName });
    if (res.status === 200) {
      toast.success('회원가입 성공');
    }
  
    await login(userEmail, password);
  }

  return (userEmail, password, userName) => {
    signup(userEmail, password, userName);
  };
};

export default useSignup;
