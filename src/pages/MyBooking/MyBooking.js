import React, { useState } from 'react';

import AddPlace from './AddPlace';
import MyBookingInfo from './MyBookingInfo';

const MyBooking = () => {
	const [isTrue, setIsTrue] = useState(true);

	return (
		<div className='grid grid-cols-12 h-96 text-center'>
			<div className='col-span-4 ml-0 border-r-8 align-center bg-gray-800 text-white py-10'>
				<button
					onClick={() => setIsTrue(true)}
					className='my-4 mx-auto text-center block'
				>
					My Booking
				</button>
				<button
					onClick={() => setIsTrue(false)}
					className='my-3 mx-auto block'
				>
					Add New Place
				</button>
			</div>
			<div className='col-span-8 my-10'>
				{isTrue ? (
					<MyBookingInfo></MyBookingInfo>
				) : (
					<AddPlace></AddPlace>
				)}
			</div>
		</div>
	);
};

export default MyBooking;
