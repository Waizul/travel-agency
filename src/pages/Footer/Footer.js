import React from 'react';

const Footer = () => {
	return (
		<div className='grid grid-cols-4 bg-gray-700 py-10 px-5 text-white'>
			<div>
				<h2 className='text-xl text-green-700'>Information</h2>
				<p>About Us</p>
				<p>Call Us</p>
				<p>General Enquiries</p>
				<p>Booking Conditions</p>
				<p>Refund Policy</p>
				<p>Privacy Policy</p>
			</div>
			<div>
				<h2 className='text-xl text-green-700'>Experiences</h2>
				<p>Beach</p>
				<p>Adventure</p>
				<p>Wildlife</p>
				<p>Honeymoon</p>
				<p>Culture & Heritage</p>
				<p>Nature</p>
			</div>
			<div>
				<h2 className='text-xl text-green-700'>Themes</h2>
				<p>Party</p>
				<p>Wedding</p>
				<p>Group Tours</p>
			</div>
			<div>
				<h2 className='text-xl text-green-700'>Necessary Link</h2>
				<p>Car Rental</p>
				<p>Flight Finder</p>
				<p>Restaurant Reservation</p>
				<p>Villas.com</p>
				<p>Neighbor</p>
			</div>
		</div>
	);
};

export default Footer;
