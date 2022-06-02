import axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://junehan-test.shop',
	headers: {
		'content-type': 'application/json;charset=UTF-8',
		accept: 'application/json,',
		'Access-Control-Allow-Origin': '*',
		token: '',
	},
});

const instances = axios.create({
	baseURL: 'https://yogoloper.shop',
	headers: {
		'content-type': 'application/json;charset=UTF-8',
		accept: 'application/json',
	},
});

axios.interceptors.response.use(
	(response) => {
		return response;
	},
	async (error) => {
		const {
			config,
			response: { status },
		} = error;
		if (status === 401) {
			if ((error.response.data.message = '')) {
				const originalRequest = config;
				const refreshToken = sessionStorage.getItem('refresh');
				const { data } = await axios.post(
					`https://junehan-test.shop/api/auth/refresh`,
					{
						refreshToken: `${sessionStorage.getItem('refresh')}`,
					}
				);
				const { accessToken: newAccessToken } = data;
				sessionStorage.setItem('token', newAccessToken);

				axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
				originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

				return axios(originalRequest);
			}
		}
		return Promise.reject(error);
	}
);

instance.interceptors.request.use(
	(config) => {
		const accessToken = sessionStorage.getItem('token');
		config.headers.common['X-AUTH-TOKEN'] = `${accessToken}`;
		console.log(accessToken);
		return config;
	},
	(err) => {
		console.log(err);
	}
);

const api = {
	// baseURL을 미리 지정해줬기 때문에 함수의 첫 번째 인자에 들어가는 url은
	// http://localhost:3000/ + 내가 작성한 url 즉 예시로
	// getPost함수에서는 instance.get('http://localhost:3000/posts')로 요청을 보내게 됩니다.
	// get과 delete의 경우 두 번째 인자에 데이터를 담아 보낼수 없기 때문에 서버에 데이터를 보낼경우 쿼리를 이용하여 보내주도록 합니다.

	loginAX: (id, password) =>
		instances.post('/login', { id: id, password: password }),
	signupAX: (id, password) =>
		instances.post('/signup', { id: id, password: password }),
	numberCheckAX: (number) => instances.get(`/checkNum?number=${number}`),
	logoutAX: () => instances.post('/logout'),
	likeChatAX: (roomId) => instances.post(`/api/rooms/likes/${roomId}`),
};

export default { api };
