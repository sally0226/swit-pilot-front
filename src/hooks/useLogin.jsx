import { useNavigate } from 'react-router-dom';
import fetchApi from '../utils/fetch';
import useCheckLogin from './useCheckLogin';

const useLogin = () => {
  const navigate = useNavigate();
  const checkLogin = useCheckLogin()
  const login = async (userEmail, password) => {
    const res = await fetchApi.post('/api/v1/signin', { userEmail, password });
    if (res.status === 200) {
      const data = await res.json();
      localStorage.setItem('accessToken', data.accessToken);
      checkLogin();
      navigate('/main');
    }
  }

  return async (userEmail, password) => {
    await login(userEmail, password);
  };
};

export default useLogin;
