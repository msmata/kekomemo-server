import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
   apiKey: 'AIzaSyB8tWEL69iFWhKIm9YBbiFqDLVamnuS9h8',
   authDomain: 'kekomemo-redux.firebaseapp.com',
   projectId: 'kekomemo-redux',
   storageBucket: 'kekomemo-redux.appspot.com',
   messagingSenderId: '433049969369',
   appId: '1:433049969369:web:4d4d2de20e7dac9a2c94c8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
