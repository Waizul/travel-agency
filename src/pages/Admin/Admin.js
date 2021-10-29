import React, { useEffect, useState } from 'react';
import ManageBookings from './ManageBookings';

const Admin = () => {
	const [bookingInfo, setBookingInfo] = useState([]);
	const [isTrue, setIsTrue] = useState(true);

	useEffect(() => {
		fetch('http://localhost:5000/bookingInfos')
			.then((res) => res.json())
			.then((data) => setBookingInfo(data));
	}, []);

	return (
		<div>
			<div className='grid grid-cols-12'>
				<div className='col-span-4 ml-0 border-r-8 align-center bg-gray-800 text-white text-center py-10'>
					<button
						onClick={() => setIsTrue(true)}
						className='my-4 mx-auto text-center block'
					>
						Manage Booking
					</button>
				</div>
				<div className='col-span-8 mx-auto'>
					{bookingInfo.map((info) => (
						<ManageBookings
							bookingInfo={info}
							key={info._id}
						></ManageBookings>
					))}
				</div>
			</div>
		</div>
	);
};

export default Admin;
