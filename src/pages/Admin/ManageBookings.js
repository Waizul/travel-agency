import React from 'react';

const ManageBookings = ({ bookingInfo }) => {
	const { name, email, status } = bookingInfo;
	return (
		<div>
			<div className='flex gap-5'>
				<p>{name}</p>
				<p>{email}</p>
				<p>{status}</p>
			</div>
		</div>
	);
};

export default ManageBookings;
