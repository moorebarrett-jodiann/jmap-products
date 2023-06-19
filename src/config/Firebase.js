// Import the functions you need from the SDKs you need
// Run:
// npm install firebase (per project)
// npm install -g firebase-tools (only once on global computer)
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBQbvm8Zh2ujjLaYHSKz19Y0saaY9fOSM4",
  authDomain: "jmap-36722.firebaseapp.com",
  projectId: "jmap-36722",
  storageBucket: "jmap-36722.appspot.com",
  messagingSenderId: "773553473358",
  appId: "1:773553473358:web:190c78753441154d71c01f",
  measurementId: "G-E5B8VW03C1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();