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
		<section className='py-12 bg-gray-100'>
			<div className='container mx-auto px-4 max-w-2xl'>
				<h2 className='text-3xl font-bold text-center text-blue-900'>
					Đăng ký khóa học
				</h2>
				<p className='text-center text-gray-600 mt-2'>
					Điền thông tin để nhận tư vấn miễn phí
				</p>
				<form
					onSubmit={handleSubmit}
					className='mt-6 bg-white p-6 shadow-md rounded-lg'
				>
					<div className='mb-4'>
						<label className='block text-gray-700 font-medium'>Họ và tên</label>
						<input
							type='text'
							name='fullName'
							placeholder='Họ và tên'
							className='w-full p-2 border rounded text-black'
							value={formData.fullName}
							onChange={handleChange}
						/>
					</div>

					<div className='mb-4'>
						<label className='block text-gray-700 font-medium'>Email</label>
						<input
							type='email'
							name='email'
							placeholder='Email'
							className='w-full p-2 border rounded text-black'
							value={formData.email}
							onChange={handleChange}
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700 font-medium'>
							Số điện thoại
						</label>
						<input
							type='text'
							name='phone'
							placeholder='Số điện thoại'
							className='w-full p-2 border rounded text-black'
							value={formData.phone}
							onChange={handleChange}
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700 font-medium'>
							Chọn khóa học
						</label>
						<input
							type='text'
							name='course'
							placeholder='Khóa học muốn đăng ký'
							className='w-full p-2 border rounded text-black'
							value={formData.course}
							onChange={handleChange}
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-gray-700 font-medium'>
							Lời nhắn (Tùy chọn)
						</label>
						<textarea
							name='message'
							placeholder='Lời nhắn (tùy chọn)'
							className='w-full p-2 border rounded text-black'
							value={formData.message}
							onChange={handleChange}
						/>
					</div>
					<button
						type='submit'
						className='w-full bg-blue-500 text-white p-2 rounded'
					>
						Đăng Ký
					</button>
				</form>
				{message && (
					<p className='mt-4 text-center text-green-600'>{message}</p>
				)}
			</div>
		</section>
	);
}
