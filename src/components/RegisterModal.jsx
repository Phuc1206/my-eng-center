'use client';
import { useDispatch, useSelector } from 'react-redux';
import {
	openLoginModal,
	closeRegisterModal,
} from '../redux/features/modalSlice';
import { registerUser } from '../services/authService';
import { useState } from 'react';

export default function RegisterModal() {
	const dispatch = useDispatch();
	const isOpen = useSelector((state) => state.modal.isRegisterModalOpen);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	// Nếu modal không mở thì không render gì
	if (!isOpen) return null;

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError(null);

		const formData = new FormData(e.target);
		const res = await registerUser({
			name: formData.get('name'),
			email: formData.get('email'),
			password: formData.get('password'),
		});

		if (res.success) {
			// Đóng modal đăng ký và mở modal đăng nhập
			dispatch(closeRegisterModal());
			dispatch(openLoginModal());
		} else {
			setError(res.error);
		}
		setLoading(false);
	};

	return (
		<div
			className='fixed inset-0 bg-black/35 bg-opacity-50 flex justify-center items-center z-50'
			onClick={() => dispatch(closeRegisterModal())} // Đóng modal khi click ngoài
		>
			<div
				className='bg-white p-12 rounded-lg shadow-lg max-w-lg w-full'
				onClick={(e) => e.stopPropagation()} // Ngăn chặn sự kiện click lan ra ngoài
			>
				{/* Tiêu đề */}
				<h2 className='text-2xl font-semibold text-gray-800 text-center mb-4'>
					Đăng Ký
				</h2>

				{/* Hiển thị lỗi nếu có */}
				{error && <p className='text-red-500 text-sm text-center'>{error}</p>}

				{/* Form đăng ký */}
				<form onSubmit={handleSubmit} className='space-y-4'>
					<input
						name='name'
						placeholder='Họ tên'
						required
						className='w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
					/>
					<input
						name='email'
						type='email'
						placeholder='Email'
						required
						className='w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
					/>
					<input
						name='password'
						type='password'
						placeholder='Mật khẩu'
						required
						className='w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
					/>
					<button
						type='submit'
						className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition'
						disabled={loading}
					>
						{loading ? 'Đang đăng ký...' : 'Đăng ký'}
					</button>
				</form>

				{/* Chuyển sang đăng nhập */}
				<p className='text-sm text-gray-600 text-center mt-4'>
					Đã có tài khoản?{' '}
					<button
						onClick={() => {
							dispatch(openLoginModal());
							dispatch(closeRegisterModal());
						}}
						className='text-blue-500 hover:underline'
					>
						Đăng nhập
					</button>
				</p>
			</div>
		</div>
	);
}
