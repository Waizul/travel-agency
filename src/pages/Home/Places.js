import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Places = () => {
	const [places, setPlaces] = useState([]);
	const [dataFound, setDataFound] = useState(false);
	const history = useHistory();

	useEffect(() => {
		fetch('http://localhost:5000/places')
			.then((res) => res.json())
			.then((data) => {
				setDataFound(true);
				setPlaces(data);
			});
	}, []);

	const handleButton = (id) => {
		history.push(`/booking/${id}`);
	};

	if (dataFound === false) {
		return (
			<button
				type='button'
				className='text-white text-center ml-16 bg-red-800 px-3'
				disabled
			>
				<svg
					className='animate-spin h-5 w-5 mr-3 text-red-800'
					viewBox='0 0 24 24'
				></svg>
				Processing
			</button>
		);
	}

	return (
		<div>
			{places.map((place) => (
				<div className='flex mx-5 py-5' key={place._id}>
					<div className='w-1/2'>
						<h2 className='text-2xl text-blue-700 font-bold'>
							{place.name}
						</h2>
						<p className='text-white mb-3'>
							{place.description.slice(0, 280)}
						</p>
						<button
							onClick={() => handleButton(place._id)}
							className='bg-blue-600 px-3 rounded text-white hover:bg-red-800'
						>
							Book Now
						</button>
					</div>
					<div className='w-1/2'>
						<img src={place.img} alt='' className='w-96 h-64' />
					</div>
				</div>
			))}
		</div>
	);
};

export default Places;
