import Image from 'next/image';

export default function TraineeCard({ student }) {
	return (
		<div className='bg-white shadow-lg rounded-lg overflow-hidden border'>
			{/* Hình ảnh */}
			<div className='relative w-full h-60 bg-yellow-400 flex items-center justify-center'>
				<Image
					src={student.image}
					alt={student.name}
					width={300}
					height={200}
					className='rounded-lg'
				/>
				<div className='absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
					Overall {student.overall}
				</div>
			</div>

			{/* Thông tin điểm số */}
			<div className='p-4 border-b'>
				<p className='text-blue-900 font-bold'>{student.name}</p>
				<p className='text-gray-700 text-sm mt-2'>
					Listening: {student.listening} | Reading: {student.reading} |
					Speaking: {student.speaking} | Writing: {student.writing}
				</p>
			</div>

			{/* Nội dung bài viết */}
			<div className='p-4'>
				<p className='text-red-500 text-sm font-semibold'>{student.tag}</p>
				<h3 className='text-lg font-semibold text-gray-800'>{student.title}</h3>
				<p className='text-gray-600 text-sm mt-2 line-clamp-2'>
					{student.description}
				</p>

				<div className='mt-4 flex items-center text-gray-500 text-sm'>
					{student.date}
				</div>
			</div>
		</div>
	);
}
