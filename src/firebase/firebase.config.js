import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyDJSUV759yYt_T3078kHpLEAuSdHQBTLj4',
	authDomain: 'travel-book-1c860.firebaseapp.com',
	projectId: 'travel-book-1c860',
	storageBucket: 'travel-book-1c860.appspot.com',
	messagingSenderId: '869257731904',
	appId: '1:869257731904:web:b68622a7c0696972d424a5',
};

const initializeAuthentication = () => {
	initializeApp(firebaseConfig);
};

export default initializeAuthentication;
