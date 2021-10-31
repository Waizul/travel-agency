import { useEffect, useState } from 'react';

const usePlace = () => {
	const [places, setPlaces] = useState([]);

	useEffect(() => {
		fetch('https://mysterious-fortress-00690.herokuapp.com/places')
			.then((res) => res.json())
			.then((data) => {
				setPlaces(data);
			});
	}, []);
	return places;
};
export default usePlace;
