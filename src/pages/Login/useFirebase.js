import initializeAuthentication from '../../firebase/firebase.config';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
initializeAuthentication();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);

	const auth = getAuth();

	const signInUsingGoogle = () => {
		const provider = new GoogleAuthProvider();
		return signInWithPopup(auth, provider);
	};

	const logOut = () => {
		signOut(auth)
			.then(() => {
				setUser({});
			})
			.catch((error) => {
				// An error happened.
			});
		// .finally(() => setLoading(true));
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			console.log(user);
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
			setLoading(false);
		});
	}, []);

	return { user, setUser, signInUsingGoogle, logOut, loading, setLoading };
};
export default useFirebase;
