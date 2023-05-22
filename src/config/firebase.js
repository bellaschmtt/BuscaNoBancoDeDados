// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCluhGdOso3RzCSmWzRENaXHOY-gvhR2bo",
  authDomain: "trabalhofausto-d2658.firebaseapp.com",
  projectId: "trabalhofausto-d2658",
  storageBucket: "trabalhofausto-d2658.appspot.com",
  messagingSenderId: "21435973357",
  appId: "1:21435973357:web:452338548e77430410d6e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);