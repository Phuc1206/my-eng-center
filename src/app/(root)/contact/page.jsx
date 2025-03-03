'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const locations = [
	{
		name: 'EngCenter',
		position: [10.811547434248725, 106.68138409465351],
		address: '110/14 đường số 7, phường 3, Quận Gò Vấp, TPHCM',
	},
	{
		name: 'EngCenter',
		position: [10.811547434248725, 106.68138409465351],
		address: '110/14 đường số 7, phường 3, Quận Gò Vấp, TPHCM',
	},
	{
		name: 'EngCenter',
		position: [10.811547434248725, 106.68138409465351],
		address: '110/14 đường số 7, phường 3, Quận Gò Vấp, TPHCM',
	},
];

const Page = () => {
	return (
		<div className='container mx-auto p-4'>
			<h1 className='text-xl font-bold text-center mb-4'>
				Hệ Thống Trung Tâm Tiếng Anh
			</h1>
			<div className='flex flex-col md:flex-row '>
				<div className='md:w-3/12 h-fit p-4 bg-blue-400 rounded-lg m-8'>
					<h2 className='text-lg font-semibold mb-2'>Trung tâm gần bạn</h2>
					<ul>
						{locations.map((loc, index) => (
							<li key={index} className='p-2 bg-white rounded shadow mb-2'>
								<b>{loc.name}</b>
								<p>{loc.address}</p>
							</li>
						))}
					</ul>
				</div>
				<div className='md:w-3/6 border-8 rounded-md border-blue-400 m-8'>
					<MapContainer
						center={[10.7769, 106.7009]}
						zoom={10}
						style={{ height: '500px', width: '100%' }}
					>
						<TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
						{locations.map((loc, index) => (
							<Marker key={index} position={loc.position}>
								<Popup>
									<b>{loc.name}</b> <br /> {loc.address}
								</Popup>
							</Marker>
						))}
					</MapContainer>
				</div>
			</div>
		</div>
	);
};

export default Page;
