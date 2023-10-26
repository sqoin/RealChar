import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDkX08YmnuA0Pz7tyHxy5Om5bDG8CDgM6I',
  authDomain: 'daliexperiments.firebaseapp.com',
  projectId: 'daliexperiments',
  storageBucket: 'daliexperiments.appspot.com',
  messagingSenderId: '655391053560',
  appId: '1:655391053560:web:4b1a6fc7bda54b0478cd0d',
  measurementId: 'G-6NKVT8NQ0E'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
export const analytics = getAnalytics();
