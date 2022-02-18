const baseUrl = 'http://localhost:8081';

const header = {
	'Content-Type': 'application/json',
	Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
};

const getHeader = () => {
	header.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
	return header;
};

const fetchApi = {
	get: (path) =>
		fetch(`${baseUrl}${path}`, {
			method: 'GET',
			mode: 'cors',
			credentials: 'include',
			headers: getHeader(),
		}),

	post: (path, data) =>
		fetch(`${baseUrl}${path}`, {
			method: 'POST',
			mode: 'cors',
			credentials: 'include',
			body: JSON.stringify(data),
			headers: getHeader(),
		}),

	put: (path, data) =>
		fetch(`${baseUrl}${path}`, {
			method: 'PUT',
			mode: 'cors',
			credentials: 'include',
			body: JSON.stringify(data),
			headers: getHeader(),
		}),

	patch: (path, data) =>
		fetch(`${baseUrl}${path}`, {
			method: 'PATCH',
			mode: 'cors',
			credentials: 'include',
			body: JSON.stringify(data),
			headers: getHeader(),
		}),

	delete: (path, data) =>
		fetch(`${baseUrl}${path}`, {
			method: 'DELETE',
			mode: 'cors',
			credentials: 'include',
			body: JSON.stringify(data),
			headers: getHeader(),
		}),
};

export default fetchApi;