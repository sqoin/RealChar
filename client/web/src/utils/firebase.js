import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDLnBbFo99pa3q_jPdhk8f6l-mrYQhscjM',
  authDomain: 'Rezexperiments-17f9d.firebaseapp.com',
  projectId: 'Rezexperiments-17f9d',
  storageBucket: 'Rezexperiments-17f9d.appspot.com',
  messagingSenderId: '29700805528',
  appId: '1:29700805528:web:5245103998e9921b0e51ed',
  measurementId: 'G-WVHNEKCQ8Q',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
export const analytics = getAnalytics();
