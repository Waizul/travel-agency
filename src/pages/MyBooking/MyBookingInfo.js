import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useProvider from '../context/useProvider';

const MyBookingInfo = () => {
	const [myBooking, setMyBooking] = useState([]);
	console.log(myBooking);

	const { user } = useProvider();

	useEffect(() => {
		fetch(
			`https://mysterious-fortress-00690.herokuapp.com/bookingInfos/${user.email}`,
		)
			.then((res) => res.json())
			.then((data) => setMyBooking(data));
	}, [user.email]);

	const handleDelete = (id) => {
		const proceed = window.confirm('it will delete');
		if (proceed) {
			const url = `https://mysterious-fortress-00690.herokuapp.com/bookingInfos/${id}`;
			fetch(url, {
				method: 'delete',
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.deletedCount > 0) {
						alert('deleted');
					}
				});
		}
	};

	return (
		<div className='mr-2'>
			<table class='table-auto'>
				<thead>
					<tr>
						<th class='w-28 ...'>Name</th>
						<th class='w-28 ...'>From</th>
						<th class='w-28 ...'>To</th>
						<th class='w-28 ...'>Date</th>
						<th class='w-28'>Status</th>
					</tr>
				</thead>

				<tbody>
					{myBooking.map((info, index) => (
						<tr key={info._id} className='mr-2'>
							<td>{info.name}</td>
							<td> {info.from}</td>
							<td>{info.to}</td>
							<td>{info.date}</td>
							<td>{info.status}</td>
							<button
								onClick={() => handleDelete(info._id)}
								className=' text-white bg-red-800 px-3 rounded hover:bg-red-900'
							>
								Cancel
							</button>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default MyBookingInfo;
