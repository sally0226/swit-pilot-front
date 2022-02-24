// import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const useLogout = () => {
    // const navigate = useNavigate(); // useNavigate() may be used only in the context of a <Router> component.에러 발생
    return () => {
        // navigate('/');
        toast.success('로그아웃 성공');
    };
};

export default useLogout;