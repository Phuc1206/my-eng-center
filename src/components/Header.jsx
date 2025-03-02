'use client';

import { signOut, useSession } from 'next-auth/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import dynamic from 'next/dynamic';
import { openLoginModal } from '../redux/features/modalSlice';
import { useDispatch, useSelector } from 'react-redux';

// Import dynamic để tránh lỗi SSR khi dùng modal
const LoginModal = dynamic(() => import('./LoginModal'), { ssr: false });
const RegisterModal = dynamic(() => import('./RegisterModal'), { ssr: false });
export default function Header() {
	const dispatch = useDispatch();
	const { data: session } = useSession();
	const isLoginModalOpen = useSelector((state) => state.modal.isLoginModalOpen);
	const isRegisterModalOpen = useSelector(
		(state) => state.modal.isRegisterModalOpen
	);
	return (
		<>
			<header className='bg-white shadow-md p-4'>
				<div className='max-w-6xl mx-auto flex justify-between items-center'>
					<a href='/' className='text-xl font-bold text-blue-500'>
						EngCenter
					</a>

					<nav className='hidden md:flex space-x-6 text-gray-700'>
						<a href='/courses' className='hover:text-black'>
							Khóa học
						</a>
						<a href='/introduction' className='hover:text-black'>
							Giới thiệu
						</a>
						<a href='/news' className='hover:text-black'>
							Tin tức
						</a>
						<a href='/contact' className='hover:text-black'>
							Liên hệ
						</a>
						<button className='text-gray-700 hover:text-black cursor-pointer'>
							<MagnifyingGlassIcon className='w-5 h-5 text-gray-700' />
						</button>
					</nav>

					<div className='flex items-center space-x-4'>
						{session ? (
							<>
								<p className='text-gray-700 hover:text-black'>
									Xin chào, {session.user.name}
								</p>
								<button
									onClick={() => signOut()}
									className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
								>
									Đăng xuất
								</button>
							</>
						) : (
							<button
								onClick={() => dispatch(openLoginModal())}
								className='px-6 py-3 bg-blue-500 text-white rounded-lg cursor-pointer'
							>
								Đăng nhập
							</button>
						)}
					</div>
				</div>
			</header>
			{isLoginModalOpen && <LoginModal />}
			{isRegisterModalOpen && <RegisterModal />}
		</>
	);
}
