// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDhNFXzxupH0eajVXxwOxK9qfA39F0U3g",
  authDomain: "netflixgpt-e4c91.firebaseapp.com",
  projectId: "netflixgpt-e4c91",
  storageBucket: "netflixgpt-e4c91.appspot.com",
  messagingSenderId: "1030493899672",
  appId: "1:1030493899672:web:a6782204b446b214d7b9ed",
  measurementId: "G-W9EE15PR4X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
