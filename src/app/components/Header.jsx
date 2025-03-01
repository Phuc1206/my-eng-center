'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Header() {
	const { data: session } = useSession();
	return (
		<header className='bg-white shadow-md p-4'>
			<div className='max-w-6xl mx-auto flex justify-between items-center'>
				<a href='/' className='text-xl font-bold text-blue-500'>
					EngCenter
				</a>

				<nav className='hidden md:flex space-x-6 text-gray-700'>
					<a href='#' className='hover:text-black'>
						Khóa học
					</a>

					<a href='#' className='hover:text-black'>
						Giới thiệu
					</a>
					<a href='#' className='hover:text-black'>
						Tin tức
					</a>
					<a href='#' className='hover:text-black'>
						Liên hệ
					</a>
					<button className='text-gray-700 hover:text-black'>
						<MagnifyingGlassIcon className='w-5 h-5 text-gray-700' />
					</button>
				</nav>

				<div className='flex items-center space-x-4'>
					{/* <a href='/login' className='text-gray-700 hover:text-black'>
						Log in
					</a>
					<a href='#' className='bg-blue-500 text-white px-4 py-2 rounded-md'>
						Sign up
					</a> */}
					{session ? (
						<>
							<p>Xin chào, {session.user.name}</p>
							<button
								onClick={() => signOut()}
								className='mt-4 px-4 py-2 bg-red-500 text-white rounded'
							>
								Đăng xuất
							</button>
						</>
					) : (
						<button
							onClick={() => signIn('google')}
							className='px-6 py-3 bg-blue-500 text-white rounded-lg'
						>
							Đăng nhập với Google
						</button>
					)}
				</div>
			</div>
		</header>
	);
}
