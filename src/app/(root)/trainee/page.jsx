import TraineeCard from '../../../components/TraineeCard';

// Dữ liệu mẫu cho học viên
const students = [
	{
		id: 1,
		name: 'Hồ Ngọc Thúy Linh',
		overall: 6.5,
		listening: 7.0,
		reading: 7.5,
		speaking: 6.0,
		writing: 6.0,
		image: '/images/student1.png',
		title:
			'Không còn sợ IELTS! Bí quyết giúp Thúy Linh đạt 6.5 chỉ sau một lộ trình',
		description:
			'Hồ Ngọc Thúy Linh – học sinh trường THPT Bùi Thị Xuân, Quận 1, TP. HCM vừa xuất sắc...',
		date: '21/02/2025',
		tag: 'KIMNGAN',
	},
	{
		id: 2,
		name: 'Lâm Vũ Thiên Phúc',
		overall: 7.5,
		listening: 8.0,
		reading: 7.0,
		writing: 7.0,
		speaking: 7.0,
		image: '/images/student2.png',
		title:
			'Chinh phục 7.5 IELTS, bứt phá 8.0 Listening cùng học viên Lâm Vũ Thiên Phúc',
		description:
			'Chinh phục IELTS là một hành trình đầy thử thách, nhưng với sự nỗ lực không ngừng, Lâm...',
		date: '11/02/2025',
		tag: 'WESET',
	},
	{
		id: 3,
		name: 'Vũ Trần Triển Duyên',
		overall: 6.5,
		listening: 8.0,
		reading: 6.5,
		speaking: 5.5,
		writing: 5.5,
		image: '/images/student3.png',
		title:
			'Học viên WESET chính thức “cán mốc” IELTS 6.5 Overall và 8.0 Listening',
		description:
			'Mỗi câu chuyện thành công tại WESET đều là nguồn động lực mạnh mẽ và niềm tự hào...',
		date: '24/01/2025',
		tag: 'WESET',
	},
];

export default function Trainee() {
	return (
		<section className='py-12 bg-white'>
			<div className='container mx-auto px-4'>
				<h2 className='text-3xl font-bold text-center text-blue-900'>
					Thành tích học viên
				</h2>
				<p className='text-center text-gray-600 mt-2'>
					Cập nhật ngay những học viên tiêu biểu
				</p>

				{/* Danh sách học viên */}
				<div className='mt-8 grid md:grid-cols-3 gap-6'>
					{students.map((student) => (
						<TraineeCard key={student.id} student={student} />
					))}
				</div>
			</div>
		</section>
	);
}
