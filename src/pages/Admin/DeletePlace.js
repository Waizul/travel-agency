import React, { useEffect, useState } from 'react';
import usePlace from '../usePlace';

const DeletePlace = () => {
	const places = usePlace();
	console.log(places);
	// const { name, _id } = places;
	const handleDelete = (id) => {
		const proceed = window.confirm('do you delete it');
		if (proceed) {
			const url = `https://mysterious-fortress-00690.herokuapp.com/places/${id}`;
			fetch(url, {
				method: 'delete',
			})
				.then((res) => res.json())
				.then((data) => {
					alert('delete');
					console.log(data);
				});
		}
	};
	return (
		<div>
			{places.map((place, index) => (
				<div key={place._id} className='grid grid-cols-2 gap-5 mb-1'>
					<div className='flex'>
						{/* <p>{index + 1}. </p> */}
						<p className='text-green-900 text-xl font-semibold'>
							{place.name}
						</p>
					</div>
					<div>
						<button
							onClick={() => handleDelete(place._id)}
							className=' text-white bg-red-800 px-3 rounded hover:bg-red-900'
						>
							Delete
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default DeletePlace;
