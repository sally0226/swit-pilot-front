const baseUrl = 'http://localhost:8081';

const fetchApi = {
	get: (path) =>
		fetch(`${baseUrl}${path}`, {
			method: 'GET',
			mode: 'cors',
			credentials: 'include'
		}),

	post: (path, data) =>
		fetch(`${baseUrl}${path}`, {
			method: 'POST',
			mode: 'cors',
			credentials: 'include',
			body: JSON.stringify(data),
		}),

	put: (path, data) =>
		fetch(`${baseUrl}${path}`, {
			method: 'PUT',
			mode: 'cors',
			credentials: 'include',
			body: JSON.stringify(data),
		}),

	patch: (path, data) =>
		fetch(`${baseUrl}${path}`, {
			method: 'PATCH',
			mode: 'cors',
			credentials: 'include',
			body: JSON.stringify(data),
		}),

	delete: (path, data) =>
		fetch(`${baseUrl}${path}`, {
			method: 'DELETE',
			mode: 'cors',
			credentials: 'include',
			body: JSON.stringify(data),
		}),
};

export default fetchApi;