import React, { useEffect, useState } from 'react';
import AddPlace from './AddPlace';

const MyBooking = () => {
	const [myBooking, setMyBooking] = useState([]);
	const [isTrue, setIsTrue] = useState(true);

	useEffect(() => {
		fetch('');
	}, []);
	return (
		<div className='grid grid-cols-12'>
			<div className='col-span-4 ml-0 border-r-8 align-center bg-gray-800 text-white text-center py-10'>
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
			<div className='col-span-8'>
				{isTrue ? <div>my bookings</div> : <AddPlace></AddPlace>}
			</div>
		</div>
	);
};

export default MyBooking;
