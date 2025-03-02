'use client';
import { useState } from 'react';

export default function RegisterForm() {
	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		phone: '',
		course: '',
		message: '',
	});
	const [message, setMessage] = useState('');

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setMessage('');

		try {
			const res = await fetch('/api/register', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			});
			const data = await res.json();
			setMessage(data.message);
		} catch (error) {
			console.error('Lỗi:', error);
			setMessage('Đăng ký thất bại!');
		}
	};

	return (
		<div className='max-w-lg mx-auto mt-10 p-6 border shadow-lg rounded-lg bg-white'>
			<h2 className='text-xl font-bold mb-4'>Đăng Ký Khóa Học</h2>
			<form onSubmit={handleSubmit} className='space-y-4'>
				<input
					type='text'
					name='fullName'
					placeholder='Họ và tên'
					className='w-full p-2 border rounded'
					value={formData.fullName}
					onChange={handleChange}
				/>
				<input
					type='email'
					name='email'
					placeholder='Email'
					className='w-full p-2 border rounded'
					value={formData.email}
					onChange={handleChange}
				/>
				<input
					type='text'
					name='phone'
					placeholder='Số điện thoại'
					className='w-full p-2 border rounded'
					value={formData.phone}
					onChange={handleChange}
				/>
				<input
					type='text'
					name='course'
					placeholder='Khóa học muốn đăng ký'
					className='w-full p-2 border rounded'
					value={formData.course}
					onChange={handleChange}
				/>
				<textarea
					name='message'
					placeholder='Lời nhắn (tùy chọn)'
					className='w-full p-2 border rounded'
					value={formData.message}
					onChange={handleChange}
				/>
				<button
					type='submit'
					className='w-full bg-blue-500 text-white p-2 rounded'
				>
					Đăng Ký
				</button>
			</form>
			{message && <p className='mt-4 text-center text-green-600'>{message}</p>}
		</div>
	);
}
