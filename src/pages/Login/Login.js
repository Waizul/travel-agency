import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useProvider from '../context/useProvider';

const Login = () => {
	const history = useHistory();
	const location = useLocation();

	const redirect_uri = location.state?.from || '/home';

	const { setUser, signInUsingGoogle, setLoading } = useProvider();

	const handleSignIn = () => {
		signInUsingGoogle()
			.then((result) => {
				// setLoading(true);
				const newUser = result.user;
				setUser(newUser);
				history.push(redirect_uri);
			})
			// .catch((error) => {})
			.finally(() => setLoading(false));
	};
	return (
		<div className='my-10 text-center'>
			<h3 className='text-2xl font-bold my-3'>Login</h3>
			<button
				onClick={handleSignIn}
				className='hover:bg-green-800 bg-blue-700 text-white px-2 rounded'
			>
				Sign In With Google
			</button>
		</div>
	);
};

export default Login;
