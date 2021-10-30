import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import useProvider from './../context/useProvider';
import axios from 'axios';
const Booking = () => {
	const [booking, setBooking] = useState({});

	const { id } = useParams();

	const { user } = useProvider();

	useEffect(() => {
		fetch(`http://localhost:5000/booking/${id}`)
			.then((res) => res.json())
			.then((data) => setBooking(data));
	}, [id]);

	const {
		register,
		handleSubmit,
		// formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		data.status = 'pending';

		axios
			.post('http://localhost:5000/bookingInfos', data)
			.then((data) => console.log(data));
	};

	return (
		<div className='grid grid-cols-12 mt-2 mb-5'>
			<div className='col-span-7 mx-3 text-justify'>
				<h3 className='text-xl font-semibold text-blue-700 mb-2'>
					Have a wonderful time in {booking.name}
				</h3>
				<img src={booking.img} className='w-full h-64' alt='' />
				<p>{booking?.description}</p>
			</div>
			<div className='col-span-5 mt-10 mx-2'>
				<h3 className='text-xl font-semibold text-blue-700 mb-2'>
					Registration form
				</h3>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col'
				>
					<input
						type='name'
						defaultValue={user.displayName}
						className='border-2 mb-2'
						{...register('name')}
					/>
					<input
						type='email'
						defaultValue={user.email}
						className='border-2 mb-2'
						{...register('email', { required: true })}
					/>

					<input
						type='name'
						className='border-2 mb-2'
						placeholder='to'
						defaultValue={booking.name}
						{...register('to')}
					/>
					<input
						type='name'
						className='border-2 mb-2'
						placeholder='from'
						{...register('from', { required: true })}
					/>
					<input
						type='date'
						className='border-2 mb-2'
						placeholder='place to visit'
						{...register('date', { required: true })}
					/>
					<input
						type='submit'
						className='hover:bg-red-700 hover:text-white mb-2'
					/>
				</form>
			</div>
		</div>
	);
};

export default Booking;
