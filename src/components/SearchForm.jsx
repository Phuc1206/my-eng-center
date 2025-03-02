const SearchForm = () => {
	return (
		<div className='flex items-center bg-white mt-3.5 p-2 rounded-lg shadow-md w-full max-w-md'>
			<input
				type='text'
				placeholder='Tìm kiếm'
				className='flex-1 p-2 outline-none border-none text-gray-700'
			/>
			<button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition'>
				Search
			</button>
		</div>
	);
};

export default SearchForm;
