import { useContext } from 'react';
import { authContext } from './ProvideAuth';

const useProvider = () => {
	return useContext(authContext);
};

export default useProvider;
