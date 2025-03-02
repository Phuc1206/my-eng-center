import pool from '../../db';
import bcrypt from 'bcryptjs';

export async function POST(request) {
	try {
		const { email, password, name } = await request.json();

		const [existingUsers] = await pool.query(
			'SELECT * FROM users WHERE email = ?',
			[email]
		);

		if (existingUsers.length > 0) {
			return new Response(JSON.stringify({ error: 'Email đã tồn tại' }), {
				status: 400,
			});
		}

		const hashedPassword = await bcrypt.hash(password, 10);
		const userId = crypto.randomUUID();

		await pool.query(
			'INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)',
			[userId, name, email, hashedPassword]
		);

		return new Response(JSON.stringify({ success: true }), {
			status: 201,
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
		});
	}
}
