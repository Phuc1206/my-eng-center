import SearchForm from '../../components/SearchForm';
import Courses from './courses/page';
import BannerSlider from '../../components/BannerSlider';
import Trainee from './trainee/page';
import Register from '../(nonfooter)/register/page';
export default function Home() {
	return (
		<>
			{/* Phần nền giới hạn trong 100vh */}
			<main className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-blue-800 text-white text-center p-6 w-full'>
				{/* Tiêu đề & mô tả */}
				<h1 className='text-5xl font-extrabold drop-shadow-md'>
					Chào mừng đến với Trung tâm tiếng Anh
				</h1>
				<p className='text-lg mt-4 max-w-2xl opacity-90'>
					Học tiếng Anh với phương pháp hiện đại, giảng viên chất lượng và lộ
					trình cá nhân hóa!
				</p>

				{/* Hình ảnh minh họa */}

				<BannerSlider />

				{/* Nút CTA */}
				<a
					href='/courses'
					className='mt-6 px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition-all duration-300'
				>
					Khám phá khóa học
				</a>
				<SearchForm />
			</main>

			<Courses />
			<Trainee />
			<Register />
		</>
	);
}
