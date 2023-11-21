import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB63-T1LBqf-m59ec2lYzbhv3lhZDAPq6c',
  authDomain: 'rezsqoin-93758.firebaseapp.com',
  projectId: 'rezsqoin-93758',
  storageBucket: 'rezsqoin-93758.appspot.com',
  messagingSenderId: '921679021078',
  appId: '1:921679021078:web:f7da5441ae1d4493ed6137',
  measurementId: 'G-BV6S2WHSZ1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
export const analytics = getAnalytics();
