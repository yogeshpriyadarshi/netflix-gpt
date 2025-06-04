// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCy9jEaxSefHWAMvw7JP8Tqg1yTQfSw_Pg",
  authDomain: "netflix-gpt-3cda2.firebaseapp.com",
  projectId: "netflix-gpt-3cda2",
  storageBucket: "netflix-gpt-3cda2.firebasestorage.app",
  messagingSenderId: "901870608047",
  appId: "1:901870608047:web:475f897878d8ffc5147e5a",
  measurementId: "G-X3TYDSH1GM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

