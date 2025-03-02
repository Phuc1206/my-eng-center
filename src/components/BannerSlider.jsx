'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const BannerSlider = () => {
	return (
		<div className='mt-6 w-full h-full md:h-[300px] relative'>
			<Swiper
				modules={[Autoplay, Pagination, Navigation]}
				spaceBetween={10}
				slidesPerView={1}
				loop={true}
				autoplay={{ delay: 3000, disableOnInteraction: false }}
				pagination={{ clickable: true }}
				navigation
				className='h-full'
			>
				{/* Slide 1 */}
				<SwiperSlide>
					<Image
						src='/images/english-learning.jpg'
						alt='Học tiếng Anh'
						layout='fill'
						objectFit='contain'
					/>
				</SwiperSlide>

				{/* Slide 2 */}
				<SwiperSlide>
					<Image
						src='/images/english-learning.jpg'
						alt='Lớp học tiếng Anh'
						layout='fill'
						objectFit='contain'
					/>
				</SwiperSlide>

				{/* Slide 3 */}
				<SwiperSlide>
					<Image
						src='/images/english-learning.jpg'
						alt='Giáo viên hướng dẫn'
						layout='fill'
						objectFit='contain'
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default BannerSlider;
