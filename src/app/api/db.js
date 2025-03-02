import mysql from 'mysql2/promise';

// Kết nối database sử dụng biến môi trường từ `.env.local`
const pool = mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD || '', // Nếu không có password, để trống
	database: process.env.DB_NAME,
	port: process.env.DB_PORT || 3306,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
});
(async () => {
	try {
		const connection = await pool.getConnection();
		console.log('✅ Kết nối MySQL thành công!');
		connection.release();
	} catch (error) {
		console.error('❌ Lỗi kết nối MySQL:', error.message);
	}
})();

export default pool;
