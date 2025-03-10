import pool from '../db'; // Đảm bảo đúng đường dẫn
import { auth } from '../auth/[...nextauth]/route';
export async function POST(req) {
	try {
		const session = await auth();
		console.log(session);
		if (!session) {
			return Response.json({ message: 'Bạn chưa đăng nhập!' }, { status: 401 });
		}
		const body = await req.json(); // Đọc dữ liệu từ request body
		const { fullName, email, phone, course, message } = body;

		// Kiểm tra dữ liệu đầu vào
		if (!fullName || !email || !phone || !course) {
			return Response.json(
				{ message: 'Vui lòng nhập đầy đủ thông tin!' },
				{ status: 400 }
			);
		}

		// Thực hiện truy vấn MySQL
		const sql = `INSERT INTO registrations (fullName, email, phone, course, message) VALUES (?, ?, ?, ?, ?)`;
		const values = [fullName, email, phone, course, message];

		const [result] = await pool.execute(sql, values);

		// Trả về phản hồi JSON
		return Response.json(
			{ message: 'Đăng ký thành công!', id: result.insertId },
			{ status: 201 }
		);
	} catch (error) {
		console.error('❌ Lỗi server:', error);
		return Response.json({ message: 'Lỗi server!' }, { status: 500 });
	}
}
