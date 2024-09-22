// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAREzzlAnYU1IRQS7_FLQYRdjmhuS0jIs8",
  authDomain: "login-auth-b113e.firebaseapp.com",
  projectId: "login-auth-b113e",
  storageBucket: "login-auth-b113e.appspot.com",
  messagingSenderId: "560878073726",
  appId: "1:560878073726:web:0cb36293367a5eb5f4652f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app)
export default app;