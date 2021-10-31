import React, { useState } from 'react';
import DeletePlace from './DeletePlace';
import ManageBookings from './ManageBookings';

const Admin = () => {
	const [isTrue, setIsTrue] = useState(true);

	return (
		<div className='h-96 bg-gray-100 mx-auto'>
			<div className='grid grid-cols-12 h-full '>
				<div className=' col-span-4 border-r-8 align-center bg-gray-800 text-white text-center py-10'>
					<button
						onClick={() => setIsTrue(true)}
						className='my-4 mx-auto text-center block'
					>
						Manage Booking
					</button>
					<button
						onClick={() => setIsTrue(false)}
						className='my-4 mx-auto text-center block'
					>
						Delete Place
					</button>
				</div>
				<div className='col-span-8 my-10'>
					{isTrue ? (
						<ManageBookings></ManageBookings>
					) : (
						<DeletePlace></DeletePlace>
					)}
				</div>
			</div>
		</div>
	);
};

export default Admin;
