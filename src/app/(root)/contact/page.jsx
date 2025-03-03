'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const locations = [
	{
		name: 'VUS Bà Rịa',
		position: [10.498, 107.171], // Toạ độ (lat, lon)
		address: '122A Nguyễn Tất Thành, Phước Nguyên, Bà Rịa, Vũng Tàu',
	},
	{
		name: 'VUS Bình Dương - Bến Cát',
		position: [11.175, 106.625],
		address: '438 Đại Lộ Bình Dương, Mỹ Phước, Bến Cát, Bình Dương',
	},
	{
		name: 'VUS Bình Dương - Cách Mạng Tháng 8',
		position: [10.98, 106.654],
		address: '78 CMT8, Chánh Mỹ, TP. Thủ Dầu Một, Bình Dương',
	},
];

const MapComponent = () => {
	return (
		<MapContainer
			center={[10.7769, 106.7009]} // Toạ độ mặc định (HCM)
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
	);
};

export default MapComponent;
