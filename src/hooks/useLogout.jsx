import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const useLogout = () => {
    const navigate = useNavigate();
    const logout = () => {
        // localStorage accessToken 비우기
        // 전역 상태들 초기화하기
        navigate('/');
    };
    return () => {
        logout();
        toast.success('로그아웃 성공');
    };
};

export default useLogout;