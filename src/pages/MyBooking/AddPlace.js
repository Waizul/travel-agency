import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useProvider from '../context/useProvider';

const AddPlace = () => {
	const { user } = useProvider();

	const {
		register,
		handleSubmit,
		// formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		data.email = user.email;
		axios
			.post('http://localhost:5000/places', data)
			.then((data = console.log(data)));
	};

	return (
		<div className='w-2/3 my-10 mx-auto'>
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
