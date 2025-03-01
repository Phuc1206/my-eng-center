import banners from '../db';
export async function GET() {
	return Response.json(banners);
}
