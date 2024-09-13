// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Import Firebase Auth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCFyRPc-GSvT7ORvwMfO9BCFlheqzXl5ho',
  authDomain: 'ecomer-53bf0.firebaseapp.com',
  projectId: 'ecomer-53bf0',
  storageBucket: 'ecomer-53bf0.appspot.com',
  messagingSenderId: '531737905365',
  appId: '1:531737905365:web:2e27f62b02cb4c55c4ba5c'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
const auth = getAuth(app);

export { auth };
