import httpRequest from '../utils/httpRequest';
export const registerUser = async ({ name, email, password }) => {
	try {
		const res = await httpRequest.post('/api/auth/register', {
			name,
			email,
			password,
		});

		return res.data;
	} catch (error) {
		return { error: error.response?.data?.error || 'Đăng ký thất bại' };
	}
};
