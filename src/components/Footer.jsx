export default function Footer() {
	return (
		<footer className='bg-gray-900 text-white py-6 '>
			<div className='max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center'>
				{/* Logo và bản quyền */}
				<div className='text-center md:text-left'>
					<h2 className='text-lg font-bold'>Trung tâm tiếng Anh</h2>
					<p className='text-sm text-gray-400'>© 2025. All rights reserved.</p>
				</div>

				{/* Điều hướng nhanh */}
				<nav className='mt-4 md:mt-0 flex space-x-6 text-gray-400'>
					<a href='/courses' className='hover:text-white'>
						Khóa học
					</a>
					<a href='/about' className='hover:text-white'>
						Giới thiệu
					</a>
					<a href='/contact' className='hover:text-white'>
						Liên hệ
					</a>
				</nav>

				{/* Mạng xã hội */}
				<div className='mt-4 md:mt-0 flex space-x-4'>
					<a href='#' className='hover:text-blue-500'>
						Facebook
					</a>
					<a href='#' className='hover:text-blue-300'>
						Twitter
					</a>
					<a href='#' className='hover:text-pink-500'>
						Instagram
					</a>
				</div>
			</div>
		</footer>
	);
}
