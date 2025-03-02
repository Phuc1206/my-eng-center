import CourseCard from '../../../components/CourseCard';

export default function Courses() {
	return (
		<section className='py-16 bg-gray-100'>
			<div className='max-w-6xl mx-auto px-6 text-center'>
				<h2 className='text-3xl font-extrabold text-blue-900'>
					CÁC KHÓA HỌC TẠI EngCenter
				</h2>
				<p className='text-gray-600 mt-2'>
					Các lớp luyện thi IELTS được mở liên tục mỗi tháng
				</p>

				{/* Danh sách khóa học */}
				<div className='grid md:grid-cols-3 gap-8 mt-8'>
					<CourseCard
						image='/images/english-learning.jpg'
						title='IELTS'
						description='Các khóa luyện thi IELTS được thiết kế theo nhiều cấp độ...'
						link='/courses/ielts'
					/>
					<CourseCard
						image='/images/english-learning.jpg'
						title='KHÓA GIA SƯ'
						description='Khóa học kèm riêng theo yêu cầu, giúp học viên nắm vững...'
						link='/courses/tutor'
					/>
					<CourseCard
						image='/images/english-learning.jpg'
						title='TIẾNG ANH GIAO TIẾP'
						description='Chương trình giao tiếp ứng dụng giúp cân bằng giữa lý thuyết và thực hành...'
						link='/courses/speaking'
					/>
				</div>
			</div>
		</section>
	);
}
