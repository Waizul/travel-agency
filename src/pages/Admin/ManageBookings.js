import React, { useEffect, useState } from 'react';

const ManageBookings = () => {
	const [bookingInfo, setBookingInfo] = useState([]);
	useEffect(() => {
		fetch('http://localhost:5000/bookingInfos')
			.then((res) => res.json())
			.then((data) => setBookingInfo(data));
	}, []);

	return (
		<div>
			{bookingInfo.map((info) => (
				<div className='flex gap-5'>
					<p>{info.name}</p>
					<p>{info.email}</p>
					<p>{info.status}</p>
					<button>Confirm</button>
					<button>Delete</button>
				</div>
			))}
		</div>
	);
};

export default ManageBookings;
