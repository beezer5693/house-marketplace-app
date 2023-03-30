import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyATO_caBn2IZqkgwchU6_CiZW0-zEDwX8c',
	authDomain: 'house-marketplace-app-577bb.firebaseapp.com',
	projectId: 'house-marketplace-app-577bb',
	storageBucket: 'house-marketplace-app-577bb.appspot.com',
	messagingSenderId: '551337442880',
	appId: '1:551337442880:web:0ab8c8b6f0314fac1a29a5',
	measurementId: 'G-QM6NYL18JY'
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
