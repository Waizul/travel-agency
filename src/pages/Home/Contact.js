import React from 'react';
import img from './../../img.jpg';
import './Contact.css';
import { useForm } from 'react-hook-form';
const Contact = () => {
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		reset();
	};
	return (
		<div className='bg-img w-full h-96 '>
			<div className='pt-48 rounded'>
				<div className='bg-white  w-56 py-5'>
					<p className='text-xl text-center'>Send us message</p>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='flex flex-col  content-end w-48 mx-auto '
					>
						<input
							placeholder='name'
							type='name'
							className='border-2'
							{...register('example')}
						/>

						<input
							placeholder='email'
							type='email'
							{...register('exampleRequired', { required: true })}
							className='border-2'
						/>
						<input
							placeholder='what do you like to know'
							{...register('exampleRequired', { required: true })}
							className='border-2'
						/>

						<input
							type='submit'
							value='Send'
							className='bg-red-700 w-16 mt-5 rounded-2xl text-white'
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
