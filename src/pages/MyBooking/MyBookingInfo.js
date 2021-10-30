import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useProvider from '../context/useProvider';

const MyBookingInfo = () => {
	const [myBooking, setMyBooking] = useState([]);
	console.log(myBooking);

	const { user } = useProvider();

	useEffect(() => {
		fetch(`http://localhost:5000/bookingInfos/${user.email}`)
			.then((res) => res.json())
			.then((data) => setMyBooking(data));
	}, [user.email]);

	const handleDelete = (id) => {
		const url = ` http://localhost:5000/bookingInfos/${id}`;
		fetch(url, {
			method: 'delete',
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	};

	return (
		<div>
			{myBooking.map((info, index) => (
				<div className='flex gap-5'>
					<p>{index + 1}</p>
					<p>{info.from}</p>
					<p>{info.to}</p>
					<button onClick={() => handleDelete(info._id)}>
						Cancel
					</button>
				</div>
			))}
		</div>
	);
};

export default MyBookingInfo;
