import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useProvider from '../context/useProvider';

const PrivateRoute = ({ children, ...rest }) => {
	const { user, loading } = useProvider();
	console.log(user);

	if (loading) {
		<button type='button' class='bg-rose-600' disabled>
			<svg class='animate-spin h-5 w-5 mr-3' viewBox='0 0 24 24'></svg>
			Processing
		</button>;
	}

	return (
		<div>
			<Route
				{...rest}
				render={({ location }) =>
					user.email ? (
						children
					) : (
						<Redirect
							to={{
								pathname: '/login',
								state: { from: location },
							}}
						></Redirect>
					)
				}
			></Route>
		</div>
	);
};

export default PrivateRoute;
