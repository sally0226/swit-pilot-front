import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import userState from '../stores/user';
import fetchApi from '../utils/fetch';

const useGoogleLogin = () => {
  const login = async () => {
    console.log('google login');
    
    window.location.href = `${process.env.REACT_APP_SERVER ?? 'http://localhost:8081'}/oauth2/google/login`;
    
  }

  return () => {
    login();
  };
};

export default useGoogleLogin;
