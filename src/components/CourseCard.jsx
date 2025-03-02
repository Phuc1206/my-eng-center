import Image from 'next/image';

const CourseCard = ({ image, title, description, link }) => {
	return (
		<div className='bg-white shadow-lg rounded-lg overflow-hidden max-w-sm'>
			{/* Hình ảnh khóa học */}
			<div className='relative w-full h-60'>
				<Image src={image} alt={title} layout='fill' objectFit='cover' />
			</div>

			{/* Nội dung khóa học */}
			<div className='p-6'>
				<h3 className='text-lg font-bold text-blue-900'>{title}</h3>
				<p className='text-gray-700 text-sm mt-2'>{description}</p>

				{/* Link "XEM THÊM" */}
				<a
					href={link}
					className='text-yellow-500 font-semibold mt-4 inline-block'
				>
					XEM THÊM →
				</a>
			</div>
		</div>
	);
};

export default CourseCard;
