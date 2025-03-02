import { Inter } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';
import { Providers } from '../components/Providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
export const metadata = {
	title: 'Trung tâm tiếng Anh | Học tiếng Anh Online',
	description:
		'Trung tâm tiếng Anh chất lượng cao, luyện thi TOEIC, IELTS, giao tiếp với giáo viên bản xứ.',
	icons: '/favicon.ico',
};
export default function RootLayout({ children }) {
	return (
		<html lang='vi' className={inter.className}>
			<head></head>
			<body className='font-sans'>
				<SessionProvider>
					<Providers>{children}</Providers>
				</SessionProvider>
			</body>
		</html>
	);
}
