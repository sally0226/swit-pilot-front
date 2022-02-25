import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import userState from '../stores/user';
import fetchApi from '../utils/fetch';

const useLogin = () => {
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();

  const login = async (userEmail, password) => {
    console.log(userEmail, password);
    /*
    const res = await fetchApi.post('/api/v1/signin', { userEmail, password });
    if (res.status === 200) {
      // 로그인 성공 시
      // 로그인 성공 메시지
      // 사용자 정보 상태에 저장
      // 메인 페이지로 redirect
      const data = await res.json();
      localStorage.setItem('accessToken', data.accessToken);
      navigate('/main');
      console.log('로그인 성공');
    }
    */
    navigate('/main');
  }

  return (userEmail, password) => {
    login(userEmail, password);
  };
};

export default useLogin;
