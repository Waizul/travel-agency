import React, { useEffect, useState } from 'react';

const ManageBookings = () => {
	const [bookingInfo, setBookingInfo] = useState([]);
	useEffect(() => {
		fetch('https://mysterious-fortress-00690.herokuapp.com/bookingInfos')
			.then((res) => res.json())
			.then((data) => setBookingInfo(data));
	}, []);

	const handleConfirm = (id) => {
		const url = `https://mysterious-fortress-00690.herokuapp.com/bookingInfos/${id}`;
		fetch(url, {
			method: 'put',
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	};

	return (
		<div className=''>
			<table class='table-auto'>
				<thead>
					<tr>
						<th class='w-28 ...'>Name</th>
						<th class='w-20 ...'>From</th>
						<th class='w-16 ...'>To</th>
						<th class='w-28 ...'>Date</th>
						<th class='w-12'>Status</th>
					</tr>
				</thead>

				<tbody>
					{bookingInfo.map((info, index) => (
						<tr key={info._id} className='mr-2'>
							<td>{info.name}</td>
							<td> {info.from}</td>
							<td>{info.to}</td>
							<td>{info.date}</td>
							<td>{info.status}</td>
							<button
								onClick={() => handleConfirm(info._id)}
								className=' text-white bg-green-800 px-3 rounded hover:bg-green-900 mr-1'
							>
								Confirm
							</button>
							<button
								onClick={() => handleConfirm(info._id)}
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

export default ManageBookings;
