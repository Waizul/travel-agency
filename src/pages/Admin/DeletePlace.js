import React, { useEffect, useState } from 'react';
import usePlace from '../usePlace';

const DeletePlace = () => {
	const [places] = usePlace();
	const handleDelete = (id) => {
		const url = ` http://localhost:5000/places/${id}`;
		fetch(url, {
			method: 'delete',
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	};
	return (
		<div>
			{places.map((place, index) => (
				<div key={place._id}>
					<p>{index}</p>
					<p>{place.name}</p>
					<button onClick={() => handleDelete(place._id)}>
						Delete
					</button>
				</div>
			))}
		</div>
	);
};

export default DeletePlace;
