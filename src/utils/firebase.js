// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGtv57oOBBlPM4p1kf2Y4gTzUtdjgQnew",
  authDomain: "moviesgpt-7d1a3.firebaseapp.com",
  projectId: "moviesgpt-7d1a3",
  storageBucket: "moviesgpt-7d1a3.appspot.com",
  messagingSenderId: "133282660490",
  appId: "1:133282660490:web:0cc499fa5ea02bfdc16d73",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

// apiKey: "@@@",
// authDomain: "@@@@",
// projectId: "@@@",
// storageBucket: "@@@",
// messagingSenderId: "@@@",
// appId: "@@@",
