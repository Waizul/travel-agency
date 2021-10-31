import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Feature from './Feature';
import Places from './Places';

const Home = () => {
	return (
		<div className=''>
			<Banner></Banner>
			<Places></Places>
			<Feature></Feature>
			<Contact></Contact>
		</div>
	);
};

export default Home;
