import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useProvider from '../context/useProvider';

const Header = () => {
	const history = useHistory();
	const activeStyle = {
		color: 'red',
		font: 'bold',
		borderBottom: '2px solid white',
	};
	const { user, logOut } = useProvider();

	const handleLogOut = () => {
		logOut();
		history.push('/');
	};

	return (
		<div>
			<nav className='flex py-5 justify-center gap-10 font-bold bg-blue-600 text-white'>
				<NavLink to='/home' activeStyle={activeStyle}>
					Home
				</NavLink>
				<NavLink to='/myBooking' activeStyle={activeStyle}>
					My Booking
				</NavLink>
				<NavLink to='/admin' activeStyle={activeStyle}>
					Admin
				</NavLink>
				{user?.email ? (
					<h2 className=''>
						{user.displayName}
						<button
							onClick={handleLogOut}
							className='ml-2 font-bold'
						>
							Log Out
						</button>
					</h2>
				) : (
					<NavLink to='/login' activeStyle={activeStyle}>
						Login
					</NavLink>
				)}
			</nav>
		</div>
	);
};

export default Header;
