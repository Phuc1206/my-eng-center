'use client'; // Nếu Next.js 13+

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const blogPosts = [
	{
		id: 1,
		title: 'Cấu trúc in order to',
		desc: 'Lý thuyết & bài tập',
		img: '/images/in-order-to.jpg',
	},
	{
		id: 2,
		title: 'Các cấp độ CEFR',
		desc: 'Quy đổi điểm số',
		img: '/images/cefr.jpg',
	},
	{
		id: 3,
		title: 'Cấu trúc so sánh bằng',
		desc: 'Công thức & bài tập',
		img: '/images/equal-comparison.jpg',
	},
	{
		id: 4,
		title: 'Mệnh đề danh từ',
		desc: 'Cấu trúc & cách dùng',
		img: '/images/noun-clause.jpg',
	},
	{
		id: 5,
		title: 'Would you like?',
		desc: 'Cách dùng & bài tập',
		img: '/images/would-you-like.jpg',
	},
	{
		id: 6,
		title: 'Cấu trúc Because',
		desc: 'Cách dùng chính xác',
		img: '/images/because.jpg',
	},
	{
		id: 7,
		title: 'Danh động từ & to-V',
		desc: 'Phân biệt dễ hiểu',
		img: '/images/gerund.jpg',
	},
	{
		id: 8,
		title: 'Câu điều kiện',
		desc: 'Cách dùng & ví dụ',
		img: '/images/conditional.jpg',
	},
	{
		id: 9,
		title: 'Câu bị động',
		desc: 'Công thức chi tiết',
		img: '/images/passive.jpg',
	},
	{
		id: 10,
		title: 'Mạo từ a/an/the',
		desc: 'Quy tắc sử dụng',
		img: '/images/articles.jpg',
	},
];

// Chia thành nhóm 5 bài (4 nhỏ + 1 lớn)
const chunkArray = (arr, size) => {
	return arr.reduce(
		(acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]),
		[]
	);
};

const BlogSlider = () => {
	const groupedPosts = chunkArray(blogPosts, 5); // Mỗi nhóm 5 bài

	return (
		<div className='bg-sky-300 py-10 w-full h-full'>
			<h2 className='text-3xl font-bold text-center text-blue-900 mb-6'>
				BLOG HỌC TIẾNG ANH CÙNG EngCenter
			</h2>
			<div className='max-w-6xl mx-auto px-4'>
				<Swiper
					slidesPerView={1}
					pagination={{ clickable: true }}
					navigation
					modules={[Pagination, Navigation]}
					className='mySwiper'
				>
					{groupedPosts.map((group, index) => (
						<SwiperSlide key={index}>
							<div className='grid grid-cols-3 gap-4'>
								{/* Bốn bài nhỏ bên trái */}
								<div className='col-span-2 grid grid-cols-2 gap-4'>
									{group.slice(0, 4).map((post) => (
										<div
											key={post.id}
											className='bg-white p-3 rounded-lg shadow-md'
										>
											<Image
												src={post.img}
												alt={post.title}
												width={200}
												height={120}
												className='rounded-md'
											/>
											<h3 className='text-sm font-bold text-blue-800 mt-2'>
												{post.title}
											</h3>
											<p className='text-gray-600 text-xs'>{post.desc}</p>
											<button className='mt-2 bg-blue-600 text-white py-1 px-2 rounded text-xs'>
												Xem thêm →
											</button>
										</div>
									))}
								</div>

								{/* Một bài lớn bên phải */}
								<div className='col-span-1 bg-white p-4 rounded-lg shadow-lg'>
									<Image
										src={group[4].img}
										alt={group[4].title}
										width={400}
										height={250}
										className='rounded-md'
									/>
									<h3 className='text-lg font-bold text-blue-800 mt-4'>
										{group[4].title}
									</h3>
									<p className='text-gray-600'>{group[4].desc}</p>
									<button className='mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg'>
										Xem thêm →
									</button>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default BlogSlider;
