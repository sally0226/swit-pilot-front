import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const getCookie = (name) => {
    console.log(cookies.getAll());
	return cookies.get(name);
};

export const removeCookie = (name) => {
	return cookies.remove(name);
};