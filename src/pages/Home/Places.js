import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Places = () => {
	const [places, setPlaces] = useState([]);
	const [dataFound, setDataFound] = useState(false);
	const history = useHistory();

	useEffect(() => {
		fetch('https://mysterious-fortress-00690.herokuapp.com/places')
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
		<div className='grid  sm:grid-cols-1 lg:grid-cols-2 gap-5 mx-10 py-5'>
			{places.map((place) => (
				<div
					key={place._id}
					className='transform hover:scale-110 motion-reduce:transform-none'
				>
					<div className='flex pl-3 bg-gray-800 text-white rounded-2xl'>
						<div className='w-1/2'>
							<h2 className='text-2xl text-blue-700 font-bold'>
								{place.name}
							</h2>
							<p className='mb-3'>
								{place.description.slice(0, 160)}
							</p>
							<button
								onClick={() => handleButton(place._id)}
								className='bg-red-600 px-3 rounded-2xl text-white hover:bg-red-800'
							>
								Book Now
							</button>
						</div>
						<div className='w-1/2'>
							<img
								src={place.img}
								alt=''
								className='w-96  h-64 rounded-r-2xl'
							/>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Places;
