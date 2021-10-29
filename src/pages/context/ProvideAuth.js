import React, { createContext } from 'react';
import useFirebase from '../Login/useFirebase';

export const authContext = createContext();

const ProvideAuth = ({ children }) => {
	const authenticationInfo = useFirebase();

	return (
		<div>
			<authContext.Provider value={authenticationInfo}>
				{children}
			</authContext.Provider>
		</div>
	);
};

export default ProvideAuth;
