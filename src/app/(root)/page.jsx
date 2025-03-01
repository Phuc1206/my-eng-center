import Image from 'next/image';

export default function Home() {
	return (
		<main className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-blue-800 text-white text-center p-6'>
			{/* Tiêu đề & mô tả */}
			<h1 className='text-5xl font-extrabold drop-shadow-md'>
				Chào mừng đến với Trung tâm tiếng Anh
			</h1>
			<p className='text-lg mt-4 max-w-2xl opacity-90'>
				Học tiếng Anh với phương pháp hiện đại, giảng viên chất lượng và lộ
				trình cá nhân hóa!
			</p>

			{/* Hình ảnh minh họa */}
			<div className='mt-6 relative w-80 h-80 md:w-[500px] md:h-[300px]'>
				<Image
					src='/images/english-learning.jpg'
					alt='Học tiếng Anh'
					layout='fill'
					objectFit='contain'
				/>
			</div>

			{/* Nút CTA */}
			<a
				href='/courses'
				className='mt-6 px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition-all duration-300'
			>
				Khám phá khóa học
			</a>

			{/* Hiệu ứng background */}
			<div className='absolute top-0 left-0 w-full h-full bg-blue-900 opacity-30 blur-xl -z-10'></div>
		</main>
	);
}
