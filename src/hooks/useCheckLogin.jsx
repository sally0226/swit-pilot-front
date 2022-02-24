import { useSetRecoilState } from 'recoil'
import { toast } from 'react-toastify';
import userState from '../stores/user'
import fetchApi from '../utils/fetch';
import useLogout from './useLogout';

const useCheckLogin = () => {
	const setUser = useSetRecoilState(userState);
	const logout = useLogout();
	const checkLogin = async () => {
		try {
			const res = await fetchApi.get('/api/v1/auth/user');
			const data = await res.json();
			console.log(data);
			if (res.status === 200) {
				setUser(data);
			}
			if (res.status == 401) {
				throw new Error();
			}
		} catch (err) {
			toast.error('다시 로그인해주세요');
			logout();
		}
	};

	return () => {
		checkLogin();
	}
};

export default useCheckLogin;
