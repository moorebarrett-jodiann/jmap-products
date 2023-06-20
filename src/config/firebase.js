// Import the functions you need from the SDKs you need
// Run:
// npm install firebase (per project)
// npm install -g firebase-tools (only once on global computer)
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut, 

} from 'firebase/auth';

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
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// auth functions

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error)
  }
}

const registerWithEmailAndPassword = async ( email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
  }
}

const logInWithGoogle = async () => {
  try {
    console.log("Google");
    await signInWithPopup(auth, googleProvider);
  } catch (error) {
    console.error(error);
  }
}

const logout = () => {
  signOut(auth);
}

export {
  auth,
  logInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
 };
