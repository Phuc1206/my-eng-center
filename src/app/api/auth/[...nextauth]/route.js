import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import pool from '../../db';

export const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'email' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				try {
					const [rows] = await pool.query(
						'SELECT * FROM users WHERE email = ?',
						[credentials.email]
					);

					if (rows.length === 0) return null;

					const user = rows[0];
					const isValid = await bcrypt.compare(
						credentials.password,
						user.password
					);

					if (!isValid) throw new Error('Mật khẩu không chính xác');

					return {
						id: user.id,
						email: user.email,
						name: user.name,
						role: user.role,
					};
				} catch (error) {
					throw new Error(error.message);
				}
			},
		}),
	],
	callbacks: {
		async jwt({ token, user, account }) {
			if (user) {
				token.id = user.id;
				token.role = user.role;
				token.provider = account?.provider;
			}
			return token;
		},
		async session({ session, token }) {
			session.user.id = token.id;
			session.user.role = token.role;
			session.user.provider = token.provider;
			return session;
		},
	},
	pages: {
		signIn: '/',
	},
	secret: process.env.AUTH_SECRET,
	session: {
		strategy: 'jwt',
		maxAge: 60 * 60 * 24,
	},
};
export const { handlers, auth } = NextAuth(authOptions);

export const { GET, POST } = handlers;
