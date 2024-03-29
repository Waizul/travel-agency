import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useProvider from '../context/useProvider';

const AddPlace = () => {
	const { user } = useProvider();

	const {
		register,
		handleSubmit,
		reset,
		// formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		data.email = user.email;
		axios
			.post(
				'https://mysterious-fortress-00690.herokuapp.com/places',
				data,
			)
			.then((data) => {
				alert('new');
				reset();
			});
	};

	return (
		<div className=' my-5 w-64'>
			<h3 className='text-xl font-semibold text-blue-700 mb-2'>
				Add New Place
			</h3>
			<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
				<input
					placeholder='Place name'
					type='name'
					className='border-2 mb-2'
					{...register('name', { required: true })}
				/>
				<textarea
					placeholder='Description'
					className='border-2 mb-2'
					{...register('description', { required: true })}
				/>

				<input
					type='name'
					className='border-2 mb-2'
					placeholder='Image url'
					{...register('img')}
				/>

				<input
					type='submit'
					className='hover:bg-red-700 hover:text-white mb-2'
				/>
			</form>
		</div>
	);
};

export default AddPlace;
