import { signIn } from 'next-auth/react';
import { useDispatch, useSelector } from 'react-redux';
import {
	closeLoginModal,
	openRegisterModal,
} from '../redux/features/modalSlice';
import { useState } from 'react';
const LoginModal = () => {
	const [error, setError] = useState('');
	const dispatch = useDispatch();

	const isOpen = useSelector((state) => state.modal.isLoginModalOpen);

	if (!isOpen) return null;
	const handleCredentialsLogin = async (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;

		const result = await signIn('credentials', {
			email,
			password,
			redirect: false, // Tắt chuyển hướng tự động
		});

		if (result?.error) {
			setError('Email hoặc mật khẩu không chính xác');
		} else {
			dispatch(closeLoginModal());
		}
	};

	return (
		<div
			className='fixed inset-0 bg-black/35 bg-opacity-50 flex justify-center items-center z-50'
			onClick={() => dispatch(closeLoginModal())}
		>
			<div
				className='bg-white p-12 rounded-lg shadow-lg max-w-lg w-full relative'
				onClick={(e) => e.stopPropagation()}
			>
				{/* Nút đóng modal */}
				<button
					onClick={() => dispatch(closeLoginModal())}
					className='absolute top-3 right-3 text-gray-500 hover:text-black'
				>
					✕
				</button>

				{/* Tiêu đề */}
				<h2 className='text-xl font-semibold text-center text-gray-800'>
					Đăng nhập
				</h2>
				<p className='mt-2 text-sm text-gray-600 text-center'>
					Chọn phương thức đăng nhập
				</p>

				{/* Đăng nhập bằng Google */}
				<button
					onClick={() => signIn('google')}
					className='w-full flex items-center justify-center gap-2 bg-red-500 text-white px-4 py-2 rounded-md mt-4'
				>
					<img
						src='https://www.svgrepo.com/show/475656/google-color.svg'
						alt='Google'
						className='h-5 w-5'
					/>
					Đăng nhập với Google
				</button>

				{/* Dấu ngăn cách */}
				<div className='flex items-center gap-2 py-4 text-sm text-gray-600'>
					<div className='h-px w-full bg-gray-300'></div>
					HOẶC
					<div className='h-px w-full bg-gray-300'></div>
				</div>

				{/* Đăng nhập bằng Email/Password */}
				<form onSubmit={handleCredentialsLogin} className='space-y-3'>
					{error && <p className='text-red-500 text-sm'>{error}</p>}
					<input
						name='email'
						type='email'
						required
						placeholder='Email'
						className='w-full border text-black border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none'
					/>
					<input
						name='password'
						type='password'
						required
						placeholder='Mật khẩu'
						className='w-full border text-black border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none'
					/>
					<button
						type='submit'
						className='w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700'
					>
						Đăng nhập
					</button>
				</form>

				{/* Liên kết Quên mật khẩu và Đăng ký */}
				<div className='mt-4 text-center text-sm text-gray-600'>
					<a href='/forgot-password' className='text-blue-600 hover:underline'>
						Quên mật khẩu?
					</a>
					<br />
					Chưa có tài khoản?{' '}
					<button
						onClick={() => {
							dispatch(openRegisterModal());
							dispatch(closeLoginModal());
						}}
						className='text-blue-600 hover:underline'
					>
						Đăng ký ngay
					</button>
				</div>
			</div>
		</div>
	);
};

export default LoginModal;
